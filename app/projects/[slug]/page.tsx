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

      <main className="bg-[#F6F4F1]">
        <section className="relative h-screen">
          <Image
            src={project.heroImage || project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute bottom-20 left-20 text-white">
            <p className="uppercase tracking-[0.4em] text-sm">Project</p>

            <h1 className="mt-4 text-7xl font-black uppercase">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="mx-auto max-w-7xl px-10 grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
                Overview
              </p>

              <h2 className="mt-6 text-5xl font-light">
                {project.subtitle}
              </h2>

              <p className="mt-10 text-lg leading-9 text-neutral-600">
                {project.description}
              </p>

              <Link
                href="/projects"
                className="mt-12 inline-flex items-center gap-3 rounded-full border px-6 py-3"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
            </div>

            <div className="relative h-[700px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

      </main>
      <Team/>


      <Footer />
    </>
  );
}