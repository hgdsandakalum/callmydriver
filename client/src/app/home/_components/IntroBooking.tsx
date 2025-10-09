"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Form, Input, Select } from "antd";
import { Button } from "@/components/atoms/button";
import { ArrowForward, MapMarker } from "@/../public/icons";

export default function IntroBooking() {
  const slideLeft = {
    hidden: { x: -100 },
    visible: {
      x: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 14 },
    },
    exit: {
      x: -1000,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
  };
  const slideRight = {
    hidden: { x: 100 },
    visible: {
      x: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 14 },
    },
    exit: {
      x: 1000,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [isInView, controls]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        className="bg-gradient-to-r from-primary-dark to-primary py-14 md:py-16 lg:py-24"
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="w-full md:w-1/2 flex flex-col items-center md:items-start"
              variants={slideLeft}
            >
              <h3 className="mx-auto md:mx-0 font-roboto text-sm font-medium text-foreground tracking-wider border border-foreground rounded-full px-4 py-1 w-fit mb-2">
                Best in City
              </h3>
              <h2 className="font-dm-serif-display text-3xl sm:text-3xl md:text-[36px] lg:text-[44px] text-foreground mb-3 text-center md:text-left">
                Your Safe Ride, On Your Terms
              </h2>
              <p className="text-sm text-foreground mb-6 text-center md:text-left">
                Life doesn't always go as planned — but getting home safely
                should never be a challenge. With Call-My-Driver, a
                professional, background-checked driver is always just a call or
                tap away. We'll drive you and your car safely to your
                destination — whether after a night out, an airport run, a
                medical appointment, or when fatigue sets in. With thousands of
                rides completed, top customer ratings, and rapid response times,
                Call-My-Driver is your trusted partner for safe, stress-free
                travel.
              </p>
              {/* Todo: Link to about page */}
              <Button
                variant="white"
                type="outlined"
                shape="round"
                className="w-1/2 lg:w-1/3"
              >
                Learn More
                <ArrowForward className="text-foreground" />
              </Button>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 bg-foreground rounded-lg shadow-lg max-w-md"
              variants={slideRight}
            >
              <span className="text-foreground text-2xl font-bold bg-background p-3 px-6 rounded-t-lg w-full flex">
                Request a <span className="text-primary ml-2">Driver</span>
              </span>
              <Form
                name="booking"
                layout="vertical"
                className="booking-form !p-6"
              >
                <Form.Item name="start">
                  <Input
                    size="large"
                    placeholder="Pickup location"
                    suffix={<MapMarker className="text-secondary" />}
                  />
                </Form.Item>

                <Form.Item name="end">
                  <Input
                    size="large"
                    placeholder="Drop-off location"
                    suffix={<MapMarker className="text-secondary" />}
                  />
                </Form.Item>

                <Form.Item name="vehicle">
                  <Select size="large" placeholder="Select vehicle type">
                    <Select.Option value="sedan">Sedan</Select.Option>
                    <Select.Option value="suv">SUV</Select.Option>
                    <Select.Option value="luxury">Luxury</Select.Option>
                  </Select>
                </Form.Item>

                <Button
                  type="block"
                  variant="primary"
                  htmlType="submit"
                  className="w-full"
                  shape="round"
                >
                  Next
                </Button>
              </Form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
