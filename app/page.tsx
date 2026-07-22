import Navbar from "@/components/layout/Navbar";
import LandingHero from "@/components/hero/LandingHero";

import Editorial from "@/components/editorial/Editorial";
import AboutSection from "@/components/about/AboutSection";
/*import FounderReveal from "@/components/about/FounderReveal";*/

/*import EditorialTwo from "@/components/editorial/EditorialTwo";*/

import FeaturedProject from "@/components/featured/FeaturedProject";

/*import BookSection from "@/components/book/BookSection";*/

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <LandingHero />

      <Editorial />

      <AboutSection />



      <FeaturedProject />
       <Footer />


    </>
  );
}