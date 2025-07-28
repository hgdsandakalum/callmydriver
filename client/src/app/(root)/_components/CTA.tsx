"use client";
import { Button } from "@/components/atoms/button";
import { Phone } from "../../../../public/icons";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-dark-blue to-blue-gray">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Get Home Safely?
        </h2>
        <p className="text-xl text-light-gray mb-8">
          Download the SafeRide app or call us now. Professional drivers are
          standing by 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="large"
            className="bg-white color-dark-blue hover:bg-light-gray text-lg px-8 py-4"
          >
            Download App
          </Button>
          <Button
            size="large"
            type="outlined"
            className="border-white text-white hover:bg-white hover:color-dark-blue text-lg px-8 py-4"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: (555) 123-RIDE
          </Button>
        </div>
      </div>
    </section>
  );
}
