import { cn } from "@/lib/utils";

export default function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          variant === "light" ? "text-white" : "text-pine-950"
        )}
      >
        Sycamore DECA
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "hidden text-[10px] font-semibold uppercase tracking-[0.18em] sm:inline",
          variant === "light" ? "text-gold-400" : "text-gold-600"
        )}
      >
        Lead · Compete · Serve
      </span>
    </span>
  );
}
