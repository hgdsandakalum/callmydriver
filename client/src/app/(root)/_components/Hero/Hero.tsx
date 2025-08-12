"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroContent from "./HeroContent";
import { heroBackgroundImage } from "../../../../../public/images";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Initial state - hide all elements
  //     gsap.set(".hero-animate", { opacity: 0, y: 50 });
  //     gsap.set(".floating-particle", { opacity: 0, scale: 0 });

  //     // Create timeline for staggered animations
  //     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  //     // Enhanced background animations
  //     tl.fromTo(
  //       sectionRef.current,
  //       {
  //         backgroundPosition: "50% 100%",
  //         backgroundSize: "120%",
  //       },
  //       {
  //         backgroundPosition: "50% 50%",
  //         backgroundSize: "100%",
  //         duration: 2,
  //         ease: "power2.out",
  //       },
  //       0
  //     );

  //     // Add parallax effect to background
  //     gsap.to(sectionRef.current, {
  //       backgroundPosition: "50% 30%",
  //       duration: 3,
  //       ease: "power1.out",
  //       delay: 2,
  //       yoyo: true,
  //       repeat: -1,
  //     });

  //     // Create floating particles
  //     for (let i = 0; i < 64; i++) {
  //       const particle = document.createElement("div");
  //       particle.className = "floating-particle";
  //       particle.style.cssText = `
  //         position: absolute;
  //         width: ${Math.random() * 4 + 2}px;
  //         height: ${Math.random() * 4 + 2}px;
  //         background: rgba(239, 131, 84, 0.4);
  //         border-radius: 50%;
  //         left: ${Math.random() * 100}%;
  //         top: ${Math.random() * 100}%;
  //         pointer-events: none;
  //         z-index: 1;
  //       `;
  //       sectionRef.current?.appendChild(particle);

  //       // Animate each particle
  //       gsap.to(particle, {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 1,
  //         delay: 0.5 + i * 0.2,
  //         ease: "power2.out",
  //       });

  //       gsap.to(particle, {
  //         y: -100 - Math.random() * 200,
  //         x: Math.random() * 100 - 50,
  //         duration: 8 + Math.random() * 4,
  //         delay: 1 + i * 0.3,
  //         ease: "none",
  //         repeat: -1,
  //         yoyo: false,
  //       });
  //     }

  //     // Add gradient overlay animation
  //     const gradientOverlay = document.createElement("div");
  //     gradientOverlay.style.cssText = `
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       right: 0;
  //       bottom: 0;
  //       background: radial-gradient(circle at 50% 30%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
  //       z-index: 2;
  //       pointer-events: none;
  //     `;
  //     sectionRef.current?.appendChild(gradientOverlay);

  //     gsap.to(gradientOverlay, {
  //       opacity: 0.5,
  //       duration: 2,
  //       delay: 1,
  //       ease: "power2.out",
  //     });

  //     // Stagger animate content elements with enhanced effects
  //     tl.to(
  //       ".hero-animate",
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         stagger: 0.2,
  //         ease: "power3.out",
  //       },
  //       0.3
  //     );

  //     // No driver card in this layout

  //     // Add glow effect to buttons
  //     gsap.to(".hero-button", {
  //       boxShadow: "0 0 20px rgba(239, 131, 84, 0.4)",
  //       duration: 2,
  //       ease: "power2.inOut",
  //       yoyo: true,
  //       repeat: -1,
  //       delay: 4,
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center relative !bg-cover bg-center bg-no-repeat overflow-hidden bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${heroBackgroundImage.src})`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="hero-animate flex flex-col items-center text-center py-24 sm:py-32">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
