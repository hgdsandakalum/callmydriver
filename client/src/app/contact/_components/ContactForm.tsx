"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Form, Input, Select, message } from "antd";
import { Mail, Phone, User } from "@/../public/icons";
import { Button } from "@/components/atoms/button";

export default function ContactForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const formVariants = {
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

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("Thank you! Your message has been sent successfully.");
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-foreground rounded-2xl shadow-2xl p-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold text-primary-dark mb-4 font-dm-serif-display">
          Get in Touch
        </h3>
        <p className="text-secondary text-sm md:text-base">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      <Form
        form={form}
        name="contact"
        layout="vertical"
        onFinish={handleSubmit}
        className="booking-form space-y-2"
      >
        <div className="grid grid-cols-1 gap-6">
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input
              size="large"
              placeholder="Enter your full name"
              prefix={<User className="text-secondary" />}
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your email"
              prefix={<Mail className="text-secondary" />}
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your phone number"
              prefix={<Phone className="text-secondary" />}
            />
          </Form.Item>
        </div>

        <Form.Item
          name="subject"
          rules={[{ required: true, message: "Please select a subject" }]}
        >
          <Select
            size="large"
            placeholder="Select a subject"
            options={[
              { label: "General Inquiry", value: "general" },
              { label: "Booking Support", value: "booking" },
              { label: "Emergency Support", value: "emergency" },
              { label: "Feedback", value: "feedback" },
              { label: "Partnership", value: "partnership" },
              { label: "Other", value: "other" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
          className="booking-form-textarea"
        >
          <Input.TextArea
            size="large"
            rows={6}
            placeholder="Tell us how we can help you..."
            showCount
            maxLength={1000}
          />
        </Form.Item>

        <Form.Item className="text-center">
          <Button
            htmlType="submit"
            type="block"
            shape="round"
            className="w-full mt-4"
            loading={loading}
            size="large"
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
}
