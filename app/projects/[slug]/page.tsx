import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Team from "@/components/about-page/Team";
import Footer from "@/components/layout/Footer";

import { projects } from "../projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* ================= HERO ================= */}

        <section className="relative h-screen overflow-hidden">

          <Image
            src={project.heroImage || project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div
            className="
              absolute
              bottom-16
              left-6
              right-6

              sm:left-10
              sm:bottom-20

              lg:left-20
              lg:bottom-24
            "
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              {project.category || "Project"}
            </p>

            <h1
              className="
                mt-4
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
              {project.title}
            </h1>

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/60">
              {project.location}
            </p>
          </div>

        </section>


        {/* ================= OVERVIEW ================= */}

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

              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Overview
              </p>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-light
                  uppercase
                  leading-[0.95]

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {project.subtitle}
              </h2>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-base
                  leading-8
                  text-white/60

                  lg:text-lg
                  lg:leading-9
                "
              >
                {project.description}
              </p>

              <Link
                href="/projects"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white
                  px-6
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                <ArrowLeft size={17} />
                Back to Projects
              </Link>

            </div>


            {/* IMAGE */}

            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  rounded-sm
                  object-cover
                "
              />

            </div>

          </div>

        </section>


        {/* ================= PROJECT INFO ================= */}

        <section className="border-t border-white/10 bg-black py-20">

          <div
            className="
              mx-auto
              grid
              max-w-[1500px]
              grid-cols-2
              gap-10
              px-6

              sm:grid-cols-3
              lg:grid-cols-4
              lg:px-10
            "
          >

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Category
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white">
                {project.category}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Location
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white">
                {project.location}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Status
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white">
                {project.status}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Project
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white">
                MOSU Studio
              </p>
            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <div className="bg-black">
          <Team />
        </div>

      </main>

      <Footer />
    </>
  );
}