import { notFound } from "next/navigation";
import Image from "next/image";

import { services } from "../services";
import ServicesSection from "@/components/ServicesSection";

interface Props {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find(
    (item) => item.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  return (
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

      {/* Description */}

      <section className="mx-auto max-w-7xl px-10 py-32">

        <div className="grid gap-20 lg:grid-cols-2">

          <div>

            <p className="uppercase tracking-[0.35em] text-neutral-500 text-sm">
              Overview
            </p>

          </div>

          <div>

            <p className="text-3xl leading-relaxed text-neutral-800 font-light">
              {service.description}
            </p>

          </div>

        </div>

      </section>

      {/* WE DO Section */}

      <ServicesSection />

    </main>
  );
}