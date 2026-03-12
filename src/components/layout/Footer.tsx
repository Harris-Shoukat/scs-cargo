"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { href: "/#about", label: "About us" },
  { href: "/#services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/track", label: "Tracking" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Telegram" },
  { href: "#", label: "Linkedin" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to newsletter API
  };

  return (
    <footer className="bg-[#1e1c1c] text-gray-200">
      {/* Primary Content Area */}
      <div className="mx-auto max-w-7xl py-16 pl-12 pr-8 md:pl-20 md:pr-12 lg:pl-24 lg:pr-16">
        <div className="grid gap-6 lg:grid-cols-[45%_auto_auto_1fr] lg:gap-x-2 lg:gap-y-6">
          {/* Column 1: Logo and Newsletter */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold uppercase tracking-tight text-white">
                SCS
              </span>
              <span className="block text-sm font-medium uppercase tracking-wider text-white/90">
                Cargo
              </span>
            </Link>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Newsletter
              </h3>
              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-4 flex flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Your Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="min-w-0 flex-1 rounded border border-gray-600 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded bg-[#f77f24] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e6701a]"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <a href="tel:+923010000000" className="hover:text-white">
                  +92 301 0000000
                </a>
              </li>
              <li>
                <a href="mailto:info@scscargo.com" className="hover:text-white">
                  info@scscargo.com
                </a>
              </li>
              <li className="max-w-[200px]">
                Faisalabad, Punjab, Pakistan
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Socials
            </h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-4 md:flex-row md:px-12 lg:px-16">
          <p className="text-xs text-gray-500">
            © 2015-{new Date().getFullYear()} SCS Cargo. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link
              href="/privacy"
              className="transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-gray-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
