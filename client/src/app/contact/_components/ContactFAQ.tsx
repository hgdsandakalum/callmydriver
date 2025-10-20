"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "@/../public/icons";

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqData = [
    {
      question: "How do I book a driver?",
      answer:
        "Booking is simple! You can call our support line, use our mobile app, or book online through our website. Just provide your location, destination, and preferred time, and we'll match you with a professional driver.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve the downtown area, airport district, and surrounding suburban communities. Our service area is expanding, so contact us to check if we serve your specific location.",
    },
    {
      question: "How much does the service cost?",
      answer:
        "Our pricing is competitive and transparent. Costs vary based on distance, time, and service type. We offer flat rates for airport transfers and hourly rates for other services. Contact us for a personalized quote.",
    },
    {
      question: "Is the service available 24/7?",
      answer:
        "Yes! We provide 24/7 emergency service for urgent situations. Regular bookings are available from 6 AM to 2 AM daily, with extended hours on weekends and holidays.",
    },
    {
      question: "What if I need to cancel my booking?",
      answer:
        "We understand plans can change. You can cancel your booking up to 2 hours before your scheduled pickup time without any charges. Cancellations within 2 hours may incur a small fee.",
    },
    {
      question: "Are your drivers licensed and insured?",
      answer:
        "Absolutely! All our drivers are fully licensed, background-checked, and insured. Your safety and security are our top priorities, and we maintain the highest standards for our professional drivers.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-20 bg-foreground relative"
    >
      <div className="absolute inset-0 bg-foreground bg-[url(/images/road-pattern.png)] bg-blend-multiply" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-background mb-4 font-dm-serif-display">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary text-lg">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-foreground rounded-lg border border-primary overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary transition-colors duration-200 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-background pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ArrowUp className="w-5 h-5 text-primary-dark" />
                  ) : (
                    <ArrowDown className="w-5 h-5 text-primary-dark" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-background leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
