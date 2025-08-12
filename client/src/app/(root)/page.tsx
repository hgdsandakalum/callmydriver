"use client";
import { HowItWorks, Features, Safety, Testimonials, CTA } from "./_components";
import Hero from "./_components/Hero/Hero";

export default function Home() {
  return (
    <div className="scroll-container">
      <Hero />
      <HowItWorks />
      <Features />
      <Safety />
      <Testimonials />
      <CTA />
    </div>
  );
}
