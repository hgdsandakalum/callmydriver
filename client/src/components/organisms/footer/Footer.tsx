"use client";
import { Layout, Typography, Divider, ConfigProvider } from "antd";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "../../../../public/icons";
import Image from "next/image";
import Link from "next/link";

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

interface FooterProps {
  className?: string;
  contactInfo?: {
    bookingPhone?: string;
    email?: string;
  };
  services?: Array<{
    label: string;
    href?: string;
  }>;
  socialMedia?: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<any>;
  }>;
}

export const Footer: React.FC<FooterProps> = ({
  className = "",
  contactInfo = {
    bookingPhone: "(555) 123-RIDE",
    email: "support@callmyride.com",
  },
  services = [
    { label: "Emergency Rides" },
    { label: "Planned Rides" },
    { label: "Corporate Accounts" },
    { label: "Event Services" },
  ],
  socialMedia = [
    {
      name: "Facebook",
      href: "https://facebook.com/callmyride",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/callmyride",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/callmyride",
      icon: Linkedin,
    },
  ],
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--color-primary)",
          colorBgContainer: "var(--color-dark-blue)",
          colorText: "white",
          colorTextSecondary: "var(--color-light-gray)",
          colorBorder: "var(--color-blue-gray)",
          borderRadius: 0,
        },
        components: {
          Layout: {
            footerBg: "var(--color-dark-blue)",
            footerPadding: "48px 24px",
          },
          Typography: {
            colorText: "white",
            colorTextSecondary: "var(--color-light-gray)",
            fontSize: 14,
            fontWeightStrong: 600,
          },
        },
      }}
    >
      <AntFooter
        id="contact"
        className={`px-0 relative ${className}`}
        style={{
          background: "var(--color-background)",
          color: "white",
        }}
      >
        {/* <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-90 bg-gradient-to-l from-background via-background to-transparent z-1 backdrop-blur-lg" /> */}
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent from-30% via-primary-dark/10 via-60% to-primary-dark" />

        {/* Content with relative positioning */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="w-full sm:w-2/3">
                <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
                  <Image
                    src="/images/logos/logo-color.png"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/images/logos/logoname-color.png"
                    alt="Logo"
                    width={140}
                    height={32}
                  />
                </div>
                <div className="w-full text-center sm:text-left text-foreground mb-4 !font-roboto">
                  Professional designated driver service committed to getting
                  you and your vehicle home safely, 24/7.
                </div>
                <div className="flex flex-col justify-center items-center sm:items-start gap-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 color-primary" />
                    <span className="!text-foreground">
                      {contactInfo.bookingPhone}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 color-primary" />
                    <span className="!text-foreground">
                      {contactInfo.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex w-full sm:w-1/3 justify-end">
                <div>
                  <Title level={4} className="text-foreground mb-4 text-end">
                    Services
                  </Title>
                  <ul
                    className="space-y-2 mb-6"
                    style={{ listStyle: "none", padding: 0, margin: 0 }}
                  >
                    {services.map((service, index) => (
                      <li key={index} className="text-end">
                        <Link
                          href={service.href || "#"}
                          className="!text-foreground hover:!text-primary"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Social Media Icons */}
                  <div className="flex justify-end space-x-4 mt-4">
                    {socialMedia.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Link
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="!text-foreground hover:!text-primary transition-colors duration-300"
                          aria-label={social.name}
                        >
                          <IconComponent className="w-5 h-5" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Divider className="border-foreground mt-8 mb-6" />

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
              <div className="w-full lg:w-auto flex flex-wrap justify-center md:justify-start lg:justify-start items-center gap-x-2">
                <span className="text-sm text-foreground">
                  © 2025 CallMyRide. All rights reserved.
                </span>
                <span className="hidden sm:block text-sm text-foreground">
                  |
                </span>
                <Link
                  href="/privacy-policy"
                  className="text-sm !text-foreground hover:!text-primary"
                >
                  Privacy Policy
                </Link>
                <span className="text-sm text-foreground">|</span>
                <Link
                  href="/terms-of-service"
                  className="text-sm !text-foreground hover:!text-primary"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="w-full lg:w-auto flex items-center justify-center md:justify-end lg:justify-end gap-1 text-xs">
                Designed and developed by
                <Link
                  href="https://www.google.com"
                  className="text-xs !text-primary hover:!text-foreground"
                >
                  Nyx Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AntFooter>
    </ConfigProvider>
  );
};
