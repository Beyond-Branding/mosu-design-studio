import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "../services";
import ServicesSection from "@/components/services/ServicesSection";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

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
    <main>
      {/* Hero */}
      <section className="relative h-screen">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-20 left-20 z-10 text-white">
          <p className="mb-4 uppercase tracking-[0.35em] text-sm">
            Service
          </p>

          <h1 className="text-7xl font-black">
            {service.title}
          </h1>
        </div>
      </section>

     {/* ================= DESCRIPTION ================= */}

<section className="bg-white py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-24 px-10 lg:grid-cols-2">

    {/* LEFT CONTENT */}

    <div>

      <p className="mb-6 uppercase tracking-[0.35em] text-xs text-neutral-500">
        Overview
      </p>

      <h2 className="mb-10 text-[52px] font-light leading-[1.1] text-[#111]">
        {service.subtitle}
      </h2>

      <div className="space-y-8 text-lg leading-9 text-neutral-600">

        <p>
          {service.description}
        </p>

        <p>
          Every project is developed through a thoughtful design process,
          balancing aesthetics, functionality and craftsmanship to create
          timeless spaces tailored to every client.
        </p>

      </div>

    </div>

    {/* RIGHT IMAGE */}

    <div className="relative h-[650px] overflow-hidden rounded-sm">

      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        className="object-cover"
      />

    </div>

  </div>
</section>

      {/* WE DO */}
      <ServicesSection />
    </main>
        <Footer />
    </>
  );
}