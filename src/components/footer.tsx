import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";
import Logo from "@/components/logo";
import { InstagramIcon, TikTokIcon, XIcon } from "@/components/social-icons";
import { site } from "@/data/site";

const socialIcon = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  X: XIcon,
};

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-pine-200">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-pine-300">
            {site.mission}
          </p>
          <div className="mt-5 flex gap-3">
            {site.socials.map((s) => {
              const Icon = socialIcon[s.platform];
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.platform}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold-400 hover:text-gold-400"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">Chapter</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/join" className="transition hover:text-white">
                Join
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">Resources</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/compete" className="transition hover:text-white">Competition Hub</Link></li>
            <li>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-pine-400">
                Practice Tests — coming soon
              </span>
            </li>
            <li>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-pine-400">
                AI Role-Play Judge — coming soon
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5"><Clock className="h-4 w-4 shrink-0 text-gold-400" /><Link href="/calendar" className="transition hover:text-white">Meetings — see the Calendar</Link></li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${site.advisorEmail}`} className="transition hover:text-white">{site.advisorEmail}</a>
            </li>
            <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-gold-400" />{site.school}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-pine-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.chapterName} · {site.school}</p>
          <p>A student-run chapter site. Not affiliated with DECA Inc.</p>
        </div>
      </div>
    </footer>
  );
}
