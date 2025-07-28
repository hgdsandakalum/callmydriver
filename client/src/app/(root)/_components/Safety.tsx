"use client";
import { Button } from "@/components/atoms/button";
import { CheckCircle, Shield, Phone, Users } from "../../../../public/icons";

export default function Safety() {
  const safetyFeatures = [
    {
      title: "Comprehensive Background Checks",
      description:
        "Every driver undergoes thorough criminal background checks and driving record verification.",
    },
    {
      title: "Full Insurance Coverage",
      description:
        "Complete liability and comprehensive insurance coverage for every ride.",
    },
    {
      title: "GPS Tracking & Monitoring",
      description:
        "All rides are GPS tracked and monitored by our safety team in real-time.",
    },
    {
      title: "Emergency Support",
      description:
        "24/7 emergency support hotline with immediate assistance capabilities.",
    },
  ];

  return (
    <section id="safety" className="py-20 bg-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Safety is Our Priority
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Every aspect of our service is designed with your safety and peace
            of mind in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 color-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-light-gray">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-6">
              <Shield className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Emergency Hotline
              </h3>
              <p className="text-light-gray mb-6">
                Available 24/7 for immediate assistance
              </p>

              <div className="space-y-4">
                <Button
                  size="large"
                  className="w-full bg-primary hover:bg-primary text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency: (555) 911-SAFE
                </Button>
                <Button
                  size="large"
                  type="outlined"
                  className="w-full border-white text-white hover:bg-white hover:color-dark-blue"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Regular Booking: (555) 123-RIDE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
