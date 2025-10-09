"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/atoms/card";
import { MapPin, Users, CheckCircle } from "../../../../public/icons";
import { cn } from "@/utils";
import { Button } from "@/components/atoms/button";
import Image from "next/image";

export default function HowItWorks() {
  const [expandedCard, setExpandedCard] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Request a Ride",
      description:
        "Request a ride by sharing your location and we'll match you with a nearby professional driver.",
      icon: MapPin,
      details: [
        "Share your current location",
        "Set your destination",
        "Choose your preferred time",
        "Get matched with a driver",
      ],
      image: "/images/City-driver-pana.png",
    },
    {
      number: "2",
      title: "Driver Arrives",
      description:
        "Your verified driver arrives at your location. They'll drive your vehicle while you relax as a passenger.",
      icon: Users,
      details: [
        "Driver verification complete",
        "Professional service guaranteed",
        "Your vehicle, their expertise",
        "Relax while they drive",
      ],
      image: "/images/City-driver-bro.png",
    },
    {
      number: "3",
      title: "Safe Arrival",
      description:
        "Arrive safely at your destination. You can rate your experience after the ride.",
      icon: CheckCircle,
      details: [
        "Safe arrival guaranteed",
        "Rate your experience",
        "Payment processed",
        "Book again anytime",
      ],
      image: "/images/Car-driving-pana.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="pt-14 md:pt-18 pb-18 md:pb-26 bg-foreground min-h-[50vh] xl:min-h-[70vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-5xl font-medium font-dm-serif-display mb-4 text-background">
            How CallMyDriver Works
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-3xl mx-auto">
            From request to arrival, CallMyDriver streamlines every step of
            getting you home safely, allowing you to book a ride in minutes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row gap-6 justify-center items-stretch"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={cn(
                  "flex-1 transition-all duration-500 ease-in-out cursor-pointer",
                  "h-[300px] sm:h-[350px] lg:h-[400px]",
                  isExpanded ? "lg:flex-[2]" : "lg:flex-1"
                )}
                onMouseEnter={() => setExpandedCard(index)}
                onClick={() => setExpandedCard(index)}
              >
                <Card
                  className={cn(
                    "h-full !shadow-none transition-all duration-500",
                    isExpanded
                      ? "!bg-primary/5 !border-primary/20"
                      : "!bg-secondary/5 !border-secondary/20"
                  )}
                >
                  <CardContent className="!p-3 xl:!p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                          isExpanded
                            ? "bg-primary text-foreground"
                            : "bg-primary text-foreground"
                        )}
                        animate={{
                          scale: isExpanded ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">
                          {step.title}
                        </h3>
                        <p className="text-sm text-secondary">
                          Step {step.number}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="overflow-hidden"
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="space-y-4">
                        <p className="text-background leading-relaxed">
                          {step.description}
                        </p>

                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              className="flex items-center text-sm text-background"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: isExpanded ? 1 : 0,
                                x: isExpanded ? 0 : -20,
                              }}
                              transition={{
                                delay: detailIndex * 0.1,
                                duration: 0.3,
                              }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {detail}
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          className="mt-6 w-full flex justify-start"
                          initial={{ opacity: 0, y: 0 }}
                          animate={{
                            opacity: isExpanded ? 1 : 0,
                            y: isExpanded ? 0 : 0,
                          }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        >
                          <Button
                            variant="primary"
                            shape="round"
                            className="w-1/2"
                          >
                            Learn More
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      className={cn(
                        "flex justify-center",
                        isExpanded && "hidden"
                      )}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: !isExpanded ? 1 : 0,
                        scale: !isExpanded ? 1 : 0,
                      }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={250}
                        height={120}
                        className="object-contain"
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
