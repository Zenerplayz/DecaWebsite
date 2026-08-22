import { cn } from "@/lib/utils";

export default function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#0B241A" />
        <path d="M32 9 L45 27 H38 L51 45 H13 L26 27 H19 Z" fill="#F7BC26" />
        <rect x="29" y="43" width="6" height="12" rx="2.5" fill="#DCEFE2" />
      </svg>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-base font-bold tracking-tight",
            variant === "light" ? "text-white" : "text-pine-950"
          )}
        >
          Sycamore DECA
        </span>
        <span
          className={cn(
            "block text-[10px] font-semibold uppercase tracking-[0.18em]",
            variant === "light" ? "text-gold-400" : "text-gold-600"
          )}
        >
          Lead · Compete · Serve
        </span>
      </span>
    </span>
  );
}

