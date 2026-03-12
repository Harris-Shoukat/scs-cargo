import Image from "next/image";

const features = [
  {
    title: "Fast & Reliable Logistics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
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
    title: "Live Shipment Tracking",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Flexible Shipping Solutions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Safe & On-Time Delivery",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="overflow-visible bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl overflow-visible px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gray-600">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-[1.75rem]">
              Trusted Freight & Courier Services{" "}
              <span className="block text-red-600">
                With Personalized Logistics Solutions
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Provide fast, reliable, and secure transportation for domestic and
              international shipments. Our logistics network ensures safe
              handling, real-time shipment visibility, and flexible delivery
              solutions tailored for individuals and businesses.
            </p>

            {/* Feature Grid - 2 columns, 2 rows */}
            <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start transition-colors hover:opacity-90"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-200/80 bg-white text-gray-600">
                    {feature.icon}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Shipping Image */}
          <div className="relative order-1 flex items-center justify-center lg:order-2">
            <Image
              src="/container.png"
              alt="Shipping and logistics - freight transportation"
              width={700}
              height={580}
              className="h-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl object-contain object-center"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
