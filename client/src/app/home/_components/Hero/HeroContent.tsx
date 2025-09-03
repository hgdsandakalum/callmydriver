import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/atoms/button";
import { ArrowRight, SteeringWheel } from "../../../../../public/icons";

export default function HeroContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with text reveal effect
      gsap.fromTo(
        ".hero-title",
        {
          opacity: 0,
          y: 30,
          clipPath: "inset(0 100% 0 0)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      // Animate description with fade in
      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.8,
        }
      );

      // Animate buttons with stagger
      gsap.fromTo(
        ".hero-button",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1.2,
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="space-y-8 max-w-3xl">
      {/* Announcement pill */}
      <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 text-xs sm:text-sm text-white">
        <span className="opacity-80">Now available 24/7 in your area</span>
        <a
          href="#how-it-works"
          className="ml-2 inline-flex items-center font-semibold hover:underline"
        >
          See how it works
          <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </div>

      <div className="space-y-6">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Your designated driver,
          <br className="hidden sm:block" />
          on demand
        </h1>
        <p className="hero-description text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Professional drivers who safely drive you and your car home. Perfect
          for nights out, emergencies, or whenever you are too tired to drive.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="custom"
          size="large"
          shape="round"
          label="Need a Driver?"
          icon={<SteeringWheel size={24} />}
          onClick={() => {}}
          className="!px-10 !py-4 bg-primary hover:!bg-primary-dark"
        />
      </div>
    </div>
  );
}
