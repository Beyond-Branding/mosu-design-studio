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
import ScrollTrigger from "gsap/ScrollTrigger";

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

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      /* HERO ANIMATION */
      gsap.from(".service-hero-content", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      /* GALLERY ANIMATION */
      gsap.utils.toArray(".gallery-card").forEach((card, index) => {
        gsap.from(card as HTMLElement, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: (index % 4) * 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     SLIDER CONTROLS
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

      <section className="relative h-[82svh] min-h-[560px] w-full overflow-hidden bg-black sm:h-[88svh]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* HERO CONTENT */}
        <div className="service-hero-content absolute inset-x-0 bottom-[9vh] z-10 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1500px] text-center">

            {service.subtitle && (
              <p
                className="
                  mb-5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/70

                  sm:text-[11px]
                "
              >
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
                leading-[0.88]
                tracking-[-0.055em]
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

      <section className="px-6 py-[12vh] sm:px-10 lg:px-16">
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

      <section className="px-6 pb-10 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-[10px]">
              02 — Selected Works
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-medium
                uppercase
                leading-none
                tracking-[-0.045em]

                sm:text-4xl
                lg:text-5xl
              "
            >
              {service.title}
            </h2>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            {service.gallery.length} Works
          </span>
        </div>
      </section>
{/* =====================================================
    ART GRID — COLLAGE
===================================================== */}

<section className="px-6 pb-[15vh] sm:px-10 lg:px-16">
  <div className="mx-auto max-w-[1500px]">

    {/* ================= LARGE FIRST ROW ================= */}
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

      {service.gallery.slice(0, 2).map((item, index) => (
        <button
          key={item.title}
          type="button"
          onClick={() => openSlider(index)}
          className="
            gallery-card
            group
            relative
            block
            h-[430px]
            w-full
            overflow-hidden
            bg-[#1a1a1a]
            p-0
            text-left
            outline-none
            lg:h-[620px]
          "
        >
          {/* IMAGE */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-[1.06]
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/20
              transition-all
              duration-700
              group-hover:bg-black/60
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
              text-white/70
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

          {/* CONTENT */}
          <div
            className="
              absolute
              inset-0
              z-10
              flex
              flex-col
              items-center
              justify-center
              px-8
              text-center
            "
          >
            <p
              className="
                mb-4
                text-[9px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/70
                sm:text-[10px]
              "
            >
              {item.category}
            </p>

            <h3
              className="
                max-w-[90%]
                text-2xl
                font-semibold
                uppercase
                leading-[0.92]
                tracking-[-0.035em]
                text-white
                sm:text-3xl
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-5
                max-w-[380px]
                translate-y-4
                text-center
                text-xs
                leading-[1.55]
                text-white/75
                opacity-0
                transition-all
                duration-700
                group-hover:translate-y-0
                group-hover:opacity-100
                sm:text-sm
              "
            >
              {item.description}
            </p>

            <span
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-black
                translate-y-4
                opacity-0
                transition-all
                duration-700
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              View Image
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </button>
      ))}
    </div>

    {/* ================= NORMAL CARDS ================= */}

    <div
      className="
        mt-4
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {service.gallery.slice(2).map((item, index) => {
        const realIndex = index + 2;

        return (
          <button
            key={item.title}
            type="button"
            onClick={() => openSlider(realIndex)}
            className="
              gallery-card
              group
              relative
              block
              h-[430px]
              w-full
              overflow-hidden
              bg-[#1a1a1a]
              p-0
              text-left
              outline-none
              lg:h-[520px]
            "
          >
            {/* IMAGE */}
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

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-black/20
                transition-all
                duration-700
                group-hover:bg-black/60
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
                text-white/70
              "
            >
              {String(realIndex + 1).padStart(2, "0")}
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

            {/* CONTENT */}
            <div
              className="
                absolute
                inset-0
                z-10
                flex
                flex-col
                items-center
                justify-center
                px-8
                text-center
              "
            >
              <p
                className="
                  mb-4
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/70
                  sm:text-[10px]
                "
              >
                {item.category}
              </p>

              <h3
                className="
                  max-w-[90%]
                  text-2xl
                  font-semibold
                  uppercase
                  leading-[0.92]
                  tracking-[-0.035em]
                  text-white
                  sm:text-3xl
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  max-w-[380px]
                  translate-y-4
                  text-center
                  text-xs
                  leading-[1.55]
                  text-white/75
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  sm:text-sm
                "
              >
                {item.description}
              </p>

              <span
                className="
                  mt-6
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-black
                  translate-y-4
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                View Image
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </button>
        );
      })}
    </div>

  </div>
</section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-[13vh] sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">

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

      <section className="px-6 py-[14vh] sm:px-10 lg:px-16">
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
          FULLSCREEN IMAGE SLIDER
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
              left-4
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
          <div className="relative h-[75vh] w-[82vw] max-w-[1200px]">
            <Image
              src={service.gallery[activeImage].image}
              alt={service.gallery[activeImage].title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute
              right-4
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

          {/* IMAGE INFORMATION */}
          <div
            className="
              absolute
              bottom-6
              left-1/2
              z-30
              w-[90%]
              -translate-x-1/2
              text-center

              sm:bottom-8
            "
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/45 sm:text-[10px]">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(service.gallery.length).padStart(2, "0")}
            </p>

            <h3 className="mt-2 text-lg font-medium uppercase tracking-[-0.025em] text-white sm:text-xl">
              {service.gallery[activeImage].title}
            </h3>

            <p className="mt-1 text-xs text-white/45">
              {service.gallery[activeImage].category}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
