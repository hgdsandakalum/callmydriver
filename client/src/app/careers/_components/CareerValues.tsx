"use client";
import { motion } from "framer-motion";

export default function CareerValues() {
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

  const itemVariants = {
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

  const valuesData = [
    {
      number: "01",
      title: "Responsibility First",
      description:
        "We put people before processes. Safety, reliability, and trust guide every decision we make — both in our service and in our workplace..",
    },
    {
      number: "02",
      title: "Innovate with Purpose",
      description:
        "We move fast, think smart, and build solutions that matter. Every line of code, every design, and every call we handle helps someone get home safely.",
    },
    {
      number: "03",
      title: "Grow Together",
      description:
        "We believe teamwork drives progress. No egos, no silos — just collaboration, respect, and shared success.",
    },
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-20 bg-primary-dark relative"
    >
      <div className="absolute inset-0 bg-primary-dark bg-[url(/images/road-pattern.png)] bg-blend-multiply" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4 font-dm-serif-display">
            Our values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuesData.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary text-shadow-md">
                  {value.number}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-foreground text-sm md:text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
