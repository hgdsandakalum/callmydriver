"use client";
import { Button } from "@/components/atoms/button";
import {
  Shield,
  ArrowRight,
  Phone,
  Star,
  CheckCircle,
  MapPin,
  SteeringWheel,
} from "../../../../public/icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 pb-16 bg-gradient-to-br from-orange-50 to-orange-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="bg-primary text-white hover:bg-primary-600 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4 mr-1" />
                Safe & Reliable Service
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Safe Ride
                <span className="text-orange-600"> Home</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Professional designated drivers who drive you and your vehicle
                home safely. Available 24/7 for emergencies, after drinking, or
                when you're too tired to drive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="large"
                className="bg-primary hover:bg-primary-600 text-white text-lg px-8 py-4"
              >
                Book Your Ride
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="large"
                type="outlined"
                className="text-lg px-8 py-4 border-orange text-orange hover:bg-primary hover:text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Call
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5.0★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Safe Rides</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-orange-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <SteeringWheel className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Michael Davis
                      </div>
                      <div className="text-sm text-gray-600">
                        Professional Driver
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">ETA:</span>
                    <span className="font-semibold text-gray-900">
                      5 minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold text-gray-900">
                        4.9
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rides:</span>
                    <span className="font-semibold text-gray-900">2,847</span>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-3 border border-orange-100">
                  <div className="flex items-center text-orange-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">
                      Driver is on the way to your location
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
