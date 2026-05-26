"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "WORKS", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PLAYGROUND", href: "/playground" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.15em] uppercase text-black hover:opacity-60 transition-opacity"
        >
          PASCAL EWAAT
        </Link>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.15em] uppercase transition-opacity hover:opacity-60 ${
                  isActive
                    ? "border-b border-black pb-[2px] font-medium"
                    : "font-normal text-black/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="mailto:ewaatpascal@gmail.com"
          className="hidden md:block text-xs tracking-[0.15em] uppercase font-medium text-black hover:opacity-60 transition-opacity"
        >
          LET&apos;S TALK
        </a>

        {/* ── Mobile hamburger ──
            Uses absolute-positioned spans so transforms never get clipped
            by the flex container's bounds.
            Container: 40×40px, center Y = 20px → span top when centred = 19px.
            Closed gaps: lines at top-[10px], top-[19px], top-[28px] (9px apart).
        ── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative w-10 h-10 overflow-visible"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {/* Line 1 */}
          <span
            className={`absolute left-[5px] h-[1.5px] w-5 bg-black transition-all duration-300 origin-center ${
              menuOpen ? "top-[19px] rotate-45" : "top-[10px]"
            }`}
          />
          {/* Line 2 (middle — fades out when open) */}
          <span
            className={`absolute left-[5px] top-[19px] h-[1.5px] w-5 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          {/* Line 3 */}
          <span
            className={`absolute left-[5px] h-[1.5px] w-5 bg-black transition-all duration-300 origin-center ${
              menuOpen ? "top-[19px] -rotate-45" : "top-[28px]"
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile full-screen menu overlay (z-40, below nav at z-50) ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-3xl font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-50 ${
                isActive ? "opacity-100" : "opacity-40"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Let's Talk — styled as a filled button */}
        <a
          href="mailto:ewaatpascal@gmail.com"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-10 py-4 bg-black text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-black/80 transition-colors"
        >
          LET&apos;S TALK
        </a>
      </div>
    </>
  );
}
