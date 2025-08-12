import { Navigation } from "@/components/organisms/navigation";
import { Footer } from "@/components/organisms/footer";
import ScrollToTop from "@/components/atoms/scrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <Navigation />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
