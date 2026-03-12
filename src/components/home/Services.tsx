import Link from "next/link";

const services = [
  {
    title: "Domestic Shipping",
    description:
      "Quick and reliable delivery across Pakistan with real-time tracking.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2" />
        <path d="M19 18h2c.6 0 1-.4 1-1v-3.65a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 0-1.15.62l-3.423 6.65" />
        <path d="M19 18h-2" />
        <path d="M14 9h4" />
        <path d="M17 18V9" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
    features: [
      "Same-day pickup",
      "COD support",
      "1-3 day delivery",
      "Nationwide coverage",
    ],
    cta: "Calculate Cost",
    href: "/calculate",
  },
  {
    title: "International Shipping",
    description:
      "Worldwide shipping via air and ocean freight with customs support.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    features: [
      "Air & ocean freight",
      "Customs clearance",
      "Global tracking",
      "Express options",
    ],
    cta: "Get a Quote",
    href: "/quote",
  },
  {
    title: "Express Delivery",
    description:
      "Urgent shipments delivered within 24–48 hours across Pakistan.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    features: [
      "Same-day delivery",
      "Priority handling",
      "Real-time updates",
      "Next-day delivery",
    ],
    cta: "Book Now",
    href: "/book",
  },
  {
    title: "Freight Solutions",
    description:
      "Heavy cargo and bulk shipments handled with specialized logistics.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </svg>
    ),
    features: [
      "Pallet shipping",
      "LTL & FTL options",
      "Warehousing",
      "Bulk discounts",
    ],
    cta: "Request Quote",
    href: "/quote",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Shipping Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive logistics solutions tailored to your shipping needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-100 group-hover:text-red-700">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-8 block w-full rounded-xl bg-red-600 px-6 py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-red-700 active:scale-[0.98]"
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
