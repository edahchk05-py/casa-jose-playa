"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-40 flex flex-col bg-deep-ocean px-8 pt-28 pb-10 text-warm-white md:hidden"
        >
          <motion.nav
            className="flex flex-1 flex-col justify-center gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
            }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display block py-2 text-4xl"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <div className="flex flex-col gap-3 border-t border-warm-white/15 pt-6 text-sm tracking-[0.08em] uppercase text-warm-white/70">
            <span>{siteConfig.address.full}</span>
            <a href={siteConfig.contact.phoneHref} className="underline-hover">
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
