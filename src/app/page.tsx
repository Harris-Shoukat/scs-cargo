import { Contact, FAQ, Hero, Marquee, Pricing, Services, TeamSection, Testimonials, VideoSection, WhatWeDo, WhyChooseUs } from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeDo />
      <Services />
      <VideoSection />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <TeamSection />
      <FAQ />
      <Contact />
    </>
  );
}
