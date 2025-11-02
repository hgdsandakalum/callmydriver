"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils";

const teamImages = [
  "/images/driving-instructor-showing-vehicle.jpg",
  "/images/driving-instructor-showing-vehicle.jpg",
  "/images/driving-instructor-showing-vehicle.jpg",
  "/images/driving-instructor-showing-vehicle.jpg",
];

export default function CareerHero() {
  const heroVariants = {
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

  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="pt-28 md:pt-32 lg:pt-42 pb-16 md:pb-24 lg:pb-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
          {/* Left Column - Title and Description */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                Careers
              </p>
              <h1 className="text-4xl md:text-6xl font-dm-serif-display text-white mb-6 leading-tight">
                Drive Your Future with Call-My-Driver
              </h1>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col gap-4 items-center">
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              At <strong>Call-My-Driver</strong>, we’re on a mission to redefine
              personal transportation through technology, safety, and trust.
              Joining our team means being part of a company that values
              innovation, responsibility, and real-world impact.
            </p>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              We believe great ideas come from great people — those who think
              creatively, collaborate openly, and work with purpose. If you’re
              passionate about building solutions that make everyday life safer
              and smarter, you’ll fit right in.
            </p>
          </div>
        </div>

        {/* Team Images Grid */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "aspect-square rounded-lg flex items-center justify-center ",
                  index === 1 && "mt-6",
                  index === 2 && "mt-0",
                  index === 3 && "mt-6",
                  index === 4 && "mt-0"
                )}
              >
                <Image
                  src={image}
                  alt={`Driving Instructor Showing Vehicle`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
