"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/atoms/card";
import {
  Shield,
  Clock,
  MapPin,
  SteeringWheel,
  Zap,
  Award,
} from "../../../../public/icons";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const features = [
    {
      icon: Shield,
      title: "Certified Drivers",
      description:
        "All drivers are professionally trained, background-checked, and fully insured for your safety.",
      iconColor: "color-primary",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock service for emergencies, late nights, and whenever you need us most.",
      iconColor: "color-secondary",
    },
    {
      icon: MapPin,
      title: "Transparent Pricing",
      description:
        "Clear, upfront pricing with no hidden fees. Pay only for the distance traveled, with rates displayed before booking.",
      iconColor: "color-primary",
    },
    {
      icon: SteeringWheel,
      title: "Your Vehicle",
      description:
        "We drive your own car, so you wake up with your vehicle safely parked at home.",
      iconColor: "color-primary",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description:
        "Average pickup time under 15 minutes in urban areas, with priority emergency response.",
      iconColor: "color-secondary",
    },
    {
      icon: Award,
      title: "Premium Service",
      description:
        "Consistently rated 5 stars by customers for professionalism and reliability.",
      iconColor: "color-primary",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".features-header",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards grid animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, rotationX: 45 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
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
      id="features"
      className=" flex items-center py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="features-header text-center mb-16">
          <h2 className="text-3xl sm:text-5xl text-foreground font-medium font-dm-serif-display mb-2">
            Why Choose SafeRide?
          </h2>
          <p className="text-base color-secondary max-w-3xl mx-auto">
            We&apos;re committed to providing the safest, most reliable
            designated driver service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              >
                <Card className="border-0 !border-secondary shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <IconComponent
                      className={`w-12 h-12 ${feature.iconColor} mb-4`}
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
