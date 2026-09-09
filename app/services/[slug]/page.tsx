"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "../services";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const pageRef = useRef<HTMLDivElement>(null);

  const [activeImage, setActiveImage] = useState<number | null>(null);

  const service = services.find((item) => item.slug === slug);

  /* =====================================================
     PAGE ANIMATIONS
  ===================================================== */

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      /* HERO */

      gsap.from(".service-hero-content", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      /* COLLAGE IMAGES */

      gsap.utils
        .toArray<HTMLElement>(".gallery-card")
        .forEach((card, index) => {
          gsap.from(card, {
            y: 70,
            opacity: 0,
            duration: 1,
            delay: (index % 5) * 0.05,
            ease: "power3.out",

            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          });
        });
    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  /* =====================================================
     SLIDER
  ===================================================== */

  const openSlider = (index: number) => {
    setActiveImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeSlider = () => {
    setActiveImage(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    if (!service || activeImage === null) return;

    setActiveImage(
      (activeImage + 1) % service.gallery.length
    );
  };

  const previousImage = () => {
    if (!service || activeImage === null) return;

    setActiveImage(
      (activeImage - 1 + service.gallery.length) %
        service.gallery.length
    );
  };

  /* =====================================================
     KEYBOARD CONTROLS
  ===================================================== */

  useLayoutEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeImage === null) return;

      if (event.key === "Escape") {
        closeSlider();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  /* =====================================================
     CLEANUP
  ===================================================== */

  useLayoutEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* =====================================================
     NO SERVICE
  ===================================================== */

  if (!service) {
    return null;
  }

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#242323] text-[#e9e9e7]"
    >
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[82svh] min-h-[560px] w-full overflow-hidden bg-[#242323] sm:h-[88svh]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}

        <div className="service-hero-content absolute inset-x-0 bottom-[9vh] z-10 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1500px] text-center">
            {service.subtitle && (
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 sm:text-[11px]">
                {service.subtitle}
              </p>
            )}

            <h1
              className="
                mx-auto
                max-w-[1300px]
                text-center
                text-[9vw]
                font-semibold
                uppercase
                leading-[0.92]
                tracking-[0.01em]
                text-white
                sm:text-[8vw]
                lg:text-[6.8vw]
                xl:text-[6.3vw]
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

      <section className="bg-[#242323] px-6 py-[12vh] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-[850px] text-center">
            <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-[10px]">
              01 — About The Service
            </p>

            <h2
              className="
                text-3xl
                font-medium
                uppercase
                leading-[0.95]
                tracking-[-0.045em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Creating work
              <br />
              with intention.
            </h2>

            <p className="mx-auto mt-7 max-w-[680px] text-sm leading-[1.7] text-white/55 sm:text-base">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY HEADER
      ===================================================== */}

      <section className="bg-[#242323] px-6 pb-10 sm:px-10 lg:px-16">
        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            flex-col
            gap-5
            border-b
            border-white/10
            pb-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-[10px]">
              02 — Selected Works
            </p>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            {service.gallery.length} Works
          </span>
        </div>
      </section>

      {/* =====================================================
          COLLAGE GALLERY
      ===================================================== */}

      <section className="bg-[#242323] px-4 pb-[15vh] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="
              columns-1
              gap-4
              sm:columns-2
              lg:columns-3
              xl:columns-4
              [column-fill:_balance]
            "
          >
            {service.gallery.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => openSlider(index)}
                className="
                  gallery-card
                  group
                  relative
                  mb-4
                  block
                  w-full
                  break-inside-avoid
                  overflow-hidden
                  bg-[#242323]
                  p-0
                  text-left
                  outline-none
                "
              >
                {/* IMAGE */}

                <div className="relative w-full">
                  <Image
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    width={1200}
                    height={1600}
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      (max-width: 1280px) 33vw,
                      25vw
                    "
                    className="
                      block
                      h-auto
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.045]
                    "
                  />

                  {/* HOVER OVERLAY */}

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

                  {/* NUMBER */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      z-20
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-white
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* ARROW */}

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      z-20
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      text-white
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  {/* CENTER CONTENT */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-10
                      flex
                      flex-col
                      items-center
                      justify-center
                      px-6
                      text-center
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        translate-y-5
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.3em]
                        text-white/70
                        transition-transform
                        duration-700
                        group-hover:translate-y-0
                      "
                    >
                      View Image
                    </span>

                    <span
                      className="
                        mt-4
                        flex
                        h-12
                        w-12
                        translate-y-5
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/40
                        text-white
                        transition-transform
                        duration-700
                        group-hover:translate-y-0
                      "
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="border-t border-white/10 bg-[#242323] px-6 py-[13vh] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">

            {/* TITLE */}

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-[10px]">
                03 — Our Process
              </p>

              <h2
                className="
                  mt-5
                  max-w-[500px]
                  text-4xl
                  font-medium
                  uppercase
                  leading-[0.9]
                  tracking-[0.02em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                FROM IDEA
                <br />
                TO OBJECT
              </h2>
            </div>

            {/* STEPS */}

            <div className="border-t border-white/10">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="
                    grid
                    grid-cols-[55px_1fr]
                    border-b
                    border-white/10
                    py-7
                    sm:grid-cols-[80px_1fr]
                  "
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-medium uppercase tracking-[-0.025em] sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[650px] text-sm leading-[1.6] text-white/45">
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

      <section className="bg-[#242323] px-6 py-[14vh] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center text-center">

          <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-[10px]">
            Let&apos;s Create Something
          </p>

          <h2
            className="
              max-w-[1000px]
              text-[7vw]
              font-medium
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
              sm:text-5xl
              lg:text-[5vw]
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
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              px-7
              py-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.15em]
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

      {/* =====================================================
          FULLSCREEN SLIDER
      ===================================================== */}

      {activeImage !== null && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            p-5
            sm:p-10
          "
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={closeSlider}
            aria-label="Close image viewer"
            className="
              absolute
              right-5
              top-5
              z-30
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              sm:right-8
              sm:top-8
            "
          >
            <X className="h-5 w-5" />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="
              absolute
              left-3
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              sm:left-8
            "
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* IMAGE */}

          <div className="relative h-[78vh] w-[80vw] max-w-[1300px]">
            <Image
              src={service.gallery[activeImage]}
              alt={`${service.title} ${activeImage + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* NEXT */}

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute
              right-3
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              sm:right-8
            "
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* IMAGE NUMBER */}

          <div
            className="
              absolute
              bottom-7
              left-1/2
              z-30
              -translate-x-1/2
              text-center
            "
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/50 sm:text-[10px]">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(service.gallery.length).padStart(2, "0")}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
              {service.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}