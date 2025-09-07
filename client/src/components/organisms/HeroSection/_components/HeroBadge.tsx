import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
      className=" bg-primary/20 border border-primary tracking-wide font-roboto text-white inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105"
    >
      Available 24/7 • Trusted Drivers • Your Vehicle
    </div>
  );
}
