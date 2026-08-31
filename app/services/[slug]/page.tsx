"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "../services";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const pageRef = useRef<HTMLDivElement>(null);

  const service = services.find((item) => item.slug === slug);

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".service-hero-content", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.utils.toArray(".gallery-card").forEach((card, index) => {
        gsap.from(card as HTMLElement, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: (index % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  if (!service) {
    return null;
  }

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#111111] text-[#e9e9e7]"
    >
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-black">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="service-hero-content absolute inset-x-0 bottom-[8vh] z-10 px-6">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-5 text-center text-[9px] uppercase tracking-[0.35em] text-white/60">
              {service.subtitle}
            </p>

            <h1
              className="
                text-center
                text-[12vw]
                font-medium
                uppercase
                leading-[0.8]
                tracking-[-0.075em]
                text-white
                sm:text-[10vw]
                lg:text-[8.5vw]
              "
            >
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-6 py-[14vh] sm:px-10 lg:px-16">
        
          <div>
           
          

         
        </div>
      </section>

      {/* =====================================================
          GALLERY HEADER
      ===================================================== */}

      <section className="px-6 pb-12 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1500px] items-end justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
              02 — Selected Works
            </p>

            <h2 className="mt-3 text-4xl font-medium uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              {service.title}
            </h2>
          </div>

          <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
            {service.gallery.length} Works
          </span>
        </div>
      </section>

      {/* =====================================================
          ART GRID
      ===================================================== */}

      <section className="px-6 pb-[15vh] sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.gallery.map((item, index) => (
            <article
              key={item.title}
              className={`
                gallery-card
                group
                relative
                overflow-hidden
                bg-[#1a1a1a]
                ${
                  index % 5 === 0
                    ? "lg:col-span-2 lg:row-span-2"
                    : ""
                }
                ${index % 7 === 0 ? "sm:min-h-[500px]" : ""}
              `}
            >
              <div
                className={`
                  relative
                  h-[430px]
                  overflow-hidden
                  ${
                    index % 5 === 0
                      ? "lg:h-[760px]"
                      : "lg:h-[520px]"
                  }
                `}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.06]
                  "
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-all
                    duration-700
                    group-hover:bg-black/55
                  "
                />

                {/* TOP NUMBER */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-10
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* DEFAULT TITLE */}

                <div
                  className="
                    absolute
                    inset-x-5
                    bottom-5
                    z-10
                    transition-all
                    duration-700
                    group-hover:bottom-8
                  "
                >
                  <p className="mb-2 text-[8px] uppercase tracking-[0.3em] text-white/60">
                    {item.category}
                  </p>

                  <h3
                    className="
                      text-xl
                      font-medium
                      uppercase
                      leading-none
                      tracking-[-0.045em]
                      text-white
                      sm:text-2xl
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* HOVER DESCRIPTION */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-5
                    bottom-20
                    z-10
                    max-w-[350px]
                    translate-y-5
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <p className="text-[12px] leading-[1.45] tracking-[-0.01em] text-white/75">
                    {item.description}
                  </p>
                </div>

                {/* ARROW */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-sm
                    text-white
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  ↗
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-[15vh] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
                03 — Our Process
              </p>

              <h2 className="mt-5 max-w-[400px] text-5xl font-medium uppercase leading-[0.85] tracking-[-0.065em] lg:text-7xl">
                From idea
                <br />
                to object
              </h2>
            </div>

            <div className="border-t border-white/10">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="
                    grid
                    grid-cols-[60px_1fr]
                    border-b
                    border-white/10
                    py-7
                    sm:grid-cols-[100px_1fr]
                  "
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium uppercase tracking-[-0.04em]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[12px] text-white/40">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-[15vh] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center text-center">
          <p className="mb-7 text-[8px] uppercase tracking-[0.35em] text-white/30">
            Let&apos;s Create Something
          </p>

          <h2
            className="
              max-w-[1100px]
              text-[8vw]
              font-medium
              uppercase
              leading-[0.86]
              tracking-[-0.07em]
              sm:text-6xl
              lg:text-[5.5vw]
            "
          >
            Have a space
            <br />
            that needs
            <br />
            something unique?
          </h2>

          <Link
            href="/contact"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              px-7
              py-3
              text-[9px]
              uppercase
              tracking-[0.12em]
              transition-all
              duration-500
              hover:bg-white
              hover:text-black
            "
          >
            <span>Start a Project</span>

            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}