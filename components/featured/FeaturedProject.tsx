"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectData } from "./ProjectsData";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!sectionRef.current) return;

  const slides = gsap.utils.toArray<HTMLElement>(".project-slide");

  // Hide all slides except the first on ALL devices
  slides.forEach((slide, i) => {
    gsap.set(slide, {
      autoAlpha: i === 0 ? 1 : 0,
      scale: 1,
      zIndex: slides.length - i,
    });
  });

  const mm = gsap.matchMedia();

  mm.add("(min-width:1024px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${slides.length * 1000}`,
        scrub: 1,
        pin: true,
      },
    });

    slides.forEach((slide, i) => {
      if (i === 0) return;

      tl.to(
        slides[i - 1],
        {
          autoAlpha: 0,
          scale: 1.08,
          duration: 1,
        },
        "+=0.2"
      );

      tl.to(
        slide,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
        },
        "<"
      );
    });
  });

  return () => mm.revert();
}, []);

return (
  <section
    ref={sectionRef}
    className="relative h-screen overflow-hidden bg-black"
  >
    {projectData.map((item) => (
      <div
        key={item.title}
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
        <div className="absolute inset-0 bg-black/50" />

        {/* Left Navigation */}
        <aside
          className="
            absolute
            left-4
            md:left-8
            lg:left-12
            top-1/2
            -translate-y-1/2
            z-20

            hidden
            lg:block
          "
        >
          <ul className="space-y-5 uppercase tracking-[0.22em] text-sm">
            {[
              "All Works",
              "Hotels & Resorts",
              "Residences",
              "Bespoke Art",
              "Wall Installations",
              "Sculptures",
              "Custom Lighting",
              "Furniture",
              "Doors & Partitions",
              "Metal Works",
            ].map((category) => (
              <li
                key={category}
                className={`transition-colors duration-300 ${
                  item.title === category
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            items-center
            justify-center
            text-center
            text-white
            px-6
            md:px-12
            lg:px-24
          "
        >
          <p
            className="
              mb-5
              text-[11px]
              sm:text-xs
              md:text-sm
              uppercase
              tracking-[0.35em]
            "
          >
            {item.location}
          </p>

          <h2
            className="
              uppercase
              font-black
              leading-none
              max-w-7xl

              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[7rem]
              xl:text-[8rem]
            "
          >
            {item.title}
          </h2>

          <button
            className="
              mt-8
              md:mt-10

              rounded-full
              border
              border-white

              bg-white
              text-black

              px-6
              py-3

              md:px-8
              md:py-4

              text-xs
              md:text-sm

              uppercase
              tracking-[0.2em]

              transition-all
              duration-500

              hover:bg-transparent
              hover:text-white
            "
          >
            View Project
          </button>
        </div>

        {/* Mobile Category */}
        
      </div>
    ))}
  </section>

  );
}