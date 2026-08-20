"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    const textElements =
      gsap.utils.toArray<HTMLElement>(".about-reveal");

    // Text hidden initially
    gsap.set(textElements, {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=4500",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    /*
     * 1. TEXT APPEARS WHILE PANEL IS STATIONARY
     */
    tl.to(textElements, {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      duration: 2.5,
      stagger: 0.35,
      ease: "power2.out",
    });

    /*
     * 2. HOLD THE TEXT
     * Gives the user time to READ
     */
    tl.to({}, {
      duration: 1.5,
    });

    /*
     * 3. NOW MOVE THE BLACK PANEL
     * RIGHT → revealing the full image
     */
    tl.to(panelRef.current, {
      xPercent: 100,
      duration: 2.5,
      ease: "power1.inOut",
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);
  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* =========================
          FULL FOUNDER IMAGE
      ========================= */}
      <Image
        src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784710319/pexels-cihan-karacayir-774859403-18889065_dwumod.jpg"
        alt="Founder"
        fill
        priority
        className="object-cover"
      />

      {/* Slight image overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* =========================
          FOUNDER
      ========================= */}
      <div
        className="
          absolute
          bottom-6
          right-6
          sm:bottom-10
          sm:right-10
          lg:bottom-16
          lg:right-16
          z-10
          text-right
          text-white
        "
      >
        <p
          className="
            text-[9px]
            sm:text-[10px]
            lg:text-[11px]
            uppercase
            tracking-[0.45em]
            opacity-80
          "
        >
          Founder
        </p>

        <h2
          className="
            mt-2
            text-3xl
            sm:text-4xl
            lg:text-6xl
            font-extralight
            tracking-tight
          "
        >
          Your Name
        </h2>
      </div>

      {/* =========================
          RIGHT BLACK PANEL
          STARTS AT 50%
      ========================= */}
      <div
        ref={panelRef}
        className="
          absolute
          inset-y-0
          right-0
          z-20

          w-full
          lg:w-1/2

          bg-black
          text-white

          flex
          items-center
        "
      >
        <div
          ref={contentRef}
          className="
            w-full
            max-w-[520px]

            px-8
            sm:px-12
            lg:px-16
            xl:px-20

            text-white
          "
        >
          {/* =========================
              ABOUT LABEL
          ========================= */}
          <p
            className="
              about-reveal

              mb-6
              lg:mb-8

              text-[10px]
              lg:text-[11px]

              uppercase
              tracking-[0.45em]

              text-white/50
            "
          >
            ABOUT MOSU
          </p>

          {/* =========================
              TEXT
          ========================= */}
          <div className="space-y-5 lg:space-y-6">

            <p
              className="
                about-reveal

                text-[15px]
                lg:text-[17px]

                font-light

                leading-7
                lg:leading-[1.9]
              "
            >
              Every remarkable project begins with an idea worth believing in.
            </p>

            <p
              className="
                about-reveal

                text-[15px]
                lg:text-[17px]

                font-light

                leading-7
                lg:leading-[1.9]
              "
            >
              At MOSU, we create architecture, interiors and bespoke design
              that balances timeless aesthetics with purposeful functionality.
            </p>

            <p
              className="
                about-reveal

                text-[15px]
                lg:text-[17px]

                font-light

                leading-7
                lg:leading-[1.9]
              "
            >
              Every proportion, material and detail is carefully considered to
              shape spaces that feel calm, elegant and enduring.
            </p>

            <p
              className="
                about-reveal

                pt-2

                text-[18px]
                sm:text-[20px]
                lg:text-[22px]

                font-light

                leading-[1.5]

                tracking-[-0.02em]
              "
            >
              We don't simply design spaces.
              <br />

              <span className="font-medium">
                We create experiences people remember.
              </span>
            </p>

          </div>

          {/* =========================
              BUTTON
          ========================= */}
          <div className="about-reveal">
            <Link
              href="/about"
              className="
                mt-8
                lg:mt-12

                inline-flex
                items-center

                gap-2
                lg:gap-3

                rounded-full

                border
                border-white

                px-6
                py-3

                lg:px-8
                lg:py-4

                text-[10px]
                lg:text-[12px]

                uppercase
                tracking-[0.25em]

                text-white

                transition-all
                duration-500

                hover:bg-white
                hover:text-black
              "
            >
              DISCOVER MORE
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}