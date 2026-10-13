import Link from "next/link";
import Logo from "@/components/logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-pine-200 bg-white">
      <div className="container-page grid gap-7 py-8 sm:grid-cols-[1fr_auto] sm:py-10">
        <div>
          <Logo variant="dark" />
          <p className="mt-2 text-sm text-pine-700">
            Great Oaks · {site.school} · Cincinnati, Ohio
          </p>
          <nav
            aria-label="Footer"
            className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-pine-800"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline hover:underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="hover:underline hover:underline-offset-4"
            >
              Join
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm text-pine-700 sm:items-end">
          <a
            href={`mailto:${site.advisorEmail}`}
            className="text-link break-all"
          >
            {site.advisorEmail}
          </a>
          <a
            href={site.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            @sycamore.deca
          </a>
          <Link href="/compete/practice" className="text-link">
            Practice tests
          </Link>
        </div>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-pine-100 py-5 text-xs text-pine-700 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.chapterName}
        </p>
        <p>A student-run chapter site. Not affiliated with DECA Inc.</p>
      </div>
    </footer>
  );
}
