"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "@/../public/icons";

export default function ContactInfo() {
  const infoVariants = {
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
      variants={infoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      {/* Contact Title */}
      <div>
        <h1 className="text-4xl md:text-6xl font-dm-serif-display text-foreground mb-6 leading-tight">
          Contact Us
        </h1>
        <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
          Not sure where to start or what you’re looking for? <br />
          Our friendly team is ready to listen and assist with anything you need
          — from booking inquiries to general support and beyond. We’re here to
          help, every step of the way.
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {/* Email */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary-dark/10 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-foreground text-lg font-medium">
              info@callmydriver.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary-dark/10 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-foreground text-lg font-medium">
              Support: (+1) 555 123 4567
            </p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-dark/10 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-foreground text-lg font-medium mb-2">
              Service Areas
            </p>
            <div className="text-foreground/80 text-sm space-y-1">
              <p>• Downtown Area</p>
              <p>• Airport District</p>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-dark/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-foreground text-lg font-medium mb-2">
              Operating Hours
            </p>
            <div className="text-foreground/80 text-sm space-y-1">
              <p>• 24/7 Emergency Service</p>
              <p>• Regular Bookings: 6 AM - 2 AM</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
