"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const currentLocation = (href: string) =>
    pathname === href ? "page" : pathname.startsWith(`${href}/`) ? "location" : undefined;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-pine-100 bg-cream/95 backdrop-blur-sm"
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <a href="#main-content" className="sr-only z-50 bg-white px-4 py-3 font-semibold text-pine-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-2">Skip to content</a>
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label="Home" aria-current={pathname === "/" ? "page" : undefined} className="inline-flex min-h-11 items-center" onClick={() => setOpen(false)}>
          <Logo variant="dark" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active = Boolean(currentLocation(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={currentLocation(item.href)}
                className={cn(
                  "inline-flex min-h-11 items-center px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-pine-950 underline decoration-pine-700 underline-offset-8"
                    : "text-pine-600 hover:text-pine-950"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/join"
            aria-current={currentLocation("/join")}
            className="btn-gold ml-2 px-5 py-2 text-sm"
          >
            Join DECA
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-pine-900 hover:bg-pine-50 active:bg-pine-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

        <nav id="mobile-navigation" aria-label="Primary" hidden={!open} className="border-t border-pine-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={currentLocation(item.href)}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-semibold",
                currentLocation(item.href)
                  ? "bg-pine-50 text-pine-950"
                  : "text-pine-600 hover:bg-pine-50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            aria-current={currentLocation("/join")}
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 w-full text-sm"
          >
            Join DECA
          </Link>
        </nav>
    </header>
  );
}
