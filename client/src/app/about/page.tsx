"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  AboutInfo,
  AboutStory,
  AboutCTA,
  AboutVisionMission,
} from "./_components";
import { useWindowSize } from "usehooks-ts";

export default function About() {
  const mainContentRef = useRef<HTMLElement>(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const { scrollYProgress } = useScroll({
    target: mainContentRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.7, 0.8, 0.9, 1],
    isMobile ? [0, 0, 1, 1, 1, 0.8, 0] : [0, 0, 1, 1, 0.3, 0, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.8, 0.9, 1],
    [50, 50, 0, 0, -50, -50]
  );

  return (
    <div className="scroll-container bg-background">
      {/* Main Content */}
      <motion.section
        ref={mainContentRef}
        style={{ opacity, y, willChange: "transform, opacity" }}
        className="pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-background relative"
      >
        <div className="absolute inset-0 bg-background bg-[url(/images/road-pattern.png)] bg-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* About Story - Left Column */}
            <div className="order-1">
              <AboutStory />
            </div>

            {/* About Information - Right Column */}
            <div className="order-2">
              <AboutInfo />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <AboutVisionMission />

      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
}
