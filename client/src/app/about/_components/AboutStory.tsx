"use client";
import { motion } from "framer-motion";

export default function AboutStory() {
  const storyVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={storyVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      {/* How It Started */}
      <div>
        <h2 className="text-primary text-sm font-semibold uppercase tracking-wide mb-4">
          How It Started
        </h2>
        <h1 className="text-4xl md:text-5xl font-dm-serif-display font-semibold text-white mb-6 leading-tight">
          The Story Behind
          <br />
          Call-My-Driver
        </h1>
        <p className="text-foreground text-sm leading-relaxed">
          The idea for Call-My-Driver was born from a simple yet powerful
          realization — sometimes, life puts us in situations where we just
          can’t or shouldn’t drive our own vehicles. It might be after a night
          of celebration, when we’ve chosen to drink responsibly. It might be a
          sudden illness, post-operative recovery, or simple exhaustion after a
          long trip or stressful day. Yet, in these moments, most people are
          left with very few safe and convenient options.
        </p>
        <p className="text-foreground text-sm leading-relaxed mt-4">
          Traditional taxis and ride-share services could take you home — but
          not your car. Leaving your vehicle behind often meant coming back the
          next day, paying for parking, and dealing with unnecessary hassle. On
          the other hand, hiring a personal chauffeur was expensive, rigid, and
          rarely available on short notice. The gap between responsibility and
          convenience was clear, and we knew there had to be a smarter, safer
          way to bridge it.
        </p>
        <p className="text-foreground text-sm leading-relaxed mt-4">
          That’s when the question that sparked everything arose: “What if
          someone could simply come to you, take the wheel of your own car, and
          drive you home safely — right when you need it?”
        </p>
        <p className="text-foreground text-sm leading-relaxed mt-4">
          From that single question grew the foundation of Call-My-Driver — a
          service designed not just for transportation, but for peace of mind.
          Our vision was simple: to make safe, responsible choices easy and
          accessible for everyone, anytime.
        </p>
      </div>
    </motion.div>
  );
}
