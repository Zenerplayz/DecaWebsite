import { officers } from "@/data/content";
import { site } from "@/data/site";

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
        {officers.filter((o) => o.role === "President").map((o) => (
          <article key={o.name} className="card mx-auto mt-8 max-w-sm p-8 text-center transition hover:-translate-y-1 hover:shadow-lift">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-display text-3xl font-bold text-pine-950">
              {o.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-pine-950">{o.name}</h3>
            <span className="badge mt-2 bg-pine-950 text-gold-300">{o.role}</span>
            {o.blurb && <p className="mt-3 text-sm text-pine-600">{o.blurb}</p>}
          </article>
        ))}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {officers.filter((o) => o.role !== "President").map((o) => (
            <article key={o.name} className="card p-7 text-center transition hover:-translate-y-1 hover:shadow-lift">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pine-900 to-leaf-700 font-display text-xl font-bold text-white">
                {o.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-display font-bold text-pine-950">{o.name}</h3>
              <span className="badge mt-2 bg-gold-100 text-gold-700">{o.role}</span>
              {o.blurb && <p className="mt-3 text-sm text-pine-600">{o.blurb}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
