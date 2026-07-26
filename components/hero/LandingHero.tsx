"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image zoom
      gsap.to(imageRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Overlay
      gsap.to(overlayRef.current, {
        opacity: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Bottom content animation
      gsap.to(contentRef.current, {
        y: -120,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    requestAnimationFrame(() => {
  ScrollTrigger.refresh();
});

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <Image
          src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784915317/pexels-samarjit-9276243_g6uc4g.jpg"
          alt="MOSU Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55"
      />

      {/* Animated Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20"
      >
        {/* Bottom Left */}
        <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 uppercase text-white">

          <p className="text-[11px] sm:text-[12px] lg:text-[14px] tracking-[0.18em]">
            Dog Arena
          </p>

          <p className="mt-2 text-[10px] sm:text-[11px] lg:text-[14px] tracking-[0.18em] text-white/70">
            Kyiv, Ukraine
          </p>

        </div>

        {/* Bottom Right Button */}
        <button
          className="
            absolute
            bottom-5
            right-5
            sm:bottom-8
            sm:right-8
            lg:bottom-10
            lg:right-10
            rounded-full
            border
            border-black
            bg-white
            px-5
            py-2.5
            sm:px-6
            sm:py-3
            lg:px-8
            lg:py-3
            text-[10px]
            sm:text-[11px]
            lg:text-[13px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-black
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            hover:border-black
          "
        >
          View Project
        </button>
      </div>
    </section>
  );
}