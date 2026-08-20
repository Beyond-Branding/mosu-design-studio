import { notFound } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesShowcase from "@/components/ServicesShowcase";

import { services } from "../services";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: Props) {
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

      <main className="bg-black text-white">

        {/* ================= HERO ================= */}

        <section className="relative h-screen overflow-hidden">

          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div
            className="
              absolute
              bottom-16
              left-6
              right-6
              z-10

              sm:left-10
              sm:bottom-20

              lg:left-20
              lg:bottom-24
            "
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/60">
              Service
            </p>

            <h1
              className="
                max-w-6xl
                text-5xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]

                sm:text-6xl
                md:text-7xl
                lg:text-[8vw]
              "
            >
              {service.title}
            </h1>
          </div>

        </section>


        {/* ================= DESCRIPTION ================= */}

        <section className="bg-black py-28 lg:py-40">

          <div
            className="
              mx-auto
              grid
              max-w-[1500px]
              items-center
              gap-16
              px-6

              md:px-10
              lg:grid-cols-2
              lg:gap-24
            "
          >

            {/* TEXT */}

            <div>

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
                Overview
              </p>

              <h2
                className="
                  mb-10
                  text-4xl
                  font-light
                  uppercase
                  leading-[1.05]
                  tracking-[-0.03em]

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {service.subtitle}
              </h2>

              <div className="max-w-xl space-y-8 text-base leading-8 text-white/60 lg:text-lg lg:leading-9">

                <p>
                  {service.description}
                </p>

                <p>
                  Every project is developed through a thoughtful design
                  process, balancing aesthetics, functionality and
                  craftsmanship to create timeless spaces tailored to every
                  client.
                </p>

              </div>

            </div>


            {/* IMAGE */}

            <div className="relative h-[500px] overflow-hidden sm:h-[600px] lg:h-[700px]">

              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </div>

        </section>


        {/* ================= SERVICES SHOWCASE ================= */}

        <div className="bg-black">
          <ServicesShowcase />
        </div>

      </main>

      <Footer />
    </>
  );
}