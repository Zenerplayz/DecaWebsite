import { site } from "@/data/site";

export default function Pillars() {
  return (
    <ol className="mt-8 grid gap-7 border-t border-pine-900/15 pt-7 md:grid-cols-3 md:gap-10">
      {site.values.map(value => (
        <li key={value.title}>
          <h3 className="font-display text-2xl font-medium italic text-pine-950">{value.title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-pine-600">{value.description}</p>
        </li>
      ))}
    </ol>
  );
}