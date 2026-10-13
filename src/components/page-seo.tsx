import Link from "next/link";
import { seoRoutes, siteUrl } from "@/data/seo";

type Route = keyof typeof seoRoutes;

/** Visible navigation and matching schema share the same route hierarchy. */
export default function PageSeo({ route }: { route: Route }) {
  const page = seoRoutes[route];
  const url = route === "/" ? siteUrl : `${siteUrl}${route}`;
  const crumbs: { name: string; route: Route }[] = [{ name: "Home", route: "/" }];
  if (route.startsWith("/compete/")) {
    crumbs.push({ name: "Competition prep", route: "/compete" });
  }
  if (route !== "/") crumbs.push({ name: page.title, route });

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      ...(route !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    },
    ...(route === "/" ? [] : [{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.route === "/" ? siteUrl : `${siteUrl}${crumb.route}`,
      })),
    }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }} />
      {route !== "/" && (
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-pine-600">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {crumbs.map((crumb, index) => (
              <li key={crumb.route} className="inline-flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {index === crumbs.length - 1 ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <Link href={crumb.route} className="underline underline-offset-4 hover:text-pine-950">{crumb.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
