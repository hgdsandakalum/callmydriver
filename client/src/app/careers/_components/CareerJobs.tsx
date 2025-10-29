"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "@/../public/icons";
import { Button } from "@/components/atoms/button";
import { Modal } from "@/components/atoms/modal";
import { Form, Input, message } from "antd";

export default function CareerJobs() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // UI/UX Designer expanded by default
  const [applyOpen, setApplyOpen] = useState<boolean>(false);
  const [applyingJob, setApplyingJob] = useState<string | null>(null);
  const [form] = Form.useForm();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const jobsData = [
    {
      title: "IT Recruiter",
      description:
        "Join our talent acquisition team to help us find and attract top IT professionals.",
      details: {
        projectDetails:
          "As an IT Recruiter at Call-My-Driver, you'll be responsible for identifying, attracting, and hiring the best technology talent to support our growing platform. You'll work closely with our engineering teams to understand their needs and find candidates who can help us build innovative transportation solutions.",
        requirements: [
          "2+ years of experience in IT recruitment",
          "Strong understanding of technology roles and skills",
          "Excellent communication and interpersonal skills",
          "Experience with recruitment tools and platforms",
          "Ability to work in a fast-paced environment",
        ],
        responsibilities: [
          "Source and screen IT candidates",
          "Conduct interviews and assessments",
          "Build relationships with potential candidates",
          "Collaborate with hiring managers",
          "Maintain recruitment metrics and reports",
        ],
      },
    },
    {
      title: "Laravel/Vue and Nuxt Developer",
      description:
        "Build scalable web applications using modern PHP and JavaScript frameworks.",
      details: {
        projectDetails:
          "As a Full-Stack Developer, you'll work on our core platform using Laravel for backend development and Vue.js/Nuxt.js for frontend. You'll be involved in building features that directly impact our drivers and passengers, ensuring a seamless user experience.",
        requirements: [
          "3+ years of experience with Laravel framework",
          "Strong proficiency in Vue.js and Nuxt.js",
          "Experience with MySQL/PostgreSQL databases",
          "Knowledge of RESTful API development",
          "Experience with version control (Git)",
          "Understanding of modern JavaScript (ES6+)",
          "Familiarity with testing frameworks",
        ],
        responsibilities: [
          "Develop and maintain web applications",
          "Create responsive user interfaces",
          "Build and maintain APIs",
          "Collaborate with design and product teams",
          "Write clean, maintainable code",
          "Participate in code reviews",
        ],
      },
    },
    {
      title: "UI/UX Designer",
      description:
        "Design exceptional user experiences for our transportation platform.",
      details: {
        projectDetails:
          "Because we are providing a niche service (digital product design), all our clients understand the importance of excellent user experience, and they are hiring us because they value quality design solutions. You will never see yourself working on a project where design is something that the company sold to the client as a secondary service.",
        requirements: [
          "3+ years of experience designing digital products (Web applications, Mobile applications)",
          "You are performing a top-level job designing UIs. User flows, grid systems, screen design, rapid prototyping",
          "Experience creating and documenting design systems and UI kits. You know how to and have experience documenting design deliverables for the further development process",
          "Expert knowledge in Figma (Components, Prototyping, Auto-layout, Team libraries)",
          "Analytical thinking. You can design complex digital products and services and track dependencies that live behind",
          "Excellent visual design skills (Typography, Colors, Icons, Composition, pixel-perfect design)",
          "You know how digital products are created technically (BE, FE, Data flows, integrations, etc.)",
          "The portfolio of designed products has to show your skills and experience",
          "Your English should be at an upper-intermediate level or higher",
          "Mature person. You know how to communicate, and how to handle feedback as well",
          "An open-minded designer with a strong motivation to develop yourself as a professional",
          "You know how to interact with the team",
        ],
        responsibilities: [
          "Design top-level digital products, and experiences through a collaborative process, rapid prototyping, usability testing, and crafting of proper design documentation",
          "Transform business requirements and user needs into perfectly crafted user interfaces",
          "Working in close collaboration with the design director and clients",
          "Contribute to team competency excellence by improving the design and work process",
        ],
      },
    },
  ];

  const toggleJob = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOpenApply = (jobTitle: string) => {
    setApplyingJob(jobTitle);
    setApplyOpen(true);
  };

  const handleCloseApply = () => {
    setApplyOpen(false);
    setApplyingJob(null);
    form.resetFields();
  };

  const handleSubmitApplication = async () => {
    try {
      const values = await form.validateFields();
      // Simulate submit
      await new Promise((r) => setTimeout(r, 600));
      message.success("Application submitted successfully");
      handleCloseApply();
    } catch (e) {
      // validation errors are handled by antd
    }
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-foreground mb-4 font-dm-serif-display">
              Careers at Call-My-Driver
            </h2>
          </div>
          <div>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              We’re building the future of personal driver services through
              smart technology and dedicated people. Whether you’re a developer,
              designer, or operations expert, you’ll be contributing to
              something that keeps communities safer every day.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {jobsData.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-lg border border-foreground overflow-hidden hover:border-primary transition-colors duration-300"
            >
              <button
                onClick={() => toggleJob(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {job.title}
                  </h3>
                  <p className="text-foreground/80 text-sm">
                    {job.description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ArrowUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ArrowDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="space-y-6">
                    {/* Project Details */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Project details:
                      </h4>
                      <p className="text-foreground text-sm md:text-base leading-relaxed">
                        {job.details.projectDetails}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Requirements:
                      </h4>
                      <ul className="space-y-2 list-disc list-inside">
                        {job.details.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="list-item text-sm">
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Responsibilities:
                      </h4>
                      <ul className="space-y-2 list-disc list-inside">
                        {job.details.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="list-item text-sm">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply Now Button */}
                    <div className="pt-2 flex">
                      <Button
                        type="outlined"
                        variant="primary"
                        size="middle"
                        shape="round"
                        label="Apply Now"
                        className="w-[200px]"
                        onClick={() => handleOpenApply(job.title)}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Apply Modal */}
        <Modal
          open={applyOpen}
          onCancel={handleCloseApply}
          title={applyingJob ? `Apply for ${applyingJob}` : "Apply Now"}
          footer={
            <div className="flex justify-end gap-2">
              <Button
                type="outlined"
                variant="secondary"
                shape="round"
                label="Cancel"
                onClick={handleCloseApply}
              />
              <Button
                type="block"
                variant="primary"
                shape="round"
                label="Submit Application"
                onClick={handleSubmitApplication}
                className="w-[200px]"
              />
            </div>
          }
        >
          <Form
            form={form}
            layout="vertical"
            name="job-apply-form"
            className="booking-form"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item label="Resume/Portfolio URL" name="resume">
              <Input placeholder="Link to resume or portfolio (optional)" />
            </Form.Item>

            <Form.Item
              label="Cover Letter"
              name="coverLetter"
              className="booking-form-textarea"
            >
              <Input.TextArea
                rows={5}
                placeholder="Briefly tell us about yourself (optional)"
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </motion.section>
  );
}
