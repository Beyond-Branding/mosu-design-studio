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

    if (!section || !image || !panel || !founder || !director) return;

    const ctx = gsap.context(() => {
      const textElements =
        gsap.utils.toArray<HTMLElement>(".about-reveal");

      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      /*
       * ==========================================
       * INITIAL STATE
       * ==========================================
       */

      if (isMobile) {
        // Mobile:
        // Image is full screen
        gsap.set(image, {
          width: "100%",
        });

        // Dark panel covers the screen
        gsap.set(panel, {
          left: 0,
          width: "100%",
          xPercent: 0,
        });
      } else {
        // Desktop:
        // Image starts at 50%
        gsap.set(image, {
          width: "50%",
        });

        // Panel starts at 50%
        gsap.set(panel, {
          left: "50%",
          width: "50%",
          xPercent: 0,
        });
      }

      // Text hidden
      gsap.set(textElements, {
        opacity: 0,
        y: 30,
      });

      // Names hidden
      gsap.set([founder, director], {
        opacity: 0,
        y: 25,
      });

      /*
       * ==========================================
       * MAIN TIMELINE
       * ==========================================
       */

      const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: isMobile ? "+=1800" : "+=2800",
scrub: 0.8,
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
        duration: isMobile ? 2 : 2.5,
        stagger: isMobile ? 0.2 : 0.35,
        ease: "power2.out",
      });

      /*
       * ==========================================
       * 2. HOLD
       * ==========================================
       */

      tl.to({}, {
        duration: isMobile ? 1 : 2,
      });

      /*
       * ==========================================
       * 3. IMAGE EXPANDS
       * ==========================================
       */

      if (!isMobile) {
  tl.to(
    image,
    {
      width: "100%",
      duration: 3,
      ease: "power1.inOut",
    },
    "<"
  );
}

      /*
       * ==========================================
       * 4. PANEL EXITS
       * ==========================================
       */

      tl.to(
  panel,
  {
    xPercent: 100,
    duration: isMobile ? 2 : 3,
    ease: "power1.inOut",
  },
  "<"
);

      /*
       * ==========================================
       * 5. SMALL HOLD
       * ==========================================
       */

      tl.to({}, {
        duration: 0.5,
      });

      /*
       * ==========================================
       * 6. FOUNDER
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
       * 7. DIRECTOR
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
    min-h-[650px]
    w-full
    overflow-hidden
    bg-[#242323]
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
          w-full
          overflow-hidden
        "
      >
        <Image
          src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1788680982/founders_2_yr0toi.png"
          alt="MOSU Founders"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            md:object-center
          "
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* =====================================================
          NAMES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-6
          z-50
          px-5
          text-white

          sm:bottom-10
          sm:px-8

          md:bottom-12
          md:px-10

          lg:bottom-16
          lg:px-16
        "
      >
        <div
          className="
            relative
            flex
            w-full
            flex-col
            gap-5

            sm:flex-row
            sm:items-end
            sm:justify-between
            sm:gap-0
          "
        >
          {/* =================================================
              FOUNDER
          ================================================= */}

          <div
            ref={founderRef}
            className="
              text-left
              sm:absolute
              sm:bottom-0
              sm:left-0
            "
          >
            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/80

                sm:text-[9px]
                sm:tracking-[0.4em]

                lg:text-[11px]
              "
            >
              Founder & CEO
            </p>

            <h2
              className="
                mt-1
                text-2xl
                font-medium
                leading-none
                tracking-tight

                sm:mt-2
                sm:text-3xl

                md:text-4xl

                lg:text-5xl
              "
            >
              Pawan Sundriyal
            </h2>
          </div>

          {/* =================================================
              DIRECTOR
          ================================================= */}

          <div
            ref={directorRef}
            className="
              text-left
              sm:absolute
              sm:right-0
              sm:bottom-0
              sm:text-right
            "
          >
            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/80

                sm:text-[9px]
                sm:tracking-[0.4em]

                lg:text-[11px]
              "
            >
              Director & Creative Head
            </p>

            <h2
              className="
                mt-1
                text-2xl
                font-medium
                leading-none
                tracking-tight

                sm:mt-2
                sm:text-3xl

                md:text-4xl

                lg:text-5xl
              "
            >
              Shreya Chakraborty
            </h2>
          </div>
        </div>
      </div>

      {/* =====================================================
          DARK PANEL
      ===================================================== */}

     <div
  ref={panelRef}
  className="
    absolute
    inset-y-0
    left-0
    z-30
    flex
    w-full
    items-center
    bg-[#242323]
    text-white

    md:left-1/2
    md:w-1/2
  "
>
        <div
          className="
            w-full
            max-w-[760px]

            px-6

            sm:px-10

            md:px-12

            lg:px-16

            xl:px-24
          "
        >
          {/* ABOUT LABEL */}

          <p
            className="
              about-reveal
              mb-5

              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/50

              sm:mb-7
              sm:text-[10px]

              lg:text-[11px]
              lg:tracking-[0.45em]
            "
          >
            ABOUT MOSU
          </p>

          {/* CONTENT */}

          <div
            className="
              space-y-4

              sm:space-y-5

              lg:space-y-6
            "
          >
            <p
              className="
                about-reveal
                max-w-[700px]

                text-[14px]
                font-light
                leading-[1.6]

                sm:text-[16px]
                sm:leading-[1.7]

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

                text-[14px]
                font-light
                leading-[1.6]

                sm:text-[16px]
                sm:leading-[1.7]

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

                text-[14px]
                font-light
                leading-[1.6]

                sm:text-[16px]
                sm:leading-[1.7]

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
                pt-2

                text-[18px]
                font-light
                leading-[1.35]
                tracking-[-0.02em]

                sm:pt-4
                sm:text-[21px]
                sm:leading-[1.45]

                md:text-[24px]

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

            <div className="about-reveal pt-3 sm:pt-5">
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2

                  rounded-full
                  border
                  border-white

                  px-5
                  py-2.5

                  text-[9px]
                  uppercase
                  tracking-[0.2em]

                  transition-all
                  duration-500

                  hover:bg-white
                  hover:text-black

                  sm:gap-3
                  sm:px-7
                  sm:py-3.5
                  sm:text-[10px]

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
