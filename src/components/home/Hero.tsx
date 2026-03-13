import Image from "next/image";
import Link from "next/link";

const services = [
  "Air Freight",
  "Ocean Freight",
  "Road Freight",
];

export function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cargobg.jpg"
          alt="Logistics and cargo shipping"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Fast & Reliable Courier Services{" "}
            <span className="block">Across the World</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
            Delivering your shipments safely by air, ocean, and road with
            real-time tracking.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/track"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl active:scale-[0.98]"
            >
              Track Shipment
            </Link>
            <Link
              href="/calculate"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-[0.98]"
            >
              Calculate Cost
            </Link>
          </div>

          {/* Service Indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/90">
            {services.map((service) => (
              <span key={service} className="flex items-center gap-2">
                <span className="text-green-400" aria-hidden>
                  ✓
                </span>
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
