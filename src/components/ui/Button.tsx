import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "ghost",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 text-[0.8rem] tracking-[0.14em] uppercase transition-all duration-300 ease-out will-change-transform hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]";

  const styles =
    variant === "filled"
      ? "bg-deep-ocean text-warm-white hover:bg-med-blue hover:shadow-[0_8px_24px_-10px_rgba(22,48,58,0.55)]"
      : "border border-charcoal/25 text-charcoal hover:border-soft-gold hover:text-soft-gold hover:shadow-[0_8px_24px_-12px_rgba(184,155,94,0.4)]";

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...externalProps}>
      {children}
    </Link>
  );
}
