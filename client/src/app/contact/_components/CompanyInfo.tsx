"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/atoms/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Users,
  Award,
  CheckCircle,
} from "@/../public/icons";

export default function CompanyInfo() {
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

  const cardVariants = {
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["Emergency: (555) 911-SAFE", "Booking: (555) 123-RIDE"],
      description: "Available 24/7 for your convenience",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@callmydriver.com", "emergency@callmydriver.com"],
      description: "We respond within 2 hours during business hours",
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: ["Downtown Area", "Airport District", "University Campus"],
      description: "Serving the entire metropolitan area",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "24/7 Emergency Service",
        "Regular Bookings: 6 AM - 2 AM",
        "Weekend: Extended Hours",
      ],
      description: "Always available when you need us",
    },
  ];

  const companyStats = [
    { icon: Users, value: "500+", label: "Verified Drivers" },
    { icon: CheckCircle, value: "10,000+", label: "Safe Rides" },
    { icon: Award, value: "4.9/5", label: "Customer Rating" },
    { icon: Shield, value: "100%", label: "Insured Rides" },
  ];

  return (
    <div className="space-y-12">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full !bg-primary/5 !border-primary/20">
                <CardContent className="!p-0">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {info.title}
                        </h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="space-y-1 mb-3">
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-secondary text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-primary text-sm font-medium">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
