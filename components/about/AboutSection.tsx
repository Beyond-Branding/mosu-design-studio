"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const founderRef = useRef<HTMLDivElement>(null);
  const directorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const panel = panelRef.current;
    const founder = founderRef.current;
    const director = directorRef.current;

    if (!section || !image || !panel || !founder || !director) {
      return;
    }

    const ctx = gsap.context(() => {
      const textElements =
        gsap.utils.toArray<HTMLElement>(".about-reveal");

      /*
       * ==========================================
       * INITIAL STATE
       * ==========================================
       */

      // Image starts on the left 50%
      gsap.set(image, {
        width: "50%",
      });

      // Dark panel starts on the right 50%
      gsap.set(panel, {
        left: "50%",
        width: "50%",
        xPercent: 0,
      });

      // About text hidden
      gsap.set(textElements, {
        opacity: 0,
        y: 30,
      });

      // BOTH NAMES HIDDEN
      gsap.set([founder, director], {
        opacity: 0,
        y: 25,
      });

      /*
       * ==========================================
       * MAIN SCROLL TIMELINE
       * ==========================================
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=5000",
          scrub: 1.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * ==========================================
       * 1. ABOUT TEXT APPEARS
       * ==========================================
       */

      tl.to(textElements, {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.35,
        ease: "power2.out",
      });

      /*
       * ==========================================
       * 2. HOLD
       * ==========================================
       */

      tl.to({}, {
        duration: 2,
      });

      /*
       * ==========================================
       * 3. IMAGE EXPANDS
       *
       * 50% → 100%
       * ==========================================
       */

      tl.to(
        image,
        {
          width: "100%",
          duration: 5,
          ease: "power1.inOut",
        },
        "<"
      );

      /*
       * ==========================================
       * 4. PANEL EXITS TO THE RIGHT
       * ==========================================
       */

      tl.to(
        panel,
        {
          xPercent: 100,
          duration: 5,
          ease: "power1.inOut",
        },
        "<"
      );

      /*
       * ==========================================
       * 5. PANEL + IMAGE ANIMATION FINISHES
       * ==========================================
       *
       * ONLY AFTER THE IMAGE IS FULL SCREEN
       * DO WE SHOW THE NAMES.
       */

      tl.to({}, {
        duration: 0.5,
      });

      /*
       * ==========================================
       * 6. REVEAL FOUNDER
       * ==========================================
       */

      tl.to(founder, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      /*
       * ==========================================
       * 7. REVEAL DIRECTOR
       * ==========================================
       */

      tl.to(
        director,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      /*
       * ==========================================
       * REFRESH
       * ==========================================
       */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* =====================================================
          IMAGE
          ===================================================== */}

      <div
        ref={imageRef}
        className="
          absolute
          inset-y-0
          left-0
          overflow-hidden
        "
      >
        <Image
          src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1788445914/founders_zgwqsa.png"
          alt="MOSU Founders"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* =====================================================
          NAMES

          HIDDEN INITIALLY.

          They only appear AFTER:
          1. Panel leaves
          2. Image becomes full screen
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-8
          z-50
          px-6
          text-white

          sm:bottom-12
          sm:px-10

          lg:bottom-16
          lg:px-16
        "
      >
        <div className="relative w-full">

          {/* =================================================
              FOUNDER — FINAL LEFT
          ================================================= */}

          <div
            ref={founderRef}
            className="
              absolute
              bottom-0
              left-0
              text-left
            "
          >
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-white/80

                sm:text-[10px]
                lg:text-[11px]
              "
            >
              Founder & CEO
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-medium
                tracking-tight

                sm:text-4xl
                lg:text-5xl
              "
            >
              Pawan Sundriyal
            </h2>
          </div>

          {/* =================================================
              DIRECTOR — FINAL RIGHT
          ================================================= */}

          <div
            ref={directorRef}
            className="
              absolute
              bottom-0
              right-0
              text-right
            "
          >
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-white/80

                sm:text-[10px]
                lg:text-[11px]
              "
            >
              Director & Creative Head
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-medium
                tracking-tight

                sm:text-4xl
                lg:text-5xl
              "
            >
              Shreya Chakraborty
            </h2>
          </div>

        </div>
      </div>

      {/* =====================================================
          RIGHT DARK PANEL
          ===================================================== */}

      <div
        ref={panelRef}
        className="
          absolute
          inset-y-0
          z-30

          flex
          items-center

          bg-[#171717]
          text-white
        "
      >
        <div
          className="
            w-full
            max-w-[760px]
            px-8

            sm:px-12

            lg:px-16

            xl:px-24
          "
        >
          {/* ABOUT LABEL */}

          <p
            className="
              about-reveal
              mb-7

              text-[10px]
              uppercase
              tracking-[0.45em]
              text-white/50

              lg:text-[11px]
            "
          >
            ABOUT MOSU
          </p>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="space-y-5 lg:space-y-6">

            <p
              className="
                about-reveal
                max-w-[700px]

                text-[16px]
                font-light
                leading-[1.7]

                lg:text-[18px]
                lg:leading-[1.8]
              "
            >
              Every remarkable project begins with an idea worth believing in.
            </p>

            <p
              className="
                about-reveal
                max-w-[700px]

                text-[16px]
                font-light
                leading-[1.7]

                lg:text-[18px]
                lg:leading-[1.8]
              "
            >
              At MOSU, we create architecture, interiors and bespoke design
              that balances timeless aesthetics with purposeful functionality.
            </p>

            <p
              className="
                about-reveal
                max-w-[700px]

                text-[16px]
                font-light
                leading-[1.7]

                lg:text-[18px]
                lg:leading-[1.8]
              "
            >
              Every proportion, material and detail is carefully considered to
              shape spaces that feel calm, elegant and enduring.
            </p>

            {/* FINAL STATEMENT */}

            <p
              className="
                about-reveal
                max-w-[700px]
                pt-4

                text-[21px]
                font-light
                leading-[1.45]
                tracking-[-0.02em]

                sm:text-[24px]

                lg:text-[28px]
              "
            >
              We don't simply design spaces.
              <br />

              <span className="font-medium">
                We create experiences people remember.
              </span>
            </p>

            {/* BUTTON */}

            <div className="about-reveal pt-5">
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3

                  rounded-full
                  border
                  border-white

                  px-7
                  py-3.5

                  text-[10px]
                  uppercase
                  tracking-[0.25em]

                  transition-all
                  duration-500

                  hover:bg-white
                  hover:text-black

                  lg:px-8
                  lg:py-4
                  lg:text-[11px]
                "
              >
                DISCOVER MORE

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

          </div>
        </div>
      </div>
    </section>
  );
}