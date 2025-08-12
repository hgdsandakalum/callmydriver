"use client";
import { Layout, Row, Col, Typography, Divider, ConfigProvider } from "antd";
import { SteeringWheel, Phone, Mail } from "../../../../public/icons";

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

interface FooterProps {
  className?: string;
  logoText?: string;
  logoIcon?: React.ReactNode;
  description?: string;
  contactInfo?: {
    emergencyPhone?: string;
    bookingPhone?: string;
    email?: string;
  };
  services?: Array<{
    label: string;
    href?: string;
  }>;
  companyLinks?: Array<{
    label: string;
    href?: string;
  }>;
  copyrightText?: string;
  showContactSection?: boolean;
  showServicesSection?: boolean;
  showCompanySection?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  className = "",
  logoText = "Call-My-Ride",
  logoIcon,
  description = "Professional designated driver service committed to getting you and your vehicle home safely, 24/7.",
  contactInfo = {
    emergencyPhone: "(555) 911-SAFE",
    bookingPhone: "(555) 123-RIDE",
    email: "support@callmyride.com",
  },
  services = [
    { label: "Emergency Rides" },
    { label: "Planned Rides" },
    { label: "Corporate Accounts" },
    { label: "Event Services" },
  ],
  companyLinks = [
    { label: "About Us" },
    { label: "Safety" },
    { label: "Careers" },
    { label: "Contact" },
  ],
  copyrightText = "© 2024 Call-My-Ride. All rights reserved. | Privacy Policy | Terms of Service",
  showContactSection = true,
  showServicesSection = true,
  showCompanySection = true,
}) => {
  const defaultLogoIcon = <SteeringWheel className="h-8 w-8 color-primary" />;

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
            footerPadding: "64px 24px",
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
        className={`px-0 ${className}`}
        style={{
          background: "var(--color-dark-blue)",
          color: "white",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]}>
            {showContactSection && (
              <Col xs={24} md={12}>
                <div className="flex items-center space-x-2 mb-6">
                  {logoIcon || defaultLogoIcon}
                  <Title level={2} style={{ color: "white", margin: 0 }}>
                    {logoText}
                  </Title>
                </div>
                <Paragraph
                  style={{
                    color: "var(--color-light-gray)",
                    marginBottom: 24,
                    maxWidth: 400,
                  }}
                >
                  {description}
                </Paragraph>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 color-primary" />
                    <Text style={{ color: "var(--color-light-gray)" }}>
                      Emergency: {contactInfo.emergencyPhone}
                    </Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 color-primary" />
                    <Text style={{ color: "var(--color-light-gray)" }}>
                      Booking: {contactInfo.bookingPhone}
                    </Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 color-primary" />
                    <Text style={{ color: "var(--color-light-gray)" }}>
                      {contactInfo.email}
                    </Text>
                  </div>
                </div>
              </Col>
            )}

            {showServicesSection && (
              <Col xs={12} md={6}>
                <Title level={4} style={{ color: "white", marginBottom: 16 }}>
                  Services
                </Title>
                <ul
                  className="space-y-2"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.href || "#"}
                        style={{
                          color: "var(--color-light-gray)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "var(--color-light-gray)";
                        }}
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            )}

            {showCompanySection && (
              <Col xs={12} md={6}>
                <Title level={4} style={{ color: "white", marginBottom: 16 }}>
                  Company
                </Title>
                <ul
                  className="space-y-2"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {companyLinks.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href || "#"}
                        style={{
                          color: "var(--color-light-gray)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "var(--color-light-gray)";
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            )}
          </Row>

          <Divider
            style={{
              borderColor: "var(--color-blue-gray)",
              margin: "48px 0 32px 0",
            }}
          />

          <div style={{ textAlign: "center" }}>
            <Text style={{ color: "var(--color-light-gray)" }}>
              {copyrightText}
            </Text>
          </div>
        </div>
      </AntFooter>
    </ConfigProvider>
  );
};
