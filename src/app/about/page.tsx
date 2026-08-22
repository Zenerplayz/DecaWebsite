import { awards, officers } from "@/data/content";
import { site } from "@/data/site";

const levelStyles: Record<string, string> = {
  District: "bg-pine-100 text-pine-700",
  State: "bg-gold-100 text-gold-700",
  International: "bg-pine-950 text-gold-300",
  Chapter: "bg-leaf-100 text-leaf-700",
};

export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">About</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            {site.chapterName}
          </h1>
          <p className="mt-4 text-lg text-pine-600">{site.mission}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {site.values.map((v) => (
            <div key={v.title} className="card p-7 text-center">
              <h2 className="font-display text-2xl font-bold text-gold-600">{v.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-pine-600">{v.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-center font-display text-3xl font-bold text-pine-950">
          Meet the officers
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {officers.map((o) => (
            <article key={o.name} className="card p-7 text-center transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pine-900 to-leaf-700 font-display text-xl font-bold text-white">
                {o.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-display font-bold text-pine-950">{o.name}</h3>
              <span className="badge mt-2 bg-gold-100 text-gold-700">{o.role}</span>
              <p className="mt-3 text-sm text-pine-600">{o.blurb}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-20 text-center font-display text-3xl font-bold text-pine-950">
          Awards history
        </h2>
        <div className="mx-auto mt-8 max-w-2xl">
          {awards.map((a, i) => (
            <div key={i} className="relative flex gap-5 pb-8 last:pb-0">
              {i < awards.length - 1 && (
                <span className="absolute left-[7px] top-6 h-full w-px bg-pine-200" aria-hidden="true" />
              )}
              <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-gold-500 bg-cream" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-pine-400">{a.year}</span>
                  <span className={`badge ${levelStyles[a.level]}`}>{a.level}</span>
                </div>
                <h3 className="mt-1 font-semibold text-pine-950">{a.title}</h3>
                <p className="text-sm text-pine-600">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
