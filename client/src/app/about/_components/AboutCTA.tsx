"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/button";

export default function AboutCTA() {
  const ctaVariants = {
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
      variants={ctaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      <div className="min-w-full mx-auto relative">
        <div className="absolute inset-0 bg-primary-dark bg-[url(/images/road-pattern.png)] bg-blend-multiply " />
        <div className="bg-primary-dark py-6 md:py-12 px-4 md:px-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* CTA Text - Left Side */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl md:text-3xl font-bold text-foreground leading-tight">
                Ready for a Safer, More Convenient Ride? Get Started Today!
              </h2>
              <p className="text-foreground text-sm md:text-base mt-2">
                Sign up now and receive 20% off your first ride with
                Call-My-Driver!
              </p>
            </div>

            <div className="">
              <Button
                size="custom"
                type="outlined"
                shape="round"
                variant="white"
                className="!px-12 !py-4 !h-[40px] md:!h-[50px] !text-[18px] hover:!bg-foreground/10"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
