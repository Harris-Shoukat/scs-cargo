"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "Zoey Lane",
    text: "SCS Cargo moved my daughter's belongings from Lahore to Dubai quickly and at no extra cost. They were helpful, responsive, and easy to work with. Thank you!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Connie Law",
    text: "I'm very pleased with the service SCS Cargo provided. The team was professional, responsive, and made the whole process stress-free. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Brad Davis",
    text: "Fantastic experience. They took care of everything from A to Z. Will be using them again for sure.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    text: "Reliable and fast delivery. My international shipment arrived on time. Great customer support throughout.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

function StarRating({ count, className }: { count: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="size-5 text-[#f77f24]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-visible bg-white py-12 pb-16 md:py-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Testimonial
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            What our customers say
          </h2>
        </div>

        {/* Carousel with prev/next on sides */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative mt-10 overflow-visible"
        >
          <CarouselContent className="-ml-4 flex items-stretch pb-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full min-h-[240px] flex-col rounded-xl bg-amber-50/50 p-6 pb-8 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="size-14 shrink-0 rounded-full object-cover"
                      sizes="56px"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <StarRating count={testimonial.rating} className="mt-1" />
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-gray-600">{testimonial.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-50 md:-translate-x-4 [&_svg]:text-red-600" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-50 md:translate-x-4 [&_svg]:text-red-600" />
        </Carousel>
      </div>
    </section>
  );
}
