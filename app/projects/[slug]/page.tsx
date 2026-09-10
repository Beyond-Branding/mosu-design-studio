"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "../projects";

gsap.registerPlugin(ScrollTrigger);

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
   * ============================================================
   * GALLERY STRUCTURE
   * ============================================================
   */

  const gallery = project.gallery?.length
    ? project.gallery
    : [project.heroImage, project.image].filter(Boolean);

  const mainImage = gallery[0];
  const secondImage = gallery[1];
  const compositionImage = gallery[2];

  const gridImages = gallery.slice(3, 8).filter(Boolean);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const conceptSectionRef = useRef<HTMLElement>(null);

  /*
   * ============================================================
   * CONCEPT SCROLL ANIMATION
   * ============================================================
   */

  useLayoutEffect(() => {
    if (!conceptSectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        ".concept-editorial-line"
      );

      const characters = items.map((item) =>
        gsap.utils.toArray<HTMLElement>(".concept-char", item)
      );

      if (!items.length) return;

      /*
       * INITIAL STATE
       */

      gsap.set(items, {
        autoAlpha: 0,
      });

      gsap.set(characters.flat(), {
        opacity: 0,
        filter: "blur(8px)",
        scale: 1.02,
        y: 0,
      });

      /*
       * SCROLL ANIMATION
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: conceptSectionRef.current,

          start: "top top",

          end: `+=${items.length * 1200}`,

          pin: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
       * ========================================================
       * FIRST LINE
       * ========================================================
       */

      tl.set(items[0], {
        autoAlpha: 1,
      });

      tl.to(characters[0], {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.018,
          from: "center",
        },
        ease: "power2.out",
      });

      /*
       * HOLD
       */

      tl.to(
        {},
        {
          duration: 1,
        }
      );

      /*
       * ========================================================
       * FIRST LINE DISAPPEARS
       * ========================================================
       */

      tl.to(characters[0], {
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.98,
        duration: 1,
        stagger: {
          each: 0.018,
          from: "center",
        },
        ease: "power2.inOut",
      });

      tl.set(items[0], {
        autoAlpha: 0,
      });

      /*
       * ========================================================
       * SECOND LINE
       * ========================================================
       */

      tl.set(items[1], {
        autoAlpha: 1,
      });

      tl.to(characters[1], {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.018,
          from: "center",
        },
        ease: "power2.out",
      });

      /*
       * HOLD SECOND LINE
       */

      tl.to(
        {},
        {
          duration: 1,
        }
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, conceptSectionRef);

    return () => ctx.revert();
  }, []);

  /*
   * ============================================================
   * LOCK PAGE SCROLL WHEN FULLSCREEN GALLERY IS OPEN
   * ============================================================
   */

  useEffect(() => {
    document.body.style.overflow = galleryOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [galleryOpen]);

  /*
   * ============================================================
   * KEYBOARD CONTROLS
   * ============================================================
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

  /*
   * ============================================================
   * OPEN GALLERY
   * ============================================================
   */

  const openGallery = (index: number) => {
    setActiveImage(index);
    setGalleryOpen(true);
  };

  /*
   * ============================================================
   * CONCEPT TEXT
   * ============================================================
   */

  const conceptText =
    project.concept ||
    "ROOTED IN DEEP RESEARCH, THE DESIGN INTEGRATES TRADITION WITH CONTEMPORARY MATERIALITY AND FORM.";

  const words = conceptText.trim().split(/\s+/);

  const middle = Math.ceil(words.length / 2);

  const conceptLines = [
    words.slice(0, middle).join(" "),
    words.slice(middle).join(" "),
  ];

  return (
    <>
      <Navbar />

      {/* BACK TO PROJECTS */}

      <Link
        href="/projects"
        className="
          fixed
          left-6
          top-24
          z-[100]
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-white/25
          bg-[#242323]/70
          px-5
          py-3
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/80
          backdrop-blur-md
          transition-all
          duration-500
          hover:-translate-x-1
          hover:border-white/60
          hover:bg-white
          hover:text-black
          sm:left-10
          lg:left-16
        "
      >
        <span className="text-sm leading-none">←</span>

        <span>Back To Projects</span>
      </Link>

      <main className="bg-[#242323] text-white">
        {/* =====================================================
            01 — HERO
        ===================================================== */}

        <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#242323]">
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

        <section
          className="
            relative
            min-h-[620px]
            w-full
            overflow-hidden
            bg-[#242323]

            md:h-[390px]
            md:min-h-0
          "
        >
          {project.mapImage && (
            <div
              className="
                absolute
                left-1/2
                top-[42%]
                h-[190px]
                w-[270px]
                -translate-x-1/2
                -translate-y-1/2
                bg-[#242323]

                sm:h-[220px]
                sm:w-[320px]

                md:top-1/2
                md:h-[290px]
                md:w-[400px]
              "
            >
              <Image
                src={project.mapImage}
                alt={`${project.title} location map`}
                fill
                className="object-contain"
              />
            </div>
          )}

          <div
            className="
              absolute
              left-5
              top-[55%]
              z-10

              sm:left-8
              sm:top-[58%]

              md:left-[2%]
              md:top-1/2
              md:-translate-y-1/2
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/50

                sm:text-[10px]

                md:text-[12px]
                md:tracking-[0.3em]
              "
            >
              Design Style
            </p>

            <p
              className="
                mt-1
                text-[12px]
                font-medium
                uppercase
                tracking-[-0.03em]

                sm:text-[14px]

                md:mt-2
                md:text-[15px]
              "
            >
              {project.designStyle || "Contemporary"}
            </p>
          </div>

          <div
            className="
              absolute
              right-5
              top-[55%]
              z-10

              sm:right-8
              sm:top-[58%]

              md:right-[20%]
              md:top-1/2
              md:-translate-y-1/2
            "
          >
            <p
              className="
                text-[12px]
                font-medium
                uppercase
                leading-[1.05]
                tracking-[-0.03em]

                sm:text-[14px]

                md:text-[15px]
              "
            >
              {project.status || "COMPLETED"}
            </p>

            <p
              className="
                text-[12px]
                font-medium
                uppercase
                leading-[1.05]
                tracking-[-0.03em]

                sm:text-[14px]

                md:text-[15px]
              "
            >
              {project.type || "PROJECT"}
            </p>
          </div>

          <div
            className="
              absolute
              bottom-10
              left-5
              z-10

              sm:bottom-12
              sm:left-8

              md:bottom-auto
              md:left-auto
              md:right-[2%]
              md:top-1/2
              md:-translate-y-1/2
            "
          >
            <p
              className="
                text-[12px]
                font-medium
                uppercase

                sm:text-[14px]

                md:text-[15px]
              "
            >
              {project.area || ""}
            </p>
          </div>
        </section>

        {/* =====================================================
            03 — FIRST IMAGE
        ===================================================== */}

        {mainImage && (
          <section
            className="group relative h-[110svh] min-h-[750px] w-full cursor-pointer overflow-hidden bg-[#242323]"
            onClick={() => openGallery(0)}
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
          <section className="relative min-h-[110svh] w-full overflow-hidden bg-[#242323]">
            <Image
              src={secondImage}
              alt={`${project.title} — Image 02`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

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

<section
  ref={conceptSectionRef}
  className="
    relative
    flex
    min-h-screen
    w-full
    items-center
    justify-center
    overflow-hidden
    bg-[#242323]
  "
>
  <div
    className="
      flex
      min-h-screen
      w-full
      flex-col
      items-center
      justify-center
      px-6
      text-center
      -translate-y-[2vh]
    "
  >
    {/* LABEL */}

    <p className="mb-5 text-[11px] font-normal uppercase tracking-[0.02em] text-white/70">
      Concept
    </p>

    {/* CONCEPT TEXT */}

    <div
      className="
        relative
        w-full
        max-w-[1250px]
        min-h-[clamp(140px,16vw,220px)]
        overflow-hidden
      "
    >
      {conceptLines.map((line) => (
        <div
          key={line}
          className="
            concept-editorial-line
            absolute
            inset-0
            flex
            w-full
            items-center
            justify-center
          "
        >
          <h2
            className="
              mx-auto
              w-full
              max-w-[1250px]
              text-center
              font-semibold
              uppercase
              leading-[0.94]
              tracking-[0.015em]
              text-white
              text-[clamp(2.4rem,5vw,4.8rem)]
            "
            style={{
              fontWeight: 550,
              wordSpacing: "0.08em",
            }}
          >
            {Array.from(line).map((char, charIndex) => (
              <span
                key={`${line}-${charIndex}`}
                className="concept-char inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>
      ))}

      {/* Invisible spacer */}

      <h2
        aria-hidden="true"
        className="
          mx-auto
          w-full
          max-w-[1250px]
          invisible
          text-center
          font-semibold
          uppercase
          leading-[0.94]
          tracking-[0.015em]
          text-[clamp(2.4rem,5vw,4.8rem)]
        "
      >
        {conceptLines[0]}
      </h2>
    </div>

    {/* BRIEF */}

    {project.brief && (
      <p
        className="
          mt-5
          max-w-[650px]
          text-center
          text-[10px]
          font-normal
          uppercase
          leading-[1.5]
          tracking-[0.02em]
          text-white/55
        "
      >
        {project.brief}
      </p>
    )}
  </div>
</section>
        {/* =====================================================
            06 — COMPOSITION
        ===================================================== */}

        <section className="relative min-h-[460px] w-full bg-[#242323]">
          <div className="mx-auto grid min-h-[460px] max-w-[1920px] grid-cols-1 lg:grid-cols-2">
            <div />

            <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-16 xl:px-24">
              <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-white/40">
                03 — Composition
              </p>

              <h2 className="text-[clamp(3.5rem,5.5vw,6rem)] font-light uppercase leading-[0.88] tracking-[-0.06em]">
                Composition
              </h2>

              <p className="mt-8 max-w-[780px] text-[14px] font-normal uppercase leading-[1.4] tracking-[-0.015em] text-white/80">
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
            className="group relative h-[95svh] min-h-[650px] w-full cursor-pointer overflow-hidden bg-[#242323]"
            onClick={() => openGallery(2)}
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
            08 — CHALLENGE TEXT ONLY
        ===================================================== */}

        <section className="w-full bg-[#242323] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
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
            09 — LAST 5 IMAGES / ASYMMETRIC GRID
        ===================================================== */}

        {gridImages.length > 0 && (
          <section className="w-full bg-[#242323] px-4 py-4 sm:px-6 lg:px-8">
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
              {gridImages[0] && (
                <button
                  type="button"
                  onClick={() => openGallery(3)}
                  className="
                    group
                    relative
                    min-h-[500px]
                    overflow-hidden
                    bg-[#242323]
                    lg:col-start-1
                    lg:row-start-1
                    lg:row-span-2
                    lg:min-h-0
                  "
                >
                  <Image
                    src={gridImages[0]}
                    alt={`${project.title} — Gallery 04`}
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
                    04
                  </div>
                </button>
              )}

              {gridImages[1] && (
                <button
                  type="button"
                  onClick={() => openGallery(4)}
                  className="
                    group
                    relative
                    min-h-[300px]
                    overflow-hidden
                    bg-[#242323]
                    lg:col-start-2
                    lg:row-start-1
                    lg:min-h-0
                  "
                >
                  <Image
                    src={gridImages[1]}
                    alt={`${project.title} — Gallery 05`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

                  <div className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.3em] text-white/0 transition-opacity duration-500 group-hover:text-white/70">
                    05
                  </div>
                </button>
              )}

              {gridImages[2] && (
                <button
                  type="button"
                  onClick={() => openGallery(5)}
                  className="
                    group
                    relative
                    min-h-[300px]
                    overflow-hidden
                    bg-[#242323]
                    lg:col-start-3
                    lg:row-start-1
                    lg:min-h-0
                  "
                >
                  <Image
                    src={gridImages[2]}
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

              {gridImages[3] && (
                <button
                  type="button"
                  onClick={() => openGallery(6)}
                  className="
                    group
                    relative
                    min-h-[300px]
                    overflow-hidden
                    bg-[#242323]
                    lg:col-start-2
                    lg:row-start-2
                    lg:min-h-0
                  "
                >
                  <Image
                    src={gridImages[3]}
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

              {gridImages[4] && (
                <button
                  type="button"
                  onClick={() => openGallery(7)}
                  className="
                    group
                    relative
                    min-h-[300px]
                    overflow-hidden
                    bg-[#242323]
                    lg:col-start-3
                    lg:row-start-2
                    lg:min-h-0
                  "
                >
                  <Image
                    src={gridImages[4]}
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
            </div>
          </section>
        )}

        {/* =====================================================
            10 — FULLSCREEN GALLERY
        ===================================================== */}

        {galleryOpen && gallery.length > 0 && (
          <div className="fixed inset-0 z-[9999] bg-black">
            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              className="absolute right-6 top-6 z-50 text-[9px] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white sm:right-10 sm:top-10"
            >
              Close
            </button>

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

            <div className="absolute bottom-6 left-1/2 z-50 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/50">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </div>
          </div>
        )}

        {/* =====================================================
            11 — START PROJECT
        ===================================================== */}

        <Link
          href="/contact"
          className="group relative block min-h-[680px] w-full overflow-hidden bg-[#242323] text-white"
        >
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

          <div className="absolute right-6 top-10 flex items-center gap-3 sm:right-10 lg:right-16">
            <span className="h-px w-8 bg-white/30" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-white/45">
              New Project
            </span>
          </div>

          <div className="relative z-10 flex min-h-[680px] flex-col items-center justify-center px-6 text-center">
            <p className="mb-7 text-[9px] uppercase tracking-[0.4em] text-white/45">
              Start a conversation
            </p>

            <p className="mt-8 max-w-[430px] text-[10px] uppercase leading-[1.5] tracking-[0.08em] text-white/45">
              Have a space, idea, or vision in mind?
              <br />
              Let&apos;s turn it into something meaningful.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-full border border-white/20 px-5 py-3 transition-all duration-500 group-hover:border-white/50 group-hover:bg-white group-hover:text-black">
              <span className="text-[9px] uppercase tracking-[0.2em]">
                Start Project
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
                ↗
              </span>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 flex items-center gap-3 sm:left-10 lg:left-16">
            <span className="h-px w-8 bg-white/30" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
              Your vision / Our craft
            </span>
          </div>

          <div className="absolute bottom-8 right-6 text-[11px] text-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white sm:right-10 lg:right-16">
            ↗
          </div>
        </Link>

        {/* =====================================================
            12 — FOOTER
        ===================================================== */}

        <Footer />
      </main>
    </>
  );
}