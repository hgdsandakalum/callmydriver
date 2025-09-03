import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Shield } from "../../../../../public/icons";

export default function HeroBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: -20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );
    }, badgeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={badgeRef}
      className="bg-primary text-white hover:bg-primary-600 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
    >
      <Shield className="w-4 h-4 mr-1" />
      Safe & Reliable Service
    </div>
  );
}
