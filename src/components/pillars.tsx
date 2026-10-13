import { site } from "@/data/site";

export default function Pillars() {
  return (
    <ul className="mt-6 grid gap-6 md:grid-cols-3 md:gap-10">
      {site.values.map(value => (
        <li key={value.title}>
          <h3 className="text-xl font-semibold text-pine-950">{value.title}</h3>
          <p className="mt-2 max-w-sm text-base leading-relaxed text-pine-600">{value.description}</p>
        </li>
      ))}
    </ul>
  );
}
