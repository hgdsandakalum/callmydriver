"use client";
import { motion } from "framer-motion";
import { Users, Award, CheckCircle, Shield } from "@/../public/icons";
import Image from "next/image";

export default function AboutInfo() {
  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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

  const companyStats = [
    { icon: Users, value: "3.5", label: "Years Experience" },
    { icon: CheckCircle, value: "23", label: "Project Challenge" },
    { icon: Award, value: "830+", label: "Positive Reviews" },
    { icon: Shield, value: "100K", label: "Trusted Passengers" },
  ];

  return (
    <motion.div
      variants={infoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      {/* Team Image */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        <div className="rounded-2xl h-80 flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl">
            <Image
              src="/images/post3_convenience.png"
              alt="About Team"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Statistics Grid */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        {companyStats.map((stat, index) => {
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-primary rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-background font-medium">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
