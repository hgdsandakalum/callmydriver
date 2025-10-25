"use client";
import { ContactForm, ContactInfo, ContactFAQ } from "./_components";
import { AboutCTA } from "../about/_components";

export default function Contact() {
  return (
    <div className="scroll-container bg-background">
      {/* Main Content - Dark Purple Background */}
      <section className="pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32  relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information - Left Column */}
            <div className="order-1 flex items-center">
              <ContactInfo />
            </div>

            {/* Contact Form - Right Column */}
            <div className="order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQ />

      {/* CTA Section */}
      <AboutCTA variant="light" />
    </div>
  );
}
