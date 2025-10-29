"use client";
import { CareerHero, CareerValues, CareerJobs } from "./_components";
import { AboutCTA } from "../about/_components";

export default function Careers() {
  return (
    <div className="scroll-container bg-background">
      {/* Hero Section */}
      <CareerHero />

      {/* Our Values Section */}
      <CareerValues />

      {/* Job Listings Section */}
      <CareerJobs />

      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
}
