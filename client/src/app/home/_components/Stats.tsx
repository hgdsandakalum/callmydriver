"use client";

import React from "react";
import { Users, Star, Clock, CheckCircle } from "@/../public/icons";

type StatItem = {
  id: string;
  value: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const stats: StatItem[] = [
  { id: "rides", value: "10,000+", label: "Safe Rides", Icon: Users },
  { id: "rating", value: "4.9", label: "Average Rating", Icon: Star },
  { id: "response", value: "15min", label: "Average Response", Icon: Clock },
  {
    id: "verified",
    value: "100%",
    label: "Verified Drivers",
    Icon: CheckCircle,
  },
];

export default function Stats() {
  return (
    <section className="w-full py-10 sm:py-8 bg-foreground">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map(({ id, value, label, Icon }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-3 md:gap-4 bg-primary/10 rounded-lg p-4"
            >
              <div className="rounded-full bg-primary/15 text-primary-dark p-3 md:p-3.5">
                <Icon className="text-xl md:text-2xl" />
              </div>
              <div className="leading-tight">
                <div className="font-quicksand text-[20px] sm:text-[24px] md:text-[32px] font-bold text-background text-center">
                  {value}
                  {id === "rating" && <span className="ml-1">★</span>}
                </div>
                <div className="font-quicksand text-xs sm:text-base text-secondary text-center">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
