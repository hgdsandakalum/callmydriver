"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/atoms/card";
import { Star } from "../../../../public/icons";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const testimonials = [
    {
      text: "SafeRide saved my night! The driver was professional, arrived quickly, and got me home safely after a work event. Highly recommend!",
      name: "Sarah Johnson",
      role: "Marketing Manager",
    },
    {
      text: "I use SafeRide regularly when I&apos;m too tired to drive after long work days. The drivers are always courteous and the service is reliable.",
      name: "Michael Chen",
      role: "Software Engineer",
    },
    {
      text: "Great peace of mind knowing there's a safe alternative when needed. The app is easy to use and the drivers are professional.",
      name: "Emma Rodriguez",
      role: "Teacher",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".testimonials-header",
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

      // Cards animation with wave effect
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 100, rotationZ: 10 },
            {
              opacity: 1,
              y: 0,
              rotationZ: 0,
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
    <section ref={sectionRef} className=" flex items-center py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="testimonials-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold color-dark-blue mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl color-blue-gray">
            Don&apos;t just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="color-secondary mb-4">{testimonial.text}</p>
                  <div className="font-semibold color-dark-blue">
                    {testimonial.name}
                  </div>
                  <div className="text-sm color-blue-gray">
                    {testimonial.role}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
