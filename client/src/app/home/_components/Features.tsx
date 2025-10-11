"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";
import {
  Shield,
  Clock,
  MousePointerClick,
  Award,
} from "../../../../public/icons";

export default function Features() {
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
      id="features"
      className="relative py-[60px] bg-background flex items-center"
    >
      <div className="absolute inset-0 bg-background bg-[url(/images/anxiety-induced-by-traffic.jpg)] bg-cover bg-center bg-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-5xl font-medium font-dm-serif-display mb-4 text-white drop-shadow-lg">
              Why Choose CallMyDriver
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Your safety, comfort, and peace of mind are our absolute priority.
              We're not just a ride; we're a professional designated driver
              service built on reliability and trust.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground hover:!shadow-none">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="mb-6">
                    <MousePointerClick className="w-16 h-16 !text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold !text-primary mb-2">
                    Seamless Booking Experience
                  </h3>
                  <h3 className="text-white/80 text-base font-semibold leading-relaxed mb-4">
                    Request a Driver in Just a Few Taps
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 flex-grow">
                    Our platform is designed for convenience — quickly request a
                    driver, track their arrival, and manage your trip all in one
                    place. Whether through the web site or our 24/7 call center,
                    getting a driver has never been easier.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-6">
                  <Clock className="w-16 h-16 !text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold !text-primary mb-2">
                  Quick Response Time
                </h3>
                <h3 className="text-white/80 text-base font-semibold leading-relaxed mb-4">
                  We’re There When You Need Us
                </h3>
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  No more waiting around — once you request a driver, our system
                  instantly locates the nearest available professional and
                  dispatches them to your location. Get connected to a driver in
                  minutes, anytime, anywhere.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-1 row-span-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-6">
                  <Award className="w-16 h-16 !text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold !text-primary mb-2">
                  Customer-Centric Service
                </h3>
                <h3 className="text-white/80 text-base font-semibold leading-relaxed mb-4">
                  Your Safety, Our Priority
                </h3>
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  We value every customer and trip. From 24/7 support to
                  post-ride feedback options, we constantly work to improve your
                  experience. Because every journey with us should feel safe,
                  smooth, and stress-free.
                </p>
                <Button variant="primary" shape="round" className="mt-10">
                  Ready for a Safe Ride Home?
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="mb-6">
                    <Shield className="w-16 h-16 !text-primary mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold !text-primary mb-2">
                    Reliable Drivers
                  </h3>
                  <h3 className="text-white/80 text-base font-semibold leading-relaxed mb-4">
                    Trained, Verified & Professional
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed flex-grow">
                    Our drivers go through rigorous screening and training to
                    ensure your safety and satisfaction. Whether it’s a
                    late-night pickup or an emergency drop-off, you can count on
                    our professionals to handle your car with care and
                    responsibility.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
