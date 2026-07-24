import Navbar from "@/components/layout/Navbar"; 
import LandingHero from "@/components/hero/LandingHero";
import AboutSection from "@/components/about/AboutSection";
import Editorial from "@/components/editorial/Editorial";
import ServicesSection from "@/components/services/ServicesSection";
import FeaturedProject from "@/components/featured/FeaturedProject";
import Team from "@/components/about-page/Team";

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

      {/* Editorial */}
       <Editorial />

      {/* Services */}
      <ServicesSection home />

      {/* Featured Projects */}
      <FeaturedProject />


      {/* Team */}
      <Team />

      {/* Footer */}
      <Footer />
    </>
  );
}