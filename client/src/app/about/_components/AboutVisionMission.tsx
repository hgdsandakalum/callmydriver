"use client";
import { motion } from "framer-motion";

export default function AboutVisionMission() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const visionMissionData = [
    {
      title: "Our Vision",
      heading: "Empowering Lives Through Safe Transportation",
      description:
        "Our unwavering vision is to empower lives through accessible, safe, and reliable transportation. By fostering a global community of professional drivers and safety-conscious passengers, we aim to inspire personal mobility, drive innovation, and shape a brighter future for all travelers.",
    },
    {
      title: "Our Mission",
      heading: "Safe Rides for All, Everywhere",
      description:
        "Our unwavering mission is to provide safe, reliable, and professional transportation services to everyone, everywhere. By fostering a global community of trusted drivers and satisfied passengers, we aim to inspire confidence, drive safety innovation, and shape a more connected world through professional mobility.",
    },
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="pb-16 md:pb-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visionMissionData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-foreground rounded-2xl p-8"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-primary text-sm font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold text-background leading-tight">
                  {item.heading}
                </h2>
                <p className="text-background text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
