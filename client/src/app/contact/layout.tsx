import { Navigation } from "@/components/organisms/navigation";
import { Footer } from "@/components/organisms/footer";
import ScrollToTop from "@/components/atoms/scrollToTop";
import { CTA } from "../home/_components";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-foreground max-w-[100dvw] sm:max-w-screen mx-0 sm:mx-auto overflow-hidden">
      <Navigation />
      <main>{children}</main>
      <ScrollToTop />
      <CTA />
      <Footer />
    </div>
  );
}
