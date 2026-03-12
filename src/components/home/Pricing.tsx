"use client";

import { useRef, useState } from "react";

const DOMESTIC_BASE = 250;
const DOMESTIC_PER_KG = 120;
const INTERNATIONAL_BASE = 15;
const INTERNATIONAL_PER_KG = 8;

const domesticFeatures = [
  "Delivery across Pakistan",
  "Real-time shipment tracking",
  "Secure parcel handling",
  "Cash on Delivery support",
];

const internationalFeatures = [
  "Worldwide shipping",
  "Air freight priority delivery",
  "Customs clearance support",
  "Global shipment tracking",
];

export function Pricing() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [shippingType, setShippingType] = useState<"domestic" | "international">("domestic");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const weightNum = parseFloat(weight) || 0;
  const domesticCost = DOMESTIC_BASE + weightNum * DOMESTIC_PER_KG;
  const internationalCost = INTERNATIONAL_BASE + weightNum * INTERNATIONAL_PER_KG;
  const estimatedCost =
    shippingType === "domestic"
      ? domesticCost
      : internationalCost;

  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparent & Flexible Shipping Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Calculate and estimate your shipping costs for domestic and international deliveries.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Domestic Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100">
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-50" />
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900">Domestic Delivery</h3>
              <p className="mt-2 text-gray-600">Fast and reliable delivery within Pakistan.</p>
              <div className="mt-6 space-y-1">
                <p className="text-sm text-gray-500">Base Price: PKR 250</p>
                <p className="text-sm text-gray-500">Per KG: PKR 120</p>
                <p className="mt-3 text-sm font-medium text-red-600">Estimated: 1–3 Days</p>
              </div>
              <ul className="mt-6 space-y-3">
                {domesticFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  setShippingType("domestic");
                  calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 w-full rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-red-700 active:scale-[0.98]"
              >
                Calculate Domestic Cost
              </button>
            </div>
          </div>

          {/* International Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-red-100">
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-50" />
            <div className="relative">
              <h3 className="text-xl font-bold text-gray-900">International Delivery</h3>
              <p className="mt-2 text-gray-600">Ship your packages worldwide with secure international logistics.</p>
              <div className="mt-6 space-y-1">
                <p className="text-sm text-gray-500">Base Price: $15</p>
                <p className="text-sm text-gray-500">Per KG: $8</p>
                <p className="mt-3 text-sm font-medium text-red-600">Estimated: 5–10 Days</p>
              </div>
              <ul className="mt-6 space-y-3">
                {internationalFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  setShippingType("international");
                  calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 w-full rounded-xl border-2 border-red-600 bg-white px-6 py-3 font-semibold text-red-600 transition-all duration-200 hover:bg-red-50 active:scale-[0.98]"
              >
                Calculate International Cost
              </button>
            </div>
          </div>
        </div>

        {/* Cost Calculator */}
        <div
          ref={calculatorRef}
          className="mt-20 rounded-2xl border border-gray-200 bg-gray-50/50 p-8 shadow-sm md:p-10"
        >
          <h3 className="text-2xl font-bold text-gray-900">Shipping Cost Calculator</h3>
          <p className="mt-2 text-gray-600">Estimate your delivery cost by entering the details below.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                id="pickup"
                type="text"
                placeholder="e.g. Lahore, Karachi"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination Location
              </label>
              <input
                id="destination"
                type="text"
                placeholder="e.g. Islamabad, Dubai"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Package Weight (kg)
              </label>
              <input
                id="weight"
                type="number"
                min="0"
                step="0.1"
                placeholder="e.g. 5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <input
                id="height"
                type="number"
                min="0"
                placeholder="e.g. 20"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                Width (cm)
              </label>
              <input
                id="width"
                type="number"
                min="0"
                placeholder="e.g. 30"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
            <div>
              <label htmlFor="depth" className="block text-sm font-medium text-gray-700">
                Depth (cm)
              </label>
              <input
                id="depth"
                type="number"
                min="0"
                placeholder="e.g. 15"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
          </div>

          {/* Estimated Cost */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Estimated Shipping Cost</p>
              <p className="mt-1 text-3xl font-bold text-red-600">
                {shippingType === "domestic"
                  ? `PKR ${Math.round(estimatedCost).toLocaleString()}`
                  : `$ ${estimatedCost.toFixed(2)}`}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {shippingType === "domestic" ? "Domestic" : "International"} • Weight: {weight || "0"} kg
              </p>
            </div>
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
              Base + (Weight × Per KG Rate)
            </p>
          </div>
        </div>

        {/* Trust Element */}
        <p className="mt-12 text-center text-gray-500">
          Fair and transparent pricing with no hidden charges.
        </p>
      </div>
    </section>
  );
}
