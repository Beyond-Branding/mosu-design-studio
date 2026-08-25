"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  use,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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

export default function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = use(params);

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}


/* =========================================================
   PROJECT CONTENT
========================================================= */

function ProjectContent({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const gallery = project.gallery?.length
    ? project.gallery
    : [project.heroImage, project.image];


  /* =====================================================
     GSAP
  ===================================================== */

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {

      /* =================================================
         HERO
      ================================================= */

      const heroImage =
        heroRef.current?.querySelector(
          ".hero-image"
        );

      if (heroImage) {
        gsap.fromTo(
          heroImage,
          {
            scale: 1.1,
          },
          {
            scale: 1,
            duration: 1.8,
            ease: "power3.out",
          }
        );

        gsap.to(heroImage, {
          scale: 1.06,
          yPercent: 7,
          ease: "none",

          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }


      /* =================================================
         REVEALS
      ================================================= */

      const reveals =
        gsap.utils.toArray<HTMLElement>(
          ".reveal"
        );

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });


      /* =================================================
         PROJECT TITLE
      ================================================= */

      const title =
        pageRef.current?.querySelector(
          ".project-title"
        );

      if (title) {
        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
          }
        );
      }


      /* =================================================
         META
      ================================================= */

      const metaItems =
        gsap.utils.toArray<HTMLElement>(
          ".meta-item"
        );

      gsap.fromTo(
        metaItems,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
        }
      );


      /* =================================================
         MAP
      ================================================= */

      const map =
        pageRef.current?.querySelector(
          ".india-map"
        );

      if (map) {
        gsap.fromTo(
          map,
          {
            opacity: 0,
            scale: 0.92,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",

            scrollTrigger: {
              trigger: map,
              start: "top 80%",
              once: true,
            },
          }
        );
      }


      /* =================================================
         MAP MARKERS
      ================================================= */

      const markers =
        gsap.utils.toArray<HTMLElement>(
          ".map-marker"
        );

      gsap.fromTo(
        markers,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(2)",

          scrollTrigger: {
            trigger: map,
            start: "top 75%",
            once: true,
          },
        }
      );


      /* =================================================
         PROJECT IMAGES
      ================================================= */

      const images =
        gsap.utils.toArray<HTMLElement>(
          ".project-image"
        );

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            ease: "none",

            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });


      /* =================================================
         ABOUT OVERLAY
      ================================================= */

      const about =
        pageRef.current?.querySelector(
          ".image-about"
        );

      if (about) {
        gsap.fromTo(
          about,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: about,
              start: "top 80%",
              once: true,
            },
          }
        );
      }


      ScrollTrigger.refresh();

    }, pageRef);

    return () => {
      ctx.revert();
    };

  }, []);


  return (
    <>
      <Navbar />

      <main
        ref={pageRef}
        className="
          project-page
          overflow-hidden
          bg-[#f5f5f3]
          text-[#111]
        "
      >

        {/* =================================================
            01 — HERO
        ================================================= */}

        <section
          ref={heroRef}
          className="
            relative
            h-[100svh]
            min-h-[680px]
            w-full
            overflow-hidden
            bg-black
          "
        >

          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="
              hero-image
              object-cover
              will-change-transform
            "
          />

          <div className="absolute inset-0 bg-black/10" />

          <div
            className="
              absolute
              bottom-8
              left-6
              z-10
              flex
              items-center
              gap-4
              text-white
              sm:left-10
              lg:left-16
            "
          >

            <span className="h-px w-12 bg-white/60" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
              "
            >
              Scroll to explore
            </span>

          </div>

        </section>


        {/* =================================================
            02 — PROJECT TITLE + META
        ================================================= */}

        <section
          className="
            bg-[#f5f5f3]
            px-6
            py-20
            sm:px-10
            lg:px-16
            lg:py-28
          "
        >

          <div className="mx-auto max-w-[1600px]">

            {/* LOCATION */}

            <div className="reveal mb-6">

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-black/45
                "
              >
                {project.location}
              </p>

            </div>


            {/* SMALLER TITLE */}

            <h1
              className="
                project-title
                max-w-[1100px]
                text-[clamp(3.5rem,8vw,8.5rem)]
                font-light
                uppercase
                leading-[0.8]
                tracking-[-0.075em]
              "
            >
              {project.title}
            </h1>


            {/* META */}

            <div
              className="
                mt-20
                grid
                grid-cols-2
                border-t
                border-black/15
                sm:grid-cols-3
                lg:grid-cols-6
              "
            >

              <Meta
                label="Location"
                value={project.location}
              />

              <Meta
                label="Design Style"
                value={
                  project.designStyle ||
                  "Contemporary"
                }
              />

              <Meta
                label="Coordinates"
                value={
                  project.coordinates || "—"
                }
              />

              <Meta
                label="Status"
                value={project.status}
              />

              <Meta
                label="Type"
                value={
                  project.type ||
                  project.category
                }
              />

              <Meta
                label="Area"
                value={
                  project.area ||
                  project.year ||
                  "—"
                }
              />

            </div>

          </div>

        </section>


        {/* =================================================
            03 — INDIA MAP
        ================================================= */}

        <IndiaMap />


        {/* =================================================
            04 — FIRST IMAGE + ABOUT OVERLAY
        ================================================= */}

        {gallery[1] && (

          <FullImage
            src={gallery[1]}
            alt={`${project.title} 02`}
            overlay
            title="About"
            text={project.description}
            awards={project.awards}
          />

        )}


        {/* =================================================
            05 — CONCEPT
        ================================================= */}

        {project.concept && (

          <Editorial
            number="01"
            title="Concept"
            text={project.concept}
          />

        )}


        {/* =================================================
            06 — IMAGE
        ================================================= */}

        {gallery[2] && (

          <FullImage
            src={gallery[2]}
            alt={`${project.title} 03`}
          />

        )}


        {/* =================================================
            07 — CHALLENGE
        ================================================= */}

        {project.challenge && (

          <Editorial
            number="02"
            title="Challenge"
            text={project.challenge}
          />

        )}


        {/* =================================================
            08 — IMAGE
        ================================================= */}

        {gallery[3] && (

          <FullImage
            src={gallery[3]}
            alt={`${project.title} 04`}
          />

        )}


        {/* =================================================
            09 — COMPOSITION
        ================================================= */}

        {project.composition && (

          <Editorial
            number="03"
            title="Composition"
            text={project.composition}
          />

        )}


        {/* =================================================
            10 — EXTRA GALLERY
        ================================================= */}

        {gallery.length > 4 && (

          <section
            className="
              bg-[#f5f5f3]
              px-6
              py-24
              sm:px-10
              lg:px-16
            "
          >

            <div className="mx-auto max-w-[1700px]">

              <div
                className="
                  mb-16
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.35em]
                    text-black/40
                  "
                >
                  Gallery
                </span>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-black/40
                  "
                >
                  {gallery.length} Images
                </span>

              </div>


              <div
                className="
                  grid
                  gap-4
                  md:grid-cols-2
                "
              >

                {gallery
                  .slice(4)
                  .map((image, index) => (

                    <div
                      key={`${image}-${index}`}
                      className="
                        project-image
                        relative
                        aspect-[4/3]
                        overflow-hidden
                        bg-black
                      "
                    >

                      <Image
                        src={image}
                        alt={`${project.title} ${
                          index + 5
                        }`}
                        fill
                        sizes="50vw"
                        className="
                          object-cover
                          will-change-transform
                          transition-transform
                          duration-700
                          hover:scale-[1.03]
                        "
                      />

                    </div>

                  ))}

              </div>

            </div>

          </section>

        )}


        {/* =================================================
            11 — START PROJECT
        ================================================= */}

        <section
          className="
            bg-[#f5f5f3]
            px-6
            py-28
            sm:px-10
            lg:px-16
            lg:py-36
          "
        >

          <div
            className="
              mx-auto
              max-w-[850px]
              text-center
            "
          >

            <span
              className="
                reveal
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-black/40
              "
            >
              Let's Talk
            </span>


            <h2
              className="
                reveal
                mx-auto
                mt-7
                max-w-[650px]
                text-[clamp(2.8rem,5vw,5rem)]
                font-light
                uppercase
                leading-[0.84]
                tracking-[-0.065em]
              "
            >
              About Your
              <br />
              Project
            </h2>


            <Link
              href="/start-project"
              className="
                reveal
                group
                mt-10
                inline-flex
                items-center
                gap-4
                border
                border-black
                px-7
                py-3.5
                text-[8px]
                uppercase
                tracking-[0.3em]
                transition-all
                duration-500
                hover:bg-black
                hover:text-white
              "
            >

              <span>
                Start a Project
              </span>

              <span
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </div>

        </section>


        {/* =================================================
            12 — EXPLORE PROJECTS
        ================================================= */}

        <section className="bg-black text-white">

          <Link
            href="/projects"
            className="
              group
              block
              px-6
              py-24
              sm:px-10
              lg:px-16
              lg:py-28
            "
          >

            <div
              className="
                mx-auto
                max-w-[900px]
                text-center
              "
            >

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-white/40
                "
              >
                Next
              </span>


              <h2
                className="
                  mt-6
                  text-[clamp(2.4rem,4.5vw,4.8rem)]
                  font-light
                  uppercase
                  leading-[0.85]
                  tracking-[-0.065em]
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              >
                Explore Our
                <br />
                Projects
              </h2>


              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >

                <span
                  className="
                    h-px
                    w-10
                    bg-white/40
                    transition-all
                    duration-700
                    group-hover:w-16
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/45
                  "
                >
                  View all
                </span>

                <span
                  className="
                    h-px
                    w-10
                    bg-white/40
                    transition-all
                    duration-700
                    group-hover:w-16
                  "
                />

              </div>

            </div>

          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   SINGLE CITY LOCATION — EDITORIAL MAP LAYOUT
========================================================= */

const studioLocation = {
  city: "Mumbai",
  country: "India",
  coordinates: "19°04'36.0\" N\n72°52'39.0\" E",
  index: "01",
};

const cityMapPath = `
  M205 25
  L240 42 L270 65 L302 86 L325 118
  L355 130 L371 157 L388 174 L400 202
  L420 222 L430 251 L452 274 L447 302
  L462 328 L450 356 L426 372 L416 398
  L395 416 L382 449 L364 470 L351 500
  L329 530 L313 559 L298 578 L282 554
  L263 537 L244 528 L227 506 L207 493
  L190 468 L177 438 L164 421 L147 407
  L132 381 L120 354 L104 338 L96 311
  L82 290 L70 263 L79 241 L95 228
  L109 211 L122 192 L116 175 L98 161
  L87 142 L98 124 L122 117 L143 103
  L158 82 L174 69 L185 48 Z
`;

function IndiaMap() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="
        relative overflow-hidden
        bg-[#f5f5f3]
        px-6 py-16
        sm:px-10
        lg:px-16 lg:py-20
      "
    >
      <div className="relative mx-auto max-w-[1500px]">

        {/* TOP LABEL */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <p className="text-[8px] uppercase tracking-[0.35em] text-black/40">
              Studio Network
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.12em]">
              {studioLocation.country}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[8px] uppercase tracking-[0.35em] text-black/40">
              Location
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.12em]">
              {studioLocation.index}
            </p>
          </div>

        </div>


        {/* SINGLE CITY MAP */}

        <div
          className="
            relative h-[420px]
            overflow-hidden
            border-y border-black/10
            sm:h-[480px]
            lg:h-[500px]
          "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >

          {/* MAP */}

          <div
            className={`
              absolute left-1/2 top-1/2
              h-[330px] w-[275px]
              -translate-x-1/2 -translate-y-1/2
              transition-transform
              duration-[1100ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              sm:h-[380px] sm:w-[315px]
              ${
                hovered
                  ? "scale-[1.08]"
                  : "scale-100"
              }
            `}
          >

            <svg
              viewBox="0 0 500 600"
              className="h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d={cityMapPath}
                stroke="rgba(0,0,0,0.68)"
                strokeWidth="1.1"
                vectorEffect="non-scaling-stroke"
              />

            </svg>


            {/* CITY POINT */}

            <span
              className={`
                absolute left-[42%] top-[58%]
                flex h-5 w-5
                -translate-x-1/2 -translate-y-1/2
                items-center justify-center
                transition-transform duration-500
                ${hovered ? "scale-125" : "scale-100"}
              `}
            >

              <span
                className="
                  absolute h-7 w-7
                  rounded-full
                  border border-black/20
                "
              />

              <span className="h-1.5 w-1.5 rounded-full bg-black" />

            </span>

          </div>


          {/* CITY INFORMATION — LIKE THE REFERENCE */}

          <div
            className="
              absolute left-[4%] top-1/2
              -translate-y-1/2
              sm:left-[7%]
            "
          >

            <p className="text-[8px] uppercase tracking-[0.18em] text-black/50">
              Studio Location
            </p>

            <p
              className={`
                mt-2 text-[11px] uppercase tracking-[0.12em]
                transition-transform duration-700
                ${
                  hovered
                    ? "translate-x-2"
                    : "translate-x-0"
                }
              `}
            >
              {studioLocation.city}
            </p>

          </div>


          {/* COUNTRY / COORDINATES */}

          <div
            className="
              absolute left-1/2 top-[58%]
              w-[180px]
              -translate-x-[15%]
              sm:w-[220px]
            "
          >

            <p className="text-[9px] uppercase tracking-[0.08em]">
              {studioLocation.city}, {studioLocation.country}
            </p>

            <p className="mt-1 whitespace-pre-line text-[8px] uppercase tracking-[0.08em] text-black/65">
              {studioLocation.coordinates}
            </p>

          </div>


          {/* RIGHT LOCATION COUNT */}

          <div
            className="
              absolute right-[4%] top-1/2
              -translate-y-1/2
              text-right
              sm:right-[7%]
            "
          >

            <p className="text-[8px] uppercase tracking-[0.25em] text-black/40">
              Locations
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.12em]">
              01 City
            </p>

          </div>


          {/* BOTTOM CITY NAME */}

          <div
            className="
              absolute bottom-5 left-1/2
              -translate-x-1/2
              text-center
            "
          >

            <p
              className={`
                text-[8px] uppercase
                tracking-[0.4em]
                transition-all duration-500
                ${
                  hovered
                    ? "text-black"
                    : "text-black/35"
                }
              `}
            >
              {studioLocation.city}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   FULL IMAGE
========================================================= */

function FullImage({
  src,
  alt,
  overlay = false,
  title,
  text,
  awards,
}: {
  src: string;
  alt: string;
  overlay?: boolean;
  title?: string;
  text?: string;
  awards?: string;
}) {
  return (
    <section
      className="
        relative
        h-[100svh]
        min-h-[650px]
        w-full
        overflow-hidden
        bg-black
      "
    >

      <div className="absolute inset-0 overflow-hidden">

        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="
            project-image
            object-cover
            will-change-transform
          "
        />

      </div>


      {/* =================================================
          IMAGE GRADIENT
      ================================================= */}

      {overlay && (

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/15
            to-transparent
          "
        />

      )}


      {/* =================================================
          ABOUT CONTENT ON IMAGE
      ================================================= */}

      {overlay && text && (

        <div
          className="
            image-about
            absolute
            bottom-10
            left-6
            right-6
            z-10
            text-white
            sm:bottom-14
            sm:left-10
            sm:right-10
            lg:bottom-20
            lg:left-16
            lg:right-16
          "
        >

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.25fr_0.75fr]
              lg:items-end
            "
          >

            {/* LABEL */}

            <div>

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-white/55
                "
              >
                {title || "About"}
              </span>

            </div>


            {/* DESCRIPTION */}

            <div>

              <p
                className="
                  max-w-[950px]
                  text-[clamp(1.6rem,3vw,3.5rem)]
                  font-light
                  leading-[1.05]
                  tracking-[-0.035em]
                "
              >
                {text}
              </p>


              {awards && (

                <p
                  className="
                    mt-7
                    max-w-[700px]
                    text-[10px]
                    leading-5
                    tracking-[0.02em]
                    text-white/55
                  "
                >
                  {awards}
                </p>

              )}

            </div>

          </div>

        </div>

      )}

    </section>
  );
}


/* =========================================================
   META
========================================================= */

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        meta-item
        border-b
        border-black/10
        py-5
        pr-5
      "
    >

      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-black/40
        "
      >
        {label}
      </p>

      <p
        className="
          mt-3
          text-[10px]
          uppercase
          leading-[1.3]
          tracking-[0.08em]
          text-black/80
        "
      >
        {value}
      </p>

    </div>
  );
}


/* =========================================================
   EDITORIAL
========================================================= */

function Editorial({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <section
      className="
        bg-[#f5f5f3]
        px-6
        py-28
        sm:px-10
        lg:px-16
        lg:py-36
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-[1500px]
          gap-12
          lg:grid-cols-[0.3fr_0.7fr]
        "
      >

        <div
          className="
            reveal
            flex
            items-start
            gap-5
          "
        >

          <span
            className="
              pt-2
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-black/35
            "
          >
            {number}
          </span>


          <h2
            className="
              text-[clamp(3rem,6vw,6.5rem)]
              font-light
              uppercase
              leading-[0.78]
              tracking-[-0.075em]
            "
          >
            {title}
          </h2>

        </div>


        <div>

          <p
            className="
              reveal
              max-w-[950px]
              text-[clamp(1.5rem,2.7vw,3rem)]
              font-light
              leading-[1.08]
              tracking-[-0.035em]
              text-black/75
            "
          >
            {text}
          </p>

        </div>

      </div>

    </section>
  );
}