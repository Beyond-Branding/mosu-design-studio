"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/app/services/services";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: "ALL WORKS", href: "/projects" },
  { label: "ART INSTALLATIONS", href: "/services/art-installations" },
  { label: "SCULPTURES", href: "/services/sculptures" },
  { label: "LIGHTING", href: "/services/lighting" },
  {
    label: "MIRRORS & CHANDELIERS",
    href: "/services/mirrors-chandeliers",
  },
  {
    label: "DOORS & PARTITIONS",
    href: "/services/doors-partitions",
  },
  {
    label: "METAL FINISHES",
    href: "/services/metal-finishes",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || services.length === 0) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(
        ".project-slide"
      );

      // Initial state
      slides.forEach((slide, index) => {
        gsap.set(slide, {
          autoAlpha: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 1.04,
          zIndex: services.length - index,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${services.length * 700}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      services.forEach((_, index) => {
        if (index === 0) return;

        const previousSlide = slides[index - 1];
        const currentSlide = slides[index];

        // Small pause
        tl.to({}, {
          duration: 0.3,
        });

        // Previous service fades away
        tl.to(
          previousSlide,
          {
            autoAlpha: 0,
            scale: 1.08,
            duration: 1,
            ease: "power2.inOut",
          },
          ">"
        );

        // Current service comes in
        tl.fromTo(
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
        tl.to({}, {
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
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Keeps section height */}
      <div className="h-screen" />

      {services.map((service, index) => (
        <div
          key={service.slug}
          className="project-slide absolute inset-0"
        >
          {/* =========================
              IMAGE
          ========================= */}
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />

          {/* =========================
              CATEGORY NAVIGATION
          ========================= */}
          <aside className="absolute left-12 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
            <ul className="space-y-5">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="
                      block
                      uppercase
                      text-[11px]
                      tracking-[0.3em]
                      text-white/30
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-white
                    "
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* =========================
              SERVICE CONTENT
          ========================= */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center text-white">
            <h2
              className="
                max-w-5xl
                text-[2rem]
                font-bold
                uppercase
                leading-[1]
                tracking-[-0.02em]
                sm:text-[2.7rem]
                md:text-[3.5rem]
                lg:text-[4.3rem]
                xl:text-[5rem]
              "
            >
              {service.title}
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                font-light
                leading-relaxed
                text-white/80
                sm:text-base
              "
            >
              {service.subtitle}
            </p>

            <Link
              href={`/services/${service.slug}`}
              className="
                mt-10
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
              View Product
            </Link>
          </div>

          {/* =========================
              NUMBER
          ========================= */}
          <div className="absolute bottom-10 right-10 z-30 hidden lg:block">
            <p className="text-[13px] tracking-[0.35em] text-white">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(services.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}