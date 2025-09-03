import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroStats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const stats = [
    { value: "24/7", label: "Available", numeric: false },
    { value: "5.0★", label: "Rating", numeric: false },
    { value: "10k+", label: "Safe Rides", numeric: true, target: 10000 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats with counter effect for numeric values
      stats.forEach((stat, index) => {
        if (stat.numeric && stat.target) {
          const element =
            statsRef.current?.children[index]?.querySelector(".stat-value");
          if (element) {
            gsap.fromTo(
              element,
              { textContent: 0 },
              {
                textContent: stat.target,
                duration: 2,
                ease: "power2.out",
                delay: 1.5 + index * 0.1,
                snap: { textContent: 1 },
                onUpdate: function () {
                  element.textContent =
                    Math.ceil(Number(element.textContent)).toLocaleString() +
                    "+";
                },
              }
            );
          }
        }
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={statsRef}
      className="flex items-center justify-center sm:justify-start space-x-6 sm:space-x-8 pt-4"
    >
      {stats.map((stat, index) => (
        <div key={index} className="hero-stat text-center">
          <div className="stat-value text-xl sm:text-2xl font-bold text-white">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
