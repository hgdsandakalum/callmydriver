"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/atoms/button";
import { Phone } from "../../../../public/icons";
import Image from "next/image";

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
      id="contact"
      className="relative flex items-center min-h-[400px] bg-gradient-to-b from-primary-dark via-primary/80 to-primary-dark bg-[url(/images/pexels-pixabay-210182.jpg)] bg-cover bg-center bg-no-repeat bg-blend-multiply"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 hidden lg:flex justify-center w-1/3">
          <Image
            src="/images/footer-cta.png"
            alt="CTA Image"
            width={500}
            height={250}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 w-full lg:w-2/3">
          <div ref={contentRef}>
            <h2 className="text-3xl sm:text-5xl font-medium text-center lg:text-end text-white mb-4 font-dm-serif-display">
              Ready to Get Home Safely?
            </h2>
            <p className="text-lg text-white/90 mb-2 lg:mb-8 text-center lg:text-end">
              Request a ride by sharing your location and we'll match you with a
              nearby professional driver.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <div
              ref={(el) => {
                if (el) buttonsRef.current[0] = el;
              }}
            >
              <Button
                size="custom"
                shape="round"
                className="!px-8 !py-4 !h-[40px] md:!h-[50px] !text-[18px]"
              >
                Request a Ride
              </Button>
            </div>
            <div
              ref={(el) => {
                if (el) buttonsRef.current[1] = el;
              }}
            >
              <Button
                size="custom"
                type="outlined"
                shape="round"
                variant="white"
                className="!px-8 !py-4 !h-[40px] md:!h-[50px] !text-[18px] hover:!bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-RIDE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
