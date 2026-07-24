import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesGrid from "@/components/service-page/ServiceGrid";
import LetsTalk from "@/components/service-page/LetsTalk";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f3f3f3] pt-28">
        <ServicesGrid />

        <LetsTalk />
      </main>

      <Footer />
    </>
  );
}