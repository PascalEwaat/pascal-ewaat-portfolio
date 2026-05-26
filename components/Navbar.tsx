"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "WORKS", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PLAYGROUND", href: "/playground" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white">
      {/* Logo */}
      <Link
        href="/"
        className="text-sm font-semibold tracking-[0.15em] uppercase text-black hover:opacity-60 transition-opacity"
      >
        PASCAL EWAAT
      </Link>

      {/* Center nav links */}
      <div className="flex items-center gap-10">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
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

      {/* CTA */}
      <a
        href="mailto:ewaatpascal@gmail.com"
        className="text-xs tracking-[0.15em] uppercase font-medium text-black hover:opacity-60 transition-opacity"
      >
        LET&apos;S TALK
      </a>
    </nav>
  );
}
