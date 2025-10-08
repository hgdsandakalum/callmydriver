"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";
import { Shield, Clock, MapPin, Award } from "../../../../public/icons";

export default function Features() {
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-background flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-5xl font-medium font-dm-serif-display mb-4 text-foreground">
              Why Choose CallMyDriver
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-3xl mx-auto">
              CallMyDriver offers a range of features that make it the perfect
              choice for your needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground hover:!shadow-none">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-6">
                  <Shield className="w-16 h-16 !text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold !text-primary  mb-4">
                  Expert Instructors
                </h3>
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  Learn from top industry professionals who bring years of
                  real-world experience to the classroom, providing you with the
                  latest tools, techniques, and insights needed to excel in your
                  field.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-6">
                  <Clock className="w-16 h-16 !text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold !text-primary mb-4">
                  Career-Boost Certifications
                </h3>
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  Earn certifications that are highly regarded by employers,
                  helping to enhance your resume, gain industry recognition, and
                  open doors to new career opportunities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-1 row-span-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-6">
                  <Award className="w-16 h-16 !text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold !text-primary mb-4">
                  100+ High Impact Courses
                </h3>
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  expert.io offers over 100 courses that cover essentials in
                  today's tech industry. Whether you're a beginner or an
                  experienced professional, our courses in web development, data
                  science, and cybersecurity provide practical, hands-on
                  learning to help you apply your skills immediately &
                  competitive.
                </p>
                <Button variant="primary" shape="round" className="mt-8">
                  Start Free Trial →
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full backdrop-blur-sm !border-secondary !text-foreground">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 !text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold !text-primary mb-4">
                    Flexible Learning Schedules
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 flex-grow">
                    Whether you're a working professional or a student, you can
                    customize your schedule to fit your needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
