const services = [
  {
    title: "Package Pickup",
    description:
      "Schedule a pickup from your home, office, or warehouse and let our logistics team handle the rest.",
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
  },
  {
    title: "Secure Transportation",
    description:
      "Your shipments are transported safely through our reliable freight network using road, air, and ocean transportation.",
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
  },
  {
    title: "Real-Time Shipment Tracking",
    description:
      "Track your packages in real time with accurate shipment updates from pickup to final delivery.",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Domestic Delivery",
    description:
      "Fast and reliable shipping across Pakistan connecting major cities such as Lahore, Karachi, and Islamabad.",
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
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "International Shipping",
    description:
      "Send parcels worldwide with our global logistics partners and secure international freight services.",
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
  },
  {
    title: "Business Logistics Solutions",
    description:
      "Customized logistics solutions for businesses including bulk shipping, supply chain support, and distribution services.",
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
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header + Mission */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide reliable logistics solutions designed to move your
            shipments quickly, safely, and efficiently across cities and around
            the world.
          </p>
          <p className="mt-6 rounded-xl border border-red-100 bg-red-50/60 px-6 py-4 text-sm font-medium text-gray-700">
            Our mission: connecting people and businesses through dependable
            delivery across Pakistan and beyond—with transparent service at every
            step.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-100 group-hover:text-red-700">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
