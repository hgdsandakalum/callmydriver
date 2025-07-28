"use client";
import { Card, CardContent } from "@/components/atoms/card";
import { Star } from "../../../../public/icons";

export default function Testimonials() {
  const testimonials = [
    {
      text: "SafeRide saved my night! The driver was professional, arrived quickly, and got me home safely after a work event. Highly recommend!",
      name: "Sarah Johnson",
      role: "Marketing Manager",
    },
    {
      text: "I use SafeRide regularly when I'm too tired to drive after long work days. The drivers are always courteous and the service is reliable.",
      name: "Michael Chen",
      role: "Software Engineer",
    },
    {
      text: "Great peace of mind knowing there's a safe alternative when needed. The app is easy to use and the drivers are professional.",
      name: "Emma Rodriguez",
      role: "Teacher",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold color-dark-blue mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl color-blue-gray">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="color-secondarymb-4">{testimonial.text}</p>
                <div className="font-semibold color-dark-blue">
                  {testimonial.name}
                </div>
                <div className="text-sm color-blue-gray">
                  {testimonial.role}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
