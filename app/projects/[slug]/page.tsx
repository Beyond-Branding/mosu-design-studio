"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "../projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = use(params);

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  /*
   * We only use the first 5 images for the main layout:
   *
   * gallery[0] → Main project image
   * gallery[1] → Second image
   * gallery[2] → Composition image
   * gallery[3] → Challenge image
   *
   * gallery[4+] → 3-column gallery
   */
  const gallery = project.gallery?.length
    ? project.gallery
    : [project.heroImage, project.image].filter(Boolean);

  const mainImage = gallery[0];
  const secondImage = gallery[1];
  const compositionImage = gallery[2];
  const challengeImage = gallery[3];

  const gridImages = [
  challengeImage,
  ...gallery.slice(4),
].filter(Boolean);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  /*
   * LOCK PAGE SCROLL WHEN GALLERY IS OPEN
   */
  useEffect(() => {
    document.body.style.overflow = galleryOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [galleryOpen]);

  /*
   * KEYBOARD CONTROLS
   */
  useEffect(() => {
    if (!galleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setGalleryOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === 0 ? gallery.length - 1 : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === gallery.length - 1 ? 0 : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen, gallery.length]);

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* =====================================================
            01 — HERO
        ===================================================== */}

        <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-black">

          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-8 left-6 z-10 flex items-center gap-4 sm:left-10 lg:left-16">

            <span className="h-px w-12 bg-white/60" />

            <span className="text-[9px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>

          </div>

        </section>


        {/* =====================================================
            02 — PROJECT INFORMATION + MAP
        ===================================================== */}

        <section className="relative h-[390px] w-full overflow-hidden bg-black">

          {/* DESIGN STYLE */}

          <div className="absolute left-[2%] top-1/2 z-10 -translate-y-1/2">

            <p className="text-[12px] uppercase tracking-[0.3em] text-white/50">
              Design Style
            </p>

            <p className="mt-2 text-[15px] font-medium uppercase tracking-[-0.03em]">
              {project.designStyle || "Contemporary"}
            </p>

          </div>


          {/* MAP */}

          {project.mapImage && (
            <div className="absolute left-1/2 top-1/2 h-[290px] w-[400px] -translate-x-1/2 -translate-y-1/2">

              <Image
                src={project.mapImage}
                alt={`${project.location} map`}
                fill
                sizes="400px"
                className="object-contain"
              />

            </div>
          )}


          {/* LOCATION */}

          <div className="absolute left-[47.5%] top-1/2 -translate-y-1/2">

          

          </div>


          {/* STATUS */}

          <div className="absolute right-[20%] top-1/2 -translate-y-1/2">

            <p className="text-[15px] font-medium uppercase leading-[1.05] tracking-[-0.03em]">
              {project.status || "COMPLETED"}
            </p>

            <p className="text-[15px] font-medium uppercase leading-[1.05] tracking-[-0.03em]">
              {project.type || "PROJECT"}
            </p>

          </div>


          {/* AREA */}

          <div className="absolute right-[2%] top-1/2 -translate-y-1/2">

            <p className="text-[15px] font-medium uppercase">
              {project.area || ""}
            </p>

          </div>

        </section>


        {/* =====================================================
            03 — FIRST IMAGE
        ===================================================== */}

        {mainImage && (
          <section
            className="group relative h-[110svh] min-h-[750px] w-full cursor-pointer overflow-hidden bg-black"
            onClick={() => {
              setActiveImage(0);
              setGalleryOpen(true);
            }}
          >

            <Image
              src={mainImage}
              alt={`${project.title} — Image 01`}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/20" />

            <div className="absolute bottom-8 left-6 z-10 sm:left-10 lg:left-16">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Image 01
              </p>

            </div>

          </section>
        )}


        {/* =====================================================
            04 — SECOND IMAGE + ABOUT
        ===================================================== */}

        {secondImage && (
          <section className="relative min-h-[110svh] w-full overflow-hidden bg-black">

            <Image
              src={secondImage}
              alt={`${project.title} — Image 02`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />


            {/* ABOUT */}

            <div className="absolute inset-x-0 top-0 z-10 px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16 lg:pt-36">

              <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.25fr_0.75fr]">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                    About
                  </p>

                </div>


                <div>

                  {project.description && (
                    <p className="max-w-[1000px] text-[clamp(1.8rem,3.5vw,4rem)] font-light leading-[1.02] tracking-[-0.04em]">
                      {project.description}
                    </p>
                  )}

                  {project.awards && (
                    <p className="mt-8 max-w-[700px] text-[10px] leading-5 tracking-[0.02em] text-white/55">
                      {project.awards}
                    </p>
                  )}

                </div>

              </div>

            </div>

          </section>
        )}


        {/* =====================================================
            05 — CONCEPT
        ===================================================== */}

        <section className="relative min-h-[650px] w-full bg-black">

          <div className="absolute left-[3.5vw] top-[10%] h-[68px] w-[68px] rounded-full border border-white/60" />

          <div className="flex min-h-[650px] flex-col items-center justify-center px-6 py-24 text-center">

            <p className="mb-7 text-[13px] uppercase tracking-[-0.02em]">
              Concept
            </p>

            <h2 className="max-w-[1250px] text-[clamp(2.4rem,5vw,4.8rem)] font-medium uppercase leading-[0.92] tracking-[-0.055em]">

              {project.concept ||
                "Rooted in deep research, the design integrates tradition with contemporary materiality and form."}

            </h2>

            {project.brief && (
              <p className="mt-10 max-w-[650px] text-[11px] uppercase leading-[1.4] tracking-[0.01em] text-white/65">
                {project.brief}
              </p>
            )}

          </div>

        </section>


        {/* =====================================================
            06 — COMPOSITION
        ===================================================== */}

        <section className="relative min-h-[720px] w-full bg-black">

          <div className="mx-auto grid min-h-[720px] max-w-[1920px] grid-cols-1 lg:grid-cols-2">

            <div />

            <div className="flex flex-col justify-center px-8 py-28 sm:px-12 lg:px-16 xl:px-24">

              <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-white/40">
                03 — Composition
              </p>

              <h2 className="text-[clamp(3.5rem,5.5vw,6rem)] font-light uppercase leading-[0.88] tracking-[-0.06em]">
                Composition
              </h2>

              <p className="mt-12 max-w-[780px] text-[14px] font-normal uppercase leading-[1.4] tracking-[-0.015em] text-white/80">

                {project.execution ||
                  "The architectural composition is organized around a restrained sequence of volumes, allowing movement, light, proportion and material to define the experience."}

              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            07 — COMPOSITION IMAGE
        ===================================================== */}

        {compositionImage && (
          <section
            className="group relative h-[95svh] min-h-[650px] w-full cursor-pointer overflow-hidden bg-black"
            onClick={() => {
              setActiveImage(2);
              setGalleryOpen(true);
            }}
          >

            <Image
              src={compositionImage}
              alt={`${project.title} — Composition`}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-8 left-6 z-10 sm:left-10 lg:left-16">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Composition
              </p>

            </div>

          </section>
        )}


        {/* =====================================================
            08 — CHALLENGE
        ===================================================== */}

        <section className="w-full bg-black px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">

          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2">

            <div />

            <div className="max-w-[850px]">

              <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-white/40">
                04 — Challenge
              </p>

              <h2 className="text-[clamp(3rem,5vw,5.5rem)] font-light uppercase leading-[0.9] tracking-[-0.05em]">
                Challenge
              </h2>

              <p className="mt-8 text-[13px] font-light uppercase leading-[1.5] text-white/70 sm:text-[15px]">

                {project.challenge ||
                  "Creating a cohesive visual identity while balancing materiality, functionality and architectural character required a precise and considered approach."}

              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            09 — CHALLENGE IMAGE
        ===================================================== */}

        {challengeImage && (
          <section
            className="group relative h-[95svh] min-h-[650px] w-full cursor-pointer overflow-hidden bg-black"
            onClick={() => {
              setActiveImage(3);
              setGalleryOpen(true);
            }}
          >

            <Image
              src={challengeImage}
              alt={`${project.title} — Challenge`}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-8 left-6 z-10 sm:left-10 lg:left-16">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Challenge
              </p>

            </div>

          </section>
        )}


               {/* =====================================================
    10 — REMAINING IMAGES / ASYMMETRIC GRID
===================================================== */}

{gridImages.length > 0 && (
  <section className="w-full bg-black px-4 py-4 sm:px-6 lg:px-8">

    <div
      className="
        grid
        grid-cols-1
        gap-4
        lg:grid-cols-3
        lg:grid-rows-2
        lg:h-[900px]
      "
    >

      {/* =================================================
          IMG 4 — LARGE LEFT
      ================================================= */}

      {gridImages[0] && (
        <button
          type="button"
          onClick={() => {
            setActiveImage(4);
            setGalleryOpen(true);
          }}
          className="
            group
            relative
            min-h-[500px]
            overflow-hidden
            bg-[#111]
            lg:col-start-1
            lg:row-start-1
            lg:row-span-2
            lg:min-h-0
          "
        >

          <Image
            src={gridImages[0]}
            alt={`${project.title} — Gallery 05`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-[1.035]
            "
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

          <div className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.3em] text-white/0 transition-opacity duration-500 group-hover:text-white/70">
            05
          </div>

        </button>
      )}


      {/* =================================================
          IMG 5 — TOP MIDDLE
      ================================================= */}

      {gridImages[1] && (
        <button
          type="button"
          onClick={() => {
            setActiveImage(5);
            setGalleryOpen(true);
          }}
          className="
            group
            relative
            min-h-[300px]
            overflow-hidden
            bg-[#111]
            lg:col-start-2
            lg:row-start-1
            lg:min-h-0
          "
        >

          <Image
            src={gridImages[1]}
            alt={`${project.title} — Gallery 06`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

          <div className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.3em] text-white/0 transition-opacity duration-500 group-hover:text-white/70">
            06
          </div>

        </button>
      )}


      {/* =================================================
          IMG 6 — TOP RIGHT
      ================================================= */}

      {gridImages[2] && (
        <button
          type="button"
          onClick={() => {
            setActiveImage(6);
            setGalleryOpen(true);
          }}
          className="
            group
            relative
            min-h-[300px]
            overflow-hidden
            bg-[#111]
            lg:col-start-3
            lg:row-start-1
            lg:min-h-0
          "
        >

          <Image
            src={gridImages[2]}
            alt={`${project.title} — Gallery 07`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

          <div className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.3em] text-white/0 transition-opacity duration-500 group-hover:text-white/70">
            07
          </div>

        </button>
      )}


      {/* =================================================
          IMG 7 — BOTTOM MIDDLE
      ================================================= */}

      {gridImages[3] && (
        <button
          type="button"
          onClick={() => {
            setActiveImage(7);
            setGalleryOpen(true);
          }}
          className="
            group
            relative
            min-h-[300px]
            overflow-hidden
            bg-[#111]
            lg:col-start-2
            lg:row-start-2
            lg:min-h-0
          "
        >

          <Image
            src={gridImages[3]}
            alt={`${project.title} — Gallery 08`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

          <div className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.3em] text-white/0 transition-opacity duration-500 group-hover:text-white/70">
            08
          </div>

        </button>
      )}

      {/* =================================================
          IMG 8 — BOTTOM RIGHT
      ================================================= */}

      {gridImages[4] && (
        <button
          type="button"
          onClick={() => {
            setActiveImage(8);
            setGalleryOpen(true);
          }}
          className="
            group
            relative
            min-h-[300px]
            overflow-hidden
            bg-[#111]
            lg:col-start-3
            lg:row-start-2
            lg:min-h-0
          "
        >

          <Image
            src={gridImages[4]}
            alt={`${project.title} — Gallery 09`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

          <div className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.3em] text-white/0 transition-opacity duration-500 group-hover:text-white/70">
            09
          </div>

        </button>
      )}

    </div>

  </section>
)}
        {/* =====================================================
            11 — FULLSCREEN GALLERY
        ===================================================== */}

        {galleryOpen && gallery.length > 0 && (
          <div className="fixed inset-0 z-[9999] bg-black">

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              className="absolute right-6 top-6 z-50 text-[9px] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white sm:right-10 sm:top-10"
            >
              Close
            </button>


            {/* IMAGE */}

            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 lg:p-16">

              <Image
                src={gallery[activeImage]}
                alt={`${project.title} — Image ${activeImage + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

            </div>


            {/* PREVIOUS */}

            <button
              type="button"
              aria-label="Previous image"
              onClick={() => {
                setActiveImage((current) =>
                  current === 0 ? gallery.length - 1 : current - 1
                );
              }}
              className="absolute left-5 top-1/2 z-50 -translate-y-1/2 text-3xl text-white/60 transition-all hover:-translate-x-1 hover:text-white sm:left-10"
            >
              ←
            </button>


            {/* NEXT */}

            <button
              type="button"
              aria-label="Next image"
              onClick={() => {
                setActiveImage((current) =>
                  current === gallery.length - 1 ? 0 : current + 1
                );
              }}
              className="absolute right-5 top-1/2 z-50 -translate-y-1/2 text-3xl text-white/60 transition-all hover:translate-x-1 hover:text-white sm:right-10"
            >
              →
            </button>


            {/* COUNTER */}

            <div className="absolute bottom-6 left-1/2 z-50 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/50">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </div>

          </div>
        )}


        {/* =====================================================
            12 — START PROJECT
        ===================================================== */}

        <Link
          href="/StartProject"
          className="group relative block min-h-[680px] w-full overflow-hidden bg-black text-white"
        >

          {/* BACKGROUND TEXT */}

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">

            <p
              className="
                w-full
                whitespace-nowrap
                text-center
                text-[clamp(6rem,17vw,20rem)]
                font-medium
                uppercase
                leading-none
                tracking-[-0.035em]
                text-white/[0.07]
                transition-transform
                duration-[1400ms]
                ease-out
                group-hover:scale-[1.02]
              "
            >
              LET&apos;S TALK
            </p>

          </div>


          {/* TOP RIGHT */}

          <div className="absolute right-6 top-10 flex items-center gap-3 sm:right-10 lg:right-16">

            <span className="h-px w-8 bg-white/30" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-white/45">
              New Project
            </span>

          </div>


          {/* CENTER */}

          <div className="relative z-10 flex min-h-[680px] flex-col items-center justify-center px-6 text-center">

            <p className="mb-7 text-[9px] uppercase tracking-[0.4em] text-white/45">
              Start a conversation
            </p>

            <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-light uppercase leading-[0.82] tracking-[-0.075em]">
              Let&apos;s
              <br />
              Create.
            </h2>

            <p className="mt-8 max-w-[430px] text-[10px] uppercase leading-[1.5] tracking-[0.08em] text-white/45">
              Have a space, idea, or vision in mind?
              <br />
              Let&apos;s turn it into something meaningful.
            </p>


            {/* BUTTON */}

            <div className="mt-10 flex items-center gap-4 rounded-full border border-white/20 px-5 py-3 transition-all duration-500 group-hover:border-white/50 group-hover:bg-white group-hover:text-black">

              <span className="text-[9px] uppercase tracking-[0.2em]">
                Start Project
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:translate-x-1">
                ↗
              </span>

            </div>

          </div>


          {/* BOTTOM LEFT */}

          <div className="absolute bottom-8 left-6 flex items-center gap-3 sm:left-10 lg:left-16">

            <span className="h-px w-8 bg-white/30" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
              Your vision / Our craft
            </span>

          </div>


          {/* BOTTOM RIGHT */}

          <div className="absolute bottom-8 right-6 text-[11px] text-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white sm:right-10 lg:right-16">
            ↗
          </div>

        </Link>


        {/* =====================================================
            13 — FOOTER
        ===================================================== */}

        <Footer />

      </main>
    </>
  );
}