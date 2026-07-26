"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const section = useRef<HTMLElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(paragraph.current, {
          opacity: 0,
          y: 60,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
          },
        });

        tl.to(title.current, {
          scale: 0.55,
          y: -120,
          ease: "none",
        }).to(
          paragraph.current,
          {
            opacity: 1,
            y: 0,
            ease: "none",
          },
          "-=0.3"
        );
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={section}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* Left Image */}
      <div
        className="
          absolute
          inset-y-0
          left-0

          w-1/4
          lg:w-[30%]
        "
      >
        <Image
          fill
          src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784831979/pexels-zeynep-sude-emek-193601188-21897011_baqjo0.jpg"
          alt=""
          className="object-cover"
        />
      </div>

      {/* Right Image */}
      <div
        className="
          absolute
          inset-y-0
          right-0

          w-1/4
          lg:w-[30%]
        "
      >
        <Image
          fill
          src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784710319/pexels-cihan-karacayir-774859403-18889065_dwumod.jpg"
          alt=""
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div
        className="
          relative
          z-20

          flex
          min-h-screen
          flex-col
          items-center
          justify-center

          px-6
          sm:px-10
          lg:px-16

          text-center
        "
      >
        <div ref={title}>
          <h2
            className="
              font-black
              uppercase
              leading-none

              text-4xl
              sm:text-6xl
              md:text-7xl
              lg:text-[7vw]
            "
          >
            WE'RE
          </h2>

          <h1
            className="
              font-black
              uppercase
              leading-none

              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-[9vw]
            "
          >
            MOSU
          </h1>
        </div>

        <p
          ref={paragraph}
          className="
            mt-8
            max-w-xs
            sm:max-w-lg
            lg:max-w-2xl

            text-sm
            sm:text-base
            lg:text-lg

            leading-relaxed
            text-neutral-300
          "
        >
          MOSU is a globally operating architecture and design studio
          crafting luxury residential, hospitality, and commercial spaces
          with timeless design language and meticulous attention to detail.
        </p>
      </div>
    </section>
  );
}