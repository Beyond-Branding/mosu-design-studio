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

  /*
   * Keep hooks unconditional.
   */
  const gallery = project?.gallery?.length
    ? project.gallery
    : project
      ? [project.heroImage, project.image].filter(Boolean)
      : [];

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  /*
   * FINAL THREE IMAGES
   *
   * gallery[5] → Image 01
   * gallery[6] → Image 02
   * gallery[7] → Image 03
   *
   * Fallbacks are included in case a project has
   * fewer than 8 gallery images.
   */
  const threeGalleryImages = [
    gallery[5] || gallery[2] || gallery[0],
    gallery[6] || gallery[1] || gallery[0],
    gallery[7] || gallery[2] || gallery[1] || gallery[0],
  ].filter(Boolean);

  /*
   * LOCK PAGE SCROLL WHEN SLIDER IS OPEN
   */
  useEffect(() => {
    if (galleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* =================================================
            01 — HERO
        ================================================= */}

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

          <div className="absolute bottom-8 left-6 z-10 flex items-center gap-4 text-white sm:left-10 lg:left-16">

            <span className="h-px w-12 bg-white/60" />

            <span className="text-[9px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>

          </div>

        </section>


        {/* =================================================
    02 — PROJECT INFORMATION + MAP
================================================= */}

<section className="relative min-h-[390px] w-full overflow-hidden bg-black">

  {/* DESIGN STYLE */}
  <div
    className="
      absolute
      left-[2%]
      top-1/2
      z-20
      hidden
      -translate-y-1/2
      md:block
    "
  >
    <p className="text-[15px] font-medium uppercase leading-[1] tracking-[-0.03em]">
      Design Style
    </p>

    <p className="mt-1 max-w-[180px] text-[15px] font-medium uppercase leading-[1] tracking-[-0.03em]">
      {project.designStyle || "Organic Contemporary"}
    </p>
  </div>


  {/* =================================================
      LOCATION
  ================================================= */}

  <div
    className="
      absolute
      left-[18%]
      top-1/2
      z-20
      hidden
      -translate-y-1/2
      lg:block
    "
  >
    <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
      Location
    </p>

    <p className="max-w-[180px] text-[15px] font-medium uppercase leading-[1.05] tracking-[-0.03em]">
      {project.location || "Andhra Pradesh, India"}
    </p>
  </div>


  {/* =================================================
      CLOUDINARY MAP IMAGE
  ================================================= */}

  <div
    className="
      absolute
      left-1/2
      top-1/2
      z-10
      h-[320px]
      w-[500px]
      -translate-x-1/2
      -translate-y-1/2
    "
  >
    {project.mapImage && (
      <Image
        src={project.mapImage}
        alt={`${project.location || project.title} map`}
        fill
        sizes="500px"
        className="object-contain"
        priority
      />
    )}
  </div>


  {/* =================================================
      STATUS
  ================================================= */}

  <div
    className="
      absolute
      right-[20%]
      top-1/2
      z-20
      hidden
      -translate-y-1/2
      lg:block
    "
  >
    <p className="text-[15px] font-medium uppercase leading-[1.05] tracking-[-0.03em]">
      {project.status || "Completed"}
    </p>

    <p className="text-[15px] font-medium uppercase leading-[1.05] tracking-[-0.03em]">
      {project.type || "Resort"}
    </p>
  </div>


  {/* =================================================
      AREA
  ================================================= */}

  <div
    className="
      absolute
      right-[2%]
      top-1/2
      z-20
      hidden
      -translate-y-1/2
      md:block
    "
  >
    <p className="text-[15px] font-medium uppercase leading-[1] tracking-[-0.03em]">
      {project.area || "2,260 FT²"}
    </p>
  </div>


  {/* =================================================
      MOBILE INFORMATION
  ================================================= */}

  <div
    className="
      relative
      z-20
      flex
      min-h-[390px]
      flex-col
      justify-center
      gap-8
      px-6
      py-16
      lg:hidden
    "
  >
    <div>
      <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
        Design Style
      </p>

      <p className="text-[15px] font-medium uppercase leading-[1.05]">
        {project.designStyle || "Organic Contemporary"}
      </p>
    </div>

    <div>
      <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
        Location
      </p>

      <p className="max-w-[220px] text-[15px] font-medium uppercase leading-[1.05]">
        {project.location || "Andhra Pradesh, India"}
      </p>
    </div>

    <div>
      <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
        Status
      </p>

      <p className="text-[15px] font-medium uppercase leading-[1.05]">
        {project.status || "Completed"}
      </p>

      <p className="text-[15px] font-medium uppercase leading-[1.05]">
        {project.type || "Resort"}
      </p>
    </div>

    <div>
      <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/40">
        Area
      </p>

      <p className="text-[15px] font-medium uppercase leading-[1.05]">
        {project.area || "2,260 FT²"}
      </p>
    </div>
  </div>

</section>
        {/* =================================================
            03 — LONG VERTICAL IMAGE + ABOUT
        ================================================= */}

        {gallery[1] && (
          <section className="relative min-h-[180svh] w-full overflow-hidden bg-black">

            <Image
              src={gallery[1]}
              alt={`${project.title} — Interior`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70" />

            <div className="absolute inset-x-0 top-0 z-10 px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16 lg:pt-36">

              <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.25fr_0.75fr]">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                    About
                  </p>

                </div>

                <div>

                  {project.description && (
                    <p className="max-w-[1000px] text-[clamp(1.8rem,3.5vw,4rem)] font-light leading-[1.02] tracking-[-0.04em] text-white">
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


        {/* =================================================
            04 — CLICKABLE LONG IMAGE
                OPENS IMAGE SLIDER
        ================================================= */}

        {gallery.length > 0 && (
          <section
            onClick={() => {
              setActiveImage(0);
              setGalleryOpen(true);
            }}
            className="group relative min-h-[160svh] w-full cursor-pointer overflow-hidden bg-black"
          >

            <Image
              src={gallery[0]}
              alt={`${project.title} — Project Gallery`}
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 text-white sm:px-10 sm:pb-16 lg:px-16 lg:pb-24">

              <div className="flex items-end justify-between gap-8">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/55">
                    Gallery
                  </p>

                  <h2 className="mt-4 text-[clamp(3rem,7vw,8rem)] font-light uppercase leading-[0.8] tracking-[-0.07em]">
                    Explore
                    <br />
                    Project
                  </h2>

                </div>

                <div className="flex items-center gap-4 pb-2">

                  <span className="h-px w-10 bg-white/60 transition-all duration-700 group-hover:w-20" />

                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/70">
                    View Images
                  </span>

                  <span className="text-sm transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>

                </div>

              </div>

            </div>

          </section>
        )}


        {/* =================================================
            05 — FULLSCREEN IMAGE SLIDER
        ================================================= */}

        {galleryOpen && gallery.length > 0 && (
          <div className="fixed inset-0 z-[9999] bg-black">

            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              className="absolute right-6 top-6 z-50 text-[9px] uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white sm:right-10 sm:top-10"
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

            {/* PREVIOUS */}

            <button
              type="button"
              aria-label="Previous image"
              onClick={() => {
                setActiveImage((current) =>
                  current === 0 ? gallery.length - 1 : current - 1
                );
              }}
              className="absolute left-5 top-1/2 z-50 -translate-y-1/2 text-3xl font-light text-white/60 transition-all hover:-translate-x-1 hover:text-white sm:left-10"
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
              className="absolute right-5 top-1/2 z-50 -translate-y-1/2 text-3xl font-light text-white/60 transition-all hover:translate-x-1 hover:text-white sm:right-10"
            >
              →
            </button>


            {/* COUNTER */}

            <div className="absolute bottom-6 left-1/2 z-50 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/50">
              {String(activeImage + 1).padStart(2, "0")}
              {" / "}
              {String(gallery.length).padStart(2, "0")}
            </div>


            {/* THUMBNAILS */}

            {gallery.length > 1 && (
              <div className="absolute bottom-5 right-6 z-50 hidden max-w-[45vw] gap-2 overflow-x-auto sm:flex sm:right-10">

                {gallery.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative h-12 w-16 shrink-0 overflow-hidden border transition-opacity ${
                      activeImage === index
                        ? "border-white opacity-100"
                        : "border-white/20 opacity-50 hover:opacity-80"
                    }`}
                  >

                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />

                  </button>
                ))}

              </div>
            )}

          </div>
        )}


        {/* =================================================
            06 — CONCEPT
        ================================================= */}

        <section className="relative min-h-[650px] w-full overflow-hidden bg-black text-white">

          <div className="absolute left-[3.5vw] top-[10%] h-[68px] w-[68px] rounded-full border border-white/70" />

          <div className="flex min-h-[650px] w-full flex-col items-center justify-center px-6 py-24 text-center">

            <p className="mb-7 text-[13px] font-normal uppercase leading-none tracking-[-0.02em] text-white">
              Concept
            </p>

            <h2 className="max-w-[1250px] text-[clamp(2.4rem,5vw,4.8rem)] font-medium uppercase leading-[0.92] tracking-[-0.055em] text-white">
              Rooted in deep research, the design integrates spiritual
              tradition with contemporary materiality and form.
            </h2>

            <p className="mt-10 max-w-[540px] text-[11px] font-normal uppercase leading-[1.2] tracking-[-0.01em] text-white/80">
              With its minimalist geometry, natural textures, and custom
              elements, the mosque seeks to evoke timelessness, serenity,
              and inclusivity.
            </p>

          </div>

        </section>


        {/* =================================================
            07 — LONG IMAGE
                gallery[2]
================================================= */}

        {gallery[2] && (
          <section className="relative h-[220svh] min-h-[1600px] w-full overflow-hidden bg-black">

            <Image
              src={gallery[2]}
              alt={`${project.title} — Project Image`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/10" />

          </section>
        )}


        {/* =================================================
            08 — CHALLENGE IMAGE
                gallery[3]
        ================================================= */}

        {gallery[3] && (
          <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden bg-black">

            <Image
              src={gallery[3]}
              alt={`${project.title} — Challenge`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute bottom-8 left-6 z-10 sm:left-10 lg:left-16">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Challenge
              </p>

            </div>

          </section>
        )}


        {/* =================================================
            09 — CHALLENGE TEXT
        ================================================= */}

        <section className="w-full bg-black px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2">

            {/* LEFT — EMPTY */}

            <div />


            {/* RIGHT — CONTENT */}

            <div className="max-w-[850px]">

              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-light uppercase leading-[0.9] tracking-[-0.05em]">
                Challenge
              </h2>

              <p className="mt-8 max-w-[800px] text-[13px] font-light uppercase leading-[1.35] tracking-[-0.01em] text-white/70 sm:text-[15px]">
                {project.challenge ||
                  `Aligning architectural geometry with strict religious orientations without compromising aesthetic purity required exceptional precision. Material selection also posed complexity: modern finishes had to meet Islamic spiritual guidelines, such as using natural wool carpets and specific stone typologies. Additionally, sustainable solutions were tailored to local climate and religious rituals—like water-saving systems in the ablution area—balancing spiritual reverence with environmental responsibility.`}
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            10 — COMPOSITION IMAGE
                gallery[4]
        ================================================= */}

        {gallery[4] && (
          <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden bg-black">

            <Image
              src={gallery[4]}
              alt={`${project.title} — Composition`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute bottom-8 left-6 z-10 sm:left-10 lg:left-16">

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                Composition
              </p>

            </div>

          </section>
        )}


        {/* =================================================
            11 — COMPOSITION TEXT
        ================================================= */}

        <section className="relative min-h-[720px] w-full bg-black text-white">

          <div className="mx-auto grid min-h-[720px] w-full max-w-[1920px] grid-cols-1 lg:grid-cols-[1fr_1fr]">

            {/* LEFT — EMPTY */}

            <div />


            {/* RIGHT — CONTENT */}

            <div className="flex flex-col justify-center px-8 py-28 sm:px-12 lg:px-16 xl:px-24">

              <h2 className="text-[clamp(3.5rem,5.5vw,6rem)] font-light uppercase leading-[0.88] tracking-[-0.06em] text-white">
                Composition
              </h2>

              <p className="mt-14 max-w-[780px] text-[14px] font-normal uppercase leading-[1.3] tracking-[-0.015em]">
                The architectural composition is organized around a restrained
                sequence of volumes, allowing movement, light, and proportion
                to define the experience of the mosque.
              </p>

              <p className="mt-7 max-w-[780px] text-[14px] font-normal uppercase leading-[1.3] tracking-[-0.015em]">
                A clear geometric language runs throughout the project.
                Carefully controlled openings frame the surrounding landscape,
                while layered ceilings and integrated architectural elements
                introduce depth without disturbing the overall simplicity.
              </p>

              <p className="mt-7 max-w-[780px] text-[14px] font-normal uppercase leading-[1.3] tracking-[-0.015em]">
                The result is a calm and deliberate interior where traditional
                principles are interpreted through contemporary construction,
                material restraint, and precise detailing.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            12 — THREE LONG IMAGES
        ================================================= */}

        {threeGalleryImages[0] && (
          <section className="relative h-[150svh] min-h-[1000px] w-full overflow-hidden bg-black">

            <Image
              src={threeGalleryImages[0]}
              alt={`${project.title} — Gallery Image 01`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

          </section>
        )}


        {/* TINY DIVIDER */}

        <div className="h-[3px] w-full bg-white/20" />


        {threeGalleryImages[1] && (
          <section className="relative h-[150svh] min-h-[1000px] w-full overflow-hidden bg-black">

            <Image
              src={threeGalleryImages[1]}
              alt={`${project.title} — Gallery Image 02`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

          </section>
        )}


        {/* TINY DIVIDER */}

        <div className="h-[3px] w-full bg-white/20" />


        {threeGalleryImages[2] && (
          <section className="relative h-[150svh] min-h-[1000px] w-full overflow-hidden bg-black">

            <Image
              src={threeGalleryImages[2]}
              alt={`${project.title} — Gallery Image 03`}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

          </section>
        )}


        {/* =================================================
            13 — START PROJECT CTA
        ================================================= */}

        <Link
          href="/StartProject"
          className="group relative block min-h-[680px] w-full overflow-hidden bg-black text-white"
        >

          {/* BACKGROUND TYPOGRAPHY */}

         <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">

  <p
    className="
      w-full
      text-center
      whitespace-nowrap
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

         


          {/* TOP RIGHT LABEL */}

          <div
            className="
              absolute
              right-6
              top-10
              flex
              items-center
              gap-3
              sm:right-10
              lg:right-16
            "
          >

            <span className="h-px w-8 bg-white/30" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-white/45">
              New Project
            </span>

          </div>


          {/* CENTER CONTENT */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[680px]
              flex-col
              items-center
              justify-center
              px-6
              text-center
            "
          >

            <p className="mb-7 text-[9px] uppercase tracking-[0.4em] text-white/45">
              Start a conversation
            </p>

            <h2
              className="
                max-w-[850px]
                text-[clamp(3.5rem,8vw,8rem)]
                font-light
                uppercase
                leading-[0.82]
                tracking-[-0.075em]
              "
            >
              Let&apos;s
              <br />
              Create.
            </h2>

            <p
              className="
                mt-8
                max-w-[430px]
                text-[10px]
                uppercase
                leading-[1.5]
                tracking-[0.08em]
                text-white/45
              "
            >
              Have a space, idea, or vision in mind?
              <br />
              Let&apos;s turn it into something meaningful.
            </p>


            {/* BUTTON */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-4
                rounded-full
                border
                border-white/20
                px-5
                py-3
                transition-all
                duration-500
                group-hover:border-white/50
                group-hover:bg-white
                group-hover:text-black
              "
            >

              <span className="text-[9px] uppercase tracking-[0.2em]">
                Start Project
              </span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  transition-all
                  duration-500
                  group-hover:bg-black
                  group-hover:text-white
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>

            </div>

          </div>


          {/* BOTTOM LEFT */}

          <div
            className="
              absolute
              bottom-8
              left-6
              flex
              items-center
              gap-3
              sm:left-10
              lg:left-16
            "
          >

            <span className="h-px w-8 bg-white/30" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
              Your vision / Our craft
            </span>

          </div>


          {/* BOTTOM RIGHT */}

          <div
            className="
              absolute
              bottom-8
              right-6
              text-[11px]
              text-white/30
              transition-all
              duration-500
              group-hover:translate-x-2
              group-hover:text-white
              sm:right-10
              lg:right-16
            "
          >
            ↗
          </div>

        </Link>


        {/* =================================================
            14 — FOOTER
        ================================================= */}

        <Footer />

      </main>
    </>
  );
}