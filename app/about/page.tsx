import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/about-page/Hero";
import WhyUs from "@/components/about-page/WhyUs";
import FlipSection from "@/components/about-page/FlipSection";
import Experience from "@/components/about-page/Experience";
import Team from "@/components/about-page/Team";

export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      {/* Why Work With MOSU */}
      <WhyUs />

      {/* 3D Flip Animation */}
      <FlipSection />

      {/* Pinned Image Storytelling */}
      <Experience />

      {/* Meet the Team */}
      <Team />

      {/* Existing Footer */}
      <Footer />
    </>
  );
}