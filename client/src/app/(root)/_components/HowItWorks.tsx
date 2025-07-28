"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Request a Ride",
      description:
        "Open the app or call our 24/7 hotline. Share your location and we'll match you with a nearby professional driver.",
      bgColor: "bg-dark-blue",
    },
    {
      number: "2",
      title: "Driver Arrives",
      description:
        "Your certified driver arrives at your location. They'll drive your vehicle while you relax as a passenger.",
      bgColor: "bg-primary",
    },
    {
      number: "3",
      title: "Safe Arrival",
      description:
        "Arrive safely at your destination. Pay securely through the app and rate your experience.",
      bgColor: "bg-secondary",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold color-dark-blue mb-4">
            How SafeRide Works
          </h2>
          <p className="text-xl color-secondarymax-w-3xl mx-auto">
            Getting home safely is just three simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
              >
                <span className="text-2xl font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold color-dark-blue mb-4">
                {step.title}
              </h3>
              <p className="color-blue-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
