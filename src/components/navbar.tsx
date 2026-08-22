"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-pine-100 bg-white/85 shadow-soft backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label="Home" onClick={() => setOpen(false)}>
          <Logo variant="dark" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "bg-pine-100 text-pine-950"
                    : "text-pine-600 hover:bg-pine-50 hover:text-pine-950"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/join"
            className="btn-gold ml-2 px-5 py-2 text-sm"
          >
            Join DECA
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-pine-900 hover:bg-pine-50 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-pine-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-semibold",
                pathname.startsWith(item.href)
                  ? "bg-pine-50 text-pine-950"
                  : "text-pine-600 hover:bg-pine-50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 w-full text-sm"
          >
            Join DECA
          </Link>
        </nav>
      )}
    </header>
  );
}
