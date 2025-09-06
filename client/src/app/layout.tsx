import type { Metadata } from "next";
import { Quicksand, DM_Serif_Display } from "next/font/google";
import "../styles/globals.css";

const geistSans = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const geistMono = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Call-My-Driver | Your Personal Driver",
  description:
    "Call-My-Driver is a platform that allows you to book a driver for your car.",
  openGraph: {
    title: "Call-My-Driver | Your Personal Driver",
    description:
      "Call-My-Driver is a platform that allows you to book a driver for your car.",
    url: "https://yourdomain.com/",
    siteName: "Call-My-Driver",
    images: [
      {
        url: "/images/og-image.png", // Update with your actual image path
        width: 1200,
        height: 630,
        alt: "Call-My-Driver Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call-My-Driver | Your Personal Driver",
    description:
      "Call-My-Driver is a platform that allows you to book a driver for your car.",
    images: ["/images/og-image.png"], // Update with your actual image path
    creator: "@callmydriver", // Update with your Twitter handle
  },
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
