"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 1000);
  };

  const address = "Hill View Arcade, 5 Davis Road, Lahore, Pakistan";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en&z=17`;

  return (
    <section id="contact" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[40%_1fr] lg:gap-16 lg:items-stretch">
          {/* Left: Contact Form */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch with us
            </h2>
            <p className="mt-4 text-gray-600">
              We handle domestic and international shipping, freight solutions,
              and cargo transport at competitive rates. Trusted courier and
              logistics services across Pakistan and worldwide.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name*"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email*"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <input
                name="company"
                type="text"
                required
                placeholder="Company*"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Message*"
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-red-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent"
                    : "Send the request"}
              </button>
            </form>
          </div>

          {/* Right: Map */}
          <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:min-h-0 lg:h-full">
            <div className="absolute inset-0 h-full w-full">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SCS Cargo - Lahore Office"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            {/* Address info bubble */}
            <div className="absolute left-4 top-4 max-w-[280px] rounded-lg border border-gray-200 bg-amber-50/95 px-4 py-3 shadow-sm backdrop-blur-sm">
              <p className="font-semibold text-gray-900">SCS Cargo</p>
              <p className="mt-1 text-sm text-gray-700">
                {address}
              </p>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-red-600 hover:text-red-700"
              >
                Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
