"use client";
import {
  HowItWorks,
  Features,
  Safety,
  Testimonials,
  CTA,
  Stats,
  IntroBooking,
} from "./_components";
import { Header } from "@/components/organisms/Header";

export default function Home() {
  return (
    <div className="scroll-container">
      <Header
        heroProps={{
          slides: [
            {
              id: "1",
              backgroundImage: "/images/handsome-man-driving-his-car.jpg",
            },
            {
              id: "2",
              backgroundImage: "/images/pexels-jeshoots-7433.jpg",
            },
            {
              id: "2",
              backgroundImage: "/images/driving-instructor-showing-vehicle.jpg",
            },
          ],
        }}
      />
      <IntroBooking />
      {/* <Stats /> */}
      <HowItWorks />
      <Features />
      <Safety />
      {/* <CTA /> */}
    </div>
  );
}
