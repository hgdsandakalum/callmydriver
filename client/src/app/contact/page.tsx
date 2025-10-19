"use client";
import { ContactForm, CompanyInfo } from "./_components";

export default function Contact() {
  return (
    <div className="scroll-container">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-dark to-primary py-20 md:py-24 min-h-[500px] flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-background bg-[url(/images/pexels-jeshoots-7433.jpg)] bg-cover bg-center bg-blend-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-dm-serif-display">
            Contact Us
          </h1>
          <p className="text-base md:text-xl text-foreground/90 max-w-3xl mx-auto">
            Need a safe ride home? Have questions about our services? We're here
            to help. Reach out to us and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Company Information */}
            <div className="order-1 lg:order-2">
              <CompanyInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
