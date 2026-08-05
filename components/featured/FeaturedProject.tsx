"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/app/projects/projects";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: "ALL WORKS", href: "/projects" },
  { label: "HOTELS & RESORTS", href: "/projects/hotels-resorts" },
  { label: "RESIDENCES", href: "/projects/residences" },
  { label: "BESPOKE ART", href: "/projects/bespoke-art" },
  { label: "WALL INSTALLATIONS", href: "/projects/wall-installations" },
  { label: "SCULPTURES", href: "/projects/sculptures" },
  { label: "CUSTOM LIGHTING", href: "/projects/custom-lighting" },
  { label: "FURNITURE", href: "/projects/furniture" },
  { label: "DOORS & PARTITIONS", href: "/projects/doors-partitions" },
  { label: "METAL WORKS", href: "/projects/metal-works" },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    const slides = gsap.utils.toArray<HTMLElement>(".project-slide");

    slides.forEach((slide, i) => {
      gsap.set(slide, {
        autoAlpha: i === 0 ? 1 : 0,
        scale: 1,
        zIndex: slides.length - i,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,

        // Delay pinning slightly
        start: "top+=50 top",

        end: `+=${slides.length * 700}`,

        pin: true,
        pinSpacing: true,

        scrub: 0.8,

        anticipatePin: 0,

        invalidateOnRefresh: true,

        fastScrollEnd: true,

        markers: false,
      },
    });

    slides.forEach((slide, i) => {
      if (i === 0) return;

      tl.to(
        slides[i - 1],
        {
          autoAlpha: 0,
          scale: 1.08,
          ease: "none",
          duration: 1,
        },
        "+=0.2"
      ).to(
        slide,
        {
          autoAlpha: 1,
          scale: 1,
          ease: "none",
          duration: 1,
        },
        "<"
      );
    });

    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
  ref={sectionRef}
  className="relative min-h-screen overflow-hidden bg-black"
>
      {projects.map((item, index) => (
        <div
          key={item.slug}
          className="project-slide absolute inset-0"
        >
          {/* Background */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/65" />

          {/* Left Menu */}
          <aside className="absolute left-12 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
           <ul className="space-y-5">
  {categories.map((category) => (
    <li key={category.label}>
      <Link
        href={category.href}
        className={`
          block
          uppercase
          text-[11px]
          tracking-[0.35em]
          transition-all
          duration-300

          ${
            item.title === category.label
              ? "text-white"
              : "text-white/25 hover:text-white hover:translate-x-2"
          }
        `}
      >
        {category.label}
      </Link>
    </li>
  ))}
</ul>
          </aside>

          {/* Center */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8 text-white">

            <p className="mb-3 text-[11px] uppercase tracking-[0.45em] opacity-80">
              {item.category}
            </p>

            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] opacity-60">
              {item.location}
            </p>

            <h2
  className="
    max-w-5xl
    uppercase
    font-light
    leading-[1]
    tracking-[-0.02em]

    text-[2rem]
    sm:text-[2.7rem]
    md:text-[3.5rem]
    lg:text-[4.3rem]
    xl:text-[5rem]
  "
>
  {item.title}
</h2>

            <Link
              href={`/projects/${item.slug}`}
              className="
                mt-12
                inline-flex
                items-center
                justify-center

                rounded-full
                border
                border-white

                bg-white

                px-8
                py-4

                text-[11px]
                uppercase
                tracking-[0.32em]
                text-black

                transition-all
                duration-500

                hover:bg-transparent
                hover:text-white
              "
            >
              View Project
            </Link>
          </div>

          {/* Counter */}
          <div className="absolute bottom-10 right-10 z-30 hidden lg:block">
            <p className="text-white text-[13px] tracking-[0.35em]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}