"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const steps = [
    {
      number: "1",
      title: "Request a Ride",
      description:
        "Request a ride by sharing your location and we'll match you with a nearby professional driver.",
      image: "/images/City-driver-pana.png",
    },
    {
      number: "2",
      title: "Driver Arrives",
      description:
        "Your verified driver arrives at your location. They'll drive your vehicle while you relax as a passenger.",
      image: "/images/City-driver-bro.png",
    },
    {
      number: "3",
      title: "Safe Arrival",
      description:
        "Arrive safely at your destination. You can rate your experience after the ride.",
      image: "/images/Car-driving-pana.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".how-it-works-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 100, rotationY: 45 },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className=" flex items-center py-20 bg-foreground min-h-[70dvh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="how-it-works-header text-center mb-2">
          <h2 className="text-3xl sm:text-5xl font-medium font-dm-serif-display mb-2">
            How SafeRide Works
          </h2>
          <p className="text-base color-secondary max-w-3xl mx-auto">
            Getting home safely is just three simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="text-center group flex flex-col items-center justify-center"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={250}
                height={100}
              />
              <h3 className="text-xl font-semibold mb-4 text-primary-dark">
                {step.title}
              </h3>
              <p className="">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
