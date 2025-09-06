import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star, CheckCircle, MapPin } from "../../../../../public/icons";

export default function DriverCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const driverInfo = {
    name: "Michael Davis",
    role: "Professional Driver",
    eta: "5 minutes",
    rating: "4.9",
    rides: "2,847",
    status: "Driver is on the way to your location",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Add floating animation to the card
      gsap.to(cardRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });

      // Animate status indicator with pulse
      gsap.to(".status-indicator", {
        opacity: 0.6,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative order-first lg:order-last font-quicksand">
      <div
        ref={cardRef}
        className="bg-transparent backdrop-blur-xl w-full md:w-[400px] rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-transform duration-400 border border-foreground max-w-sm mx-auto lg:max-w-none"
      >
        <div className="space-y-4">
          <DriverHeader name={driverInfo.name} role={driverInfo.role} />
          <DriverStats
            eta={driverInfo.eta}
            rating={driverInfo.rating}
            rides={driverInfo.rides}
          />
          <DriverStatus status={driverInfo.status} />
        </div>
      </div>
    </div>
  );
}

function DriverHeader({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div>
          <div className="font-semibold text-foreground text-sm sm:text-base">
            {name}
          </div>
          <div className="text-xs sm:text-sm text-foreground">{role}</div>
        </div>
      </div>
      <div className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
        <CheckCircle className="w-3 h-3 mr-1" />
        Verified
      </div>
    </div>
  );
}

function DriverStats({
  eta,
  rating,
  rides,
}: {
  eta: string;
  rating: string;
  rides: string;
}) {
  const stats = [
    { label: "ETA:", value: eta },
    { label: "Rating:", value: rating, icon: Star },
    { label: "Rides:", value: rides },
  ];

  return (
    <div className="space-y-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center justify-between text-xs sm:text-sm"
        >
          <span className="text-foreground">{stat.label}</span>
          <div className="flex items-center">
            {stat.icon && (
              <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-current" />
            )}
            <span
              className={`font-semibold text-foreground ${
                stat.icon ? "ml-1" : ""
              }`}
            >
              {stat.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DriverStatus({ status }: { status: string }) {
  return (
    <div className="bg-primary-50 rounded-lg p-3 border border-foreground">
      <div className="flex items-center text-foreground">
        <MapPin className="status-indicator text-primary w-3 h-3 sm:w-4 sm:h-4 mr-2" />
        <span className="text-xs sm:text-sm font-medium">{status}</span>
      </div>
    </div>
  );
}
