"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-shrink-0 items-center text-xl font-bold text-white transition-colors hover:text-white/90"
        >
          SCS Cargo
        </Link>

        {/* Center Nav Links - hidden on mobile, visible on md+ */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Action Buttons - hide Login/SignUp on small mobile, show from sm */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg text-white/90 transition-colors hover:text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
          <div className="hidden gap-3 sm:flex">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-white/90"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-black/40 px-4 py-4 backdrop-blur-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg py-2.5 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-2 border-t border-white/10 pt-4">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex-1 rounded-lg border border-white/30 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="flex-1 rounded-lg bg-white py-2.5 text-center text-sm font-medium text-gray-900 transition-colors hover:bg-white/90"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
