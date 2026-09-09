"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const section = useRef<HTMLElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const element = section.current;
    const titleElement = title.current;
    const paragraphElement = paragraph.current;

    if (!element || !titleElement || !paragraphElement) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      // Initial paragraph state
      gsap.set(paragraphElement, {
        opacity: 0,
        y: 60,
      });

      // Title animation
      tl.to(titleElement, {
        scale: 0.55,
        y: -120,
        ease: "none",
      });

      // Paragraph animation
      tl.to(
        paragraphElement,
        {
          opacity: 1,
          y: 0,
          ease: "none",
        },
        "-=0.3"
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={section}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#242323]
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
{/* Overlay */}
<div className="absolute inset-0 bg-black/2" />
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
          mx-auto
          w-full
          max-w-[42rem]
          px-6
          sm:px-8
          lg:px-10
          text-center
        "
      >
        {/* Title */}
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

        {/* Paragraph */}
        <p
          ref={paragraph}
          className="
            mt-8
            w-full
            max-w-full
            text-sm
            sm:text-base
            lg:text-lg
            leading-relaxed
            text-neutral-300
            break-words
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