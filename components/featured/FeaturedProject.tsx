"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/app/projects/projects";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: "ALL WORKS", href: "/projects" },
  { label: "TAJ GATEWAY PALOLEM", href: "/projects/taj-gateway-palolem" },
  { label: "HYATT REGENCY", href: "/projects/hyatt-regency-dehradun" },
  { label: "76 HAZRA", href: "/projects/76-hazra" },
  { label: "GUNTUR PROJECT", href: "/projects/guntur-project" },
  { label: "COIMBATORE MANSION", href: "/projects/coimbatore-mansion" },
  { label: "BIYANI'S RESIDENCE", href: "/projects/biyanies-residence" },
  { label: "SALEM BUNGALOW", href: "/projects/salem-bungalow" },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || projects.length === 0) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".project-slide");

      if (!slides.length) return;

      // Initial state
      slides.forEach((slide, index) => {
        gsap.set(slide, {
          autoAlpha: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 1.04,
          zIndex: projects.length - index,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${projects.length * 700}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      projects.forEach((_, index) => {
        if (index === 0) return;

        const previousSlide = slides[index - 1];
        const currentSlide = slides[index];

        // Pause
        timeline.to({}, {
          duration: 0.3,
        });

        // Previous project fades out
        timeline.to(
          previousSlide,
          {
            autoAlpha: 0,
            scale: 1.08,
            duration: 1,
            ease: "power2.inOut",
          },
          ">"
        );

        // Current project fades in
        timeline.fromTo(
          currentSlide,
          {
            autoAlpha: 0,
            scale: 1.04,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        );

        // Hold
        timeline.to({}, {
          duration: 0.4,
        });
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* =====================================================
          BACKGROUND HOLDER
      ===================================================== */}
      <div className="h-screen w-full" />

      {/* =====================================================
          PROJECT SLIDES
      ===================================================== */}
      {projects.map((project, index) => (
        <div
          key={project.slug}
          className="project-slide absolute inset-0 h-full w-full"
        >
          {/* =================================================
              PROJECT IMAGE
          ================================================= */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

          

          {/* =================================================
              PROJECT CONTENT
          ================================================= */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white">
            {/* Category */}
            <p
              className="
                mb-5
                text-[9px]
                uppercase
                tracking-[0.45em]
                text-white/60
              "
            >
              {project.category}
            </p>

            {/* Title */}
            <h2
  className="
    max-w-[1100px]
    text-[1.7rem]
    font-semibold
    uppercase
    leading-[1.08]
    tracking-[0.04em]
    [word-spacing:0.12em]
    sm:text-[2.5rem]
    md:text-[3.2rem]
    lg:text-[4rem]
    xl:text-[4.8rem]
  "
>
  {project.title}
</h2>

            {/* Location */}
            <p
              className="
                mt-5
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/65
                sm:text-[10px]
              "
            >
              {project.location}
            </p>

            {/* Description */}
           {/* Description */}
{project.description && (
  <p
    className="
      mt-8
      max-w-[780px]
      text-[18px]
      font-light
      leading-[1.9]
      tracking-[0.035em]
      text-white/80

      sm:mt-9
      sm:text-base
      md:text-lg
      lg:text-xl
      lg:leading-[1.85]
    "
  >
    {project.description}
  </p>
)}
            {/* =================================================
                VIEW PROJECT BUTTON
            ================================================= */}
            <Link
              href={`/projects/${project.slug}`}
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-white/80
                bg-white
                px-7
                py-3.5
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-black
                transition-all
                duration-500
                hover:bg-transparent
                hover:text-white
              "
            >
              <span>View Project</span>

              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </Link>
          </div>

          {/* =================================================
              PROJECT NUMBER
          ================================================= */}
          <div className="absolute bottom-10 right-10 z-30 hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/80">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>

          {/* =================================================
              STATUS
          ================================================= */}
          <div className="absolute bottom-10 left-10 z-30 hidden lg:block xl:left-12">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
              {project.status || "COMPLETED"}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}