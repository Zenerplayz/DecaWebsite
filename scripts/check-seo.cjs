const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");

const origin = "https://sycamoredeca.com";
const routes = ["/", "/about", "/calendar", "/compete", "/compete/practice", "/compete/roleplay", "/join", "/socials"];
const target = process.argv[2];
const titles = new Set();

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map(([tag]) =>
    Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])),
  );
}

async function read(route, extension = ".html") {
  if (target) {
    const response = await fetch(new URL(route, target), { signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, `${route}: HTTP status`);
    assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""), `${route}: indexable response`);
    return response.text();
  }
  const filename = route === "/" ? "index" : route.slice(1);
  return fs.readFile(path.join(".next/server/app", `${filename}${extension}`), "utf8");
}

async function main() {
  for (const route of routes) {
    const html = await read(route);
    const canonical = route === "/" ? origin : `${origin}${route}`;
    const links = tags(html, "link").filter((tag) => tag.rel === "canonical");
    assert.equal(links.length, 1, `${route}: exactly one canonical`);
    assert.equal(links[0].href, canonical, `${route}: canonical target`);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert(title && !titles.has(title), `${route}: unique title`);
    assert(/Sycamore/.test(title), `${route}: chapter identity in title`);
    titles.add(title);
    const meta = tags(html, "meta");
    assert(meta.some((tag) => tag.name === "description" && tag.content.length > 50), `${route}: description`);
    assert(!meta.some((tag) => /robots/i.test(tag.name || "") && /noindex/i.test(tag.content)), `${route}: no noindex`);
    assert(meta.some((tag) => tag.property === "og:image" && tag.content.startsWith(origin)), `${route}: social image`);
    assert(meta.some((tag) => tag.name === "twitter:image" && tag.content.startsWith(origin)), `${route}: Twitter image`);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one primary heading`);
    const fontPreloads = tags(html, "link").filter((tag) => tag.rel === "preload" && tag.as === "font");
    // Next.js may emit preloads in response headers rather than static HTML.
    assert(fontPreloads.every((font) => font.type === "font/woff2"), `${route}: compressed font preloads`);
    const styles = tags(html, "link").filter((tag) => tag.rel === "stylesheet");
    const css = await Promise.all(styles.map((style) => target
      ? read(style.href, "")
      : fs.readFile(path.join(".next", style.href.replace(/^\/_next\//, "")), "utf8")));
    assert(css.some((text) => /@font-face/.test(text) && /\.woff2/.test(text)), `${route}: compressed local fonts in generated CSS`);
    if (route === "/") {
      assert(/Sycamore\s+DECA/.test(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]*>/g, " ") || ""), "home: descriptive chapter heading");
    }
    const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .flatMap(([, json]) => JSON.parse(json));
    const organization = schemas.find((schema) => schema["@type"] === "Organization");
    assert.equal(organization?.name, "Great Oaks Sycamore DECA", `${route}: consistent chapter name`);
    assert(schemas.some((schema) => schema["@type"] === "WebSite"), `${route}: site entity`);
    const page = schemas.find((schema) => schema["@type"] === "WebPage");
    assert.equal(page?.url.replace(/\/$/, ""), canonical.replace(/\/$/, ""), `${route}: page schema URL`);
    if (route !== "/") {
      const crumbs = schemas.find((schema) => schema["@type"] === "BreadcrumbList");
      assert(crumbs, `${route}: breadcrumb schema`);
      assert.equal(crumbs.itemListElement.at(-1).item, canonical, `${route}: breadcrumb destination`);
      assert(html.includes('aria-label="Breadcrumb"'), `${route}: visible breadcrumb`);
    }
    if (route === "/compete/practice") {
      assert(html.includes("independent study questions"), "practice: source disclosure in server HTML");
      assert(html.includes("How to use these DECA practice questions"), "practice: server-rendered study guide");
    }
    if (route === "/join") {
      const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
      assert(faq?.mainEntity.length > 0, "join: FAQ schema");
      for (const question of faq.mainEntity) assert(html.includes(question.name), "join: visible FAQ questions");
    }
    console.log(`PASS ${route}: metadata, canonical, schema, headings, social images`);
  }
  const sitemap = await read("/sitemap.xml", ".body");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
  assert.deepEqual(urls.sort(), routes.map((route) => route === "/" ? origin : `${origin}${route}`).sort(), "sitemap: all canonical public routes, no query duplicates");
  assert(!sitemap.includes("<lastmod>"), "sitemap: no invented update timestamps");
  const robots = await read("/robots.txt", ".body");
  assert(robots.includes("User-Agent: *") && robots.includes("Allow: /"), "robots: public crawling allowed");
  assert(robots.includes(`${origin}/sitemap.xml`), "robots: sitemap discovery");
  console.log("PASS sitemap and robots.txt");
  if (target) {
    const filtered = await read("/compete/practice?cluster=finance");
    const canonical = tags(filtered, "link").find((tag) => tag.rel === "canonical");
    assert.equal(canonical?.href, `${origin}/compete/practice`, "filtered quiz: canonical consolidates query variant");
    console.log("PASS filtered quiz canonical");
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
