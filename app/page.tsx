import Navbar from "@/components/layout/Navbar"; 
import LandingHero from "@/components/hero/LandingHero";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import FeaturedProject from "@/components/featured/FeaturedProject";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    {/* Hero */}
      <Navbar />

      {/* Hero */}
      <LandingHero />

      {/* About */}
      <AboutSection />

      {/* Services */}
      <ServicesSection home />

      {/* Featured Projects */}
      <FeaturedProject />

      {/* Footer */}
      <Footer />
    </>
  );
}