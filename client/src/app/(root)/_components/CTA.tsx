"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/atoms/button";
import { Phone } from "../../../../public/icons";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
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
      }

      // Buttons animation
      buttonsRef.current.forEach((button, index) => {
        if (button) {
          gsap.fromTo(
            button,
            { opacity: 0, y: 50, rotationX: 45 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: button,
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
      className=" flex items-center py-20 bg-gradient-to-r from-dark-blue to-blue-gray"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 w-full">
        <div ref={contentRef}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Home Safely?
          </h2>
          <p className="text-xl text-light-gray mb-8">
            Download the SafeRide app or call us now. Professional drivers are
            standing by 24/7.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div
            ref={(el) => {
              if (el) buttonsRef.current[0] = el;
            }}
          >
            <Button
              size="large"
              className="bg-white color-dark-blue hover:bg-light-gray text-lg px-8 py-4"
            >
              Download App
            </Button>
          </div>
          <div
            ref={(el) => {
              if (el) buttonsRef.current[1] = el;
            }}
          >
            <Button
              size="large"
              type="outlined"
              className="border-white text-white hover:bg-white hover:color-dark-blue text-lg px-8 py-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-RIDE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
