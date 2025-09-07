"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/atoms/button";
import { Shield, Clock, MapPin } from "../../../public/icons";
import Image from "next/image";

export default function ComingSoon() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide all elements
      gsap.set(".coming-soon-animate", { opacity: 0, y: 30 });

      // Create timeline for staggered animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate elements with stagger
      tl.to(".coming-soon-animate", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Add floating animation to the icon
      gsap.to(".floating-icon", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

      // Add pulse effect to the badge
      gsap.to(".pulse-badge", {
        scale: 1.05,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background flex items-center justify-center p-8 md:p-4">
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto text-center text-white relative"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-48 h-48 bg-primary/70 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/70 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-lg"></div>
        </div>

        {/* Main content */}
        <div className="coming-soon-animate space-y-8">
          {/* Logo */}
          <div className="w-48 mx-auto">
            <Image
              src="/images/call-my-driver-logo-white.png"
              alt="Call-My-Driver Logo"
              width={192}
              height={192}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Call-My-Driver
          </h1>

          {/* Badge */}
          <div className="pulse-badge inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-base font-medium border border-white/30">
            <Shield className="w-4 h-4 mr-2" />
            Coming Soon
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Your personal designated driver service is getting ready to hit the
            road. We're building something amazing for you.
          </p>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Service</h3>
              <p className="text-sm text-white/80">
                Available whenever you need us
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm text-white/80">
                Professional, verified drivers
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-sm text-white/80">
                Know exactly where your driver is
              </p>
            </div>
          </div>

          {/* CTA */}
          {/* <div className="space-y-4">
            <p className="text-white/80">Be the first to know when we launch</p>
            <Button
              size="large"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
            >
              Get Notified
            </Button>
          </div> */}

          {/* Footer info */}
          <div className="pt-12 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2025 Call-My-Driver. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
