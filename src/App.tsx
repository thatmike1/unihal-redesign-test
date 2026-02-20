import Navbar from "@/sections/Navbar";
import HeroSection from "@/sections/HeroSection";
import StatsBar from "@/sections/StatsBar";
import ServicesSection from "@/sections/ServicesSection";
import ProcessSection from "@/sections/ProcessSection";
import ReferencesSection from "@/sections/ReferencesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import WhyUsSection from "@/sections/WhyUsSection";
import CtaSection from "@/sections/CtaSection";
import Footer from "@/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <ProcessSection />
        <ReferencesSection />
        <TestimonialsSection />
        <WhyUsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
