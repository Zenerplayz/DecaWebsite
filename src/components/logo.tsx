import { cn } from "@/lib/utils";

export default function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span aria-hidden="true" className="h-[9px] w-[9px] shrink-0 bg-[#b89a53]" />
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          variant === "light" ? "text-white" : "text-pine-950"
        )}
      >
        Sycamore DECA
      </span>
    </span>
  );
}
