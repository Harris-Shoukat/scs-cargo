"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";

const faqItems = [
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using the tracking number provided after your order is confirmed. Enter the tracking number in the tracking section to see the current shipment status.",
  },
  {
    question: "How is the shipping cost calculated?",
    answer:
      "Shipping cost is calculated based on the package weight, dimensions, pickup location, and destination. Some shipments may also use volumetric weight calculations.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on the destination and shipping method. Domestic shipments typically take 1–3 days, while international deliveries may take 5–10 days depending on customs clearance and transport method.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we provide international courier services to many countries worldwide using reliable global logistics networks.",
  },
  {
    question: "What items are restricted or prohibited from shipping?",
    answer:
      "Certain items such as hazardous materials, illegal goods, or restricted products may not be shipped. Please review our shipping guidelines before sending a package.",
  },
  {
    question: "Do shipments go through customs for international delivery?",
    answer:
      "Yes, international shipments must pass through customs clearance, where duties or taxes may apply depending on the destination country.",
  },
  {
    question: "What should I do if my shipment is delayed or missing?",
    answer:
      "If your shipment is delayed or cannot be located through tracking, please contact our support team with your tracking number for assistance.",
  },
  {
    question: "Can businesses use your logistics services for bulk shipments?",
    answer:
      "Yes, we provide logistics and freight solutions for businesses including bulk cargo transportation, supply chain management, and international shipping.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[40%_1fr] lg:gap-16 lg:items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto lg:min-h-[550px]">
            <Image
              src="/metal-city-wall.jpg"
              alt="Cargo and logistics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={80}
              loading="lazy"
            />
          </div>

          {/* Right: FAQ Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Questions
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              FAQs on our courier and cargo shipping services
            </h2>

            <Accordion.Root
              type="single"
              collapsible
              className="mt-10"
            >
              {faqItems.map((item, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="group border-b border-gray-200 last:border-b-0"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-gray-900 transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-red-600">
                      {item.question}
                      <svg
                        className="size-5 shrink-0 text-gray-500 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-gray-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-5 pr-8 text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
