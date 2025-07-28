"use client";
import { Card, CardContent } from "@/components/atoms/card";
import {
  Shield,
  Clock,
  MapPin,
  SteeringWheel,
  Zap,
  Award,
} from "../../../../public/icons";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Certified Drivers",
      description:
        "All drivers are professionally trained, background-checked, and fully insured for your safety.",
      iconColor: "color-dark-blue",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock service for emergencies, late nights, and whenever you need us most.",
      iconColor: "color-primary",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description:
        "Track your driver's location and estimated arrival time in real-time through our app.",
      iconColor: "color-blue-gray",
    },
    {
      icon: SteeringWheel,
      title: "Your Vehicle",
      description:
        "We drive your own car, so you wake up with your vehicle safely parked at home.",
      iconColor: "color-dark-blue",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description:
        "Average pickup time under 15 minutes in urban areas, with priority emergency response.",
      iconColor: "color-primary",
    },
    {
      icon: Award,
      title: "Premium Service",
      description:
        "Consistently rated 5 stars by customers for professionalism and reliability.",
      iconColor: "color-blue-gray",
    },
  ];

  return (
    <section id="features" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold color-dark-blue mb-4">
            Why Choose SafeRide?
          </h2>
          <p className="text-xl color-secondarymax-w-3xl mx-auto">
            We're committed to providing the safest, most reliable designated
            driver service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <IconComponent
                    className={`w-12 h-12 ${feature.iconColor} mb-4`}
                  />
                  <h3 className="text-xl font-semibold color-dark-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="color-blue-gray">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
