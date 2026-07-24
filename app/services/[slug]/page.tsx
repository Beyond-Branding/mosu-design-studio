import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { services } from "../services";

import Hero from "@/components/service-detail/Hero";
import WorkProcess from "@/components/service-detail/WorkProcess";
import ProcessSection from "@/components/service-detail/ProcessSection";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#F6F4F1]">

        <Hero
          title={service.title}
          subtitle={service.subtitle}
          image={service.heroImage}
        />

        <WorkProcess />

        <ProcessSection
          title={service.title}
          description={service.description}
          process={service.process}
          gallery={service.gallery}
        />

      </main>

      <Footer />
    </>
  );
}