"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/atoms/button";
import { CheckCircle, ShieldAlt, Phone, Users } from "../../../../public/icons";

gsap.registerPlugin(ScrollTrigger);

export default function Safety() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const safetyFeatures = [
    {
      title: "Comprehensive Background Checks",
      description:
        "Every driver undergoes thorough criminal background checks and driving record verification.",
    },
    {
      title: "Full Insurance Coverage",
      description:
        "Complete liability and comprehensive insurance coverage for every ride.",
    },
    {
      title: "GPS Tracking & Monitoring",
      description:
        "All rides are GPS tracked and monitored by our safety team in real-time.",
    },
    {
      title: "Emergency Support",
      description:
        "24/7 emergency support hotline with immediate assistance capabilities.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".safety-header",
        { opacity: 0, y: -50 },
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

      // Features animation
      featuresRef.current.forEach((feature, index) => {
        if (feature) {
          gsap.fromTo(
            feature,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: feature,
                start: "top 90%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Card animation
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: 100, rotationY: 45 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 90%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="safety"
      className="flex items-center pt-20 pb-24 bg-primary-dark min-h-[70dvh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="safety-header text-center mb-16">
          <h2 className="text-3xl sm:text-5xl text-foreground font-medium font-dm-serif-display mb-2">
            Safety is Our Priority
          </h2>
          <p className="text-base text-foreground max-w-3xl mx-auto">
            Every aspect of our service is designed with your safety and peace
            of mind in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {safetyFeatures.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) featuresRef.current[index] = el;
                }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={cardRef} className="bg-foreground rounded-2xl p-8">
            <div className="text-center mb-6">
              <ShieldAlt className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-background">
                Emergency Hotline
              </h3>
              <p className="text-background mb-6">
                Available 24/7 for immediate assistance
              </p>

              <div className="space-y-4">
                <Button size="large" shape="round" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency: (555) 911-SAFE
                </Button>
                <Button
                  size="large"
                  type="outlined"
                  shape="round"
                  className="w-full"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Regular Booking: (555) 123-RIDE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
