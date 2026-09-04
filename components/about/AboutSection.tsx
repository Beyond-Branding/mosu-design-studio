"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !panelRef.current) return;

    const ctx = gsap.context(() => {
      const textElements =
        gsap.utils.toArray<HTMLElement>(".about-reveal");

      /*
       * INITIAL STATE
       * -------------------------
       * Black panel covers the ENTIRE image.
       */
      gsap.set(panelRef.current, {
        xPercent: 0,
      });

      gsap.set(textElements, {
        opacity: 0,
        y: 30,
      });

      /*
       * MAIN SCROLL TIMELINE
       */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 1.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * --------------------------------
       * 1. ABOUT CONTENT APPEARS
       * --------------------------------
       */
      tl.to(textElements, {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.35,
        ease: "power2.out",
      });

      /*
       * --------------------------------
       * 2. HOLD
       * --------------------------------
       *
       * Gives enough time to read
       * the About content.
       */
      tl.to({}, {
        duration: 2,
      });

      /*
       * --------------------------------
       * 3. BLACK PANEL MOVES RIGHT
       * --------------------------------
       *
       * 100% → completely outside
       * of the viewport.
       */
      tl.to(panelRef.current, {
        xPercent: 100,
        duration: 5,
        ease: "power1.inOut",
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* =====================================================
          FULL FOUNDERS IMAGE
          ===================================================== */}

      <Image
        src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1788445914/founders_zgwqsa.png"
        alt="MOSU Founders"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-black/10" />


      {/* =====================================================
    FOUNDERS INFORMATION
    LEFT  → Founder
    RIGHT → Director
    Behind the black panel initially
===================================================== */}

<div
  className="
    absolute
    inset-x-0
    bottom-8
    z-10

    px-6
    sm:bottom-12
    sm:px-10
    lg:bottom-16
    lg:px-16

    text-white
  "
>
  <div className="flex w-full items-end justify-between">

    {/* =========================
        LEFT — FOUNDER
    ========================= */}

    <div className="text-left">
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


    {/* =========================
        RIGHT — DIRECTOR
    ========================= */}

    <div className="text-right">
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
          BLACK SLIDER PANEL
          
          IMPORTANT:
          Starts covering 100% of the image.
      ===================================================== */}

      <div
        ref={panelRef}
        className="
          absolute
          inset-0
          z-30

          flex
          items-center

          bg-[#171717]
          text-white
        "
      >

        {/* =================================================
            ABOUT CONTENT
        ================================================= */}

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


          {/* MAIN TEXT */}

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

                pt-4

                max-w-[700px]

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