"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getNavLinks } from "@/lib/i18n/nav-links";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-400 ${
          transparent
            ? "bg-transparent"
            : "bg-ivory/95 shadow-[0_1px_0_0_rgba(31,35,32,0.06)] backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <Link
            href="/"
            className={`font-display text-lg tracking-[0.18em] uppercase transition-colors duration-400 ${
              transparent ? "text-warm-white" : "text-charcoal"
            }`}
          >
            Casa Jose Playa
          </Link>

          <nav
            className={`hidden items-center gap-9 text-[0.8rem] tracking-[0.08em] uppercase md:flex transition-colors duration-400 ${
              transparent ? "text-warm-white" : "text-charcoal"
            }`}
          >
            {navLinks.slice(1, -1).map((link) => (
              <Link key={link.href} href={link.href} className="underline-hover">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <LanguageSwitch tone={transparent ? "light" : "dark"} />
            </div>
            <Link
              href="/reservations"
              className={`hidden underline-hover text-[0.8rem] tracking-[0.1em] uppercase md:inline-block transition-colors duration-400 ${
                transparent ? "text-warm-white" : "text-soft-gold"
              }`}
            >
              {t.nav.reserve}
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={`flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden ${
                transparent ? "text-warm-white" : "text-charcoal"
              }`}
            >
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
