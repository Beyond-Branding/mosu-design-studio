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

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".project-slide");

      // Hide every slide except the first
      slides.forEach((slide, i) => {
        gsap.set(slide, {
          autoAlpha: i === 0 ? 1 : 0,
          scale: i === 0 ? 1 : 1.08,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${slides.length * 1000}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return;

        tl.to(slides[i - 1], {
          autoAlpha: 0,
          scale: 1.08,
          duration: 1,
        });

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
    }, sectionRef);

    return () => ctx.revert();
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
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Left Category List */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20">
            <ul className="space-y-5 uppercase tracking-[0.25em] text-sm text-white/40">
              <li className={item.title === "All Works" ? "text-white" : ""}>All Works</li>
              <li className={item.title === "Hotels & Resorts" ? "text-white" : ""}>Hotels & Resorts</li>
              <li className={item.title === "Residences" ? "text-white" : ""}>Residences</li>
              <li className={item.title === "Bespoke Art" ? "text-white" : ""}>Bespoke Art</li>
              <li className={item.title === "Wall Installations" ? "text-white" : ""}>Wall Installations</li>
              <li className={item.title === "Sculptures" ? "text-white" : ""}>Sculptures</li>
              <li className={item.title === "Custom Lighting" ? "text-white" : ""}>Custom Lighting</li>
              <li className={item.title === "Furniture" ? "text-white" : ""}>Furniture</li>
              <li className={item.title === "Doors & Partitions" ? "text-white" : ""}>Doors & Partitions</li>
              <li className={item.title === "Metal Works" ? "text-white" : ""}>Metal Works</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-8">
            <p className="mb-6 text-sm uppercase tracking-[0.35em]">
              {item.location}
            </p>

            <h2 className="text-[clamp(4rem,8vw,8rem)] font-black uppercase leading-none">
              {item.title}
            </h2>

            <button
              className="
              mt-10
              rounded-full
              border
              border-white
              bg-white
              px-8
              py-3
              text-sm
              uppercase
              tracking-[0.2em]
              text-black
              transition-all
              duration-500
              hover:bg-transparent
              hover:text-white
              "
            >
              View Project
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}