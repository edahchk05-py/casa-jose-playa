"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageSwitch({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { locale, setLocale } = useLanguage();

  const activeClass = tone === "light" ? "text-warm-white" : "text-charcoal";
  const inactiveClass =
    tone === "light" ? "text-warm-white/45 hover:text-warm-white/80" : "text-charcoal/40 hover:text-charcoal/70";

  return (
    <div
      className="flex items-center gap-1.5 text-[0.75rem] tracking-[0.1em]"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLocale("fr")}
        aria-pressed={locale === "fr"}
        className={`transition-colors duration-300 ${locale === "fr" ? activeClass : inactiveClass}`}
      >
        FR
      </button>
      <span aria-hidden className={tone === "light" ? "text-warm-white/30" : "text-charcoal/25"}>
        |
      </span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`transition-colors duration-300 ${locale === "en" ? activeClass : inactiveClass}`}
      >
        EN
      </button>
    </div>
  );
}
