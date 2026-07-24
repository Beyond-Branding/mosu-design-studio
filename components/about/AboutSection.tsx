"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Fade content first
      tl.to(
        contentRef.current,
        {
          opacity: 0,
          x: -60,
          ease: "power2.out",
          duration: 0.4,
        },
        0
      );

      // Then slide panel away
      tl.to(
        panelRef.current,
        {
          xPercent: -100,
          ease: "none",
          duration: 1,
        },
        0.15
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784710319/pexels-cihan-karacayir-774859403-18889065_dwumod.jpg"
        alt="Founder"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Founder Info */}
      <div className="absolute bottom-16 right-16 z-20 text-right text-white">
        <p className="text-xs uppercase tracking-[0.4em] opacity-80">
          Founder
        </p>

        <h2 className="mt-2 text-5xl font-light">
          Your Name
        </h2>
      </div>

      {/* Sliding Panel */}
      <div
        ref={panelRef}
        className="
          absolute
          inset-y-0
          left-0
          w-[58%]
          bg-[#F6F4F1]
          flex
          items-center
          shadow-[40px_0_80px_rgba(0,0,0,.12)]
        "
      >
        <div
          ref={contentRef}
          className="max-w-[620px] ml-24"
        >
          <p className="mb-10 text-xs uppercase tracking-[0.35em] text-neutral-500">
            ABOUT MOSU
          </p>

          <div className="space-y-8 text-neutral-900">

            <p className="text-[28px] leading-[1.5]">
              Every remarkable project begins with an idea worth believing in.
            </p>

            <p className="text-[28px] leading-[1.5]">
              At MOSU, we create architecture, interiors and objects that
              balance timeless aesthetics with purposeful functionality.
            </p>

            <p className="text-[28px] leading-[1.5]">
              Every material, proportion and detail is carefully considered
              to craft spaces that feel effortless and enduring.
            </p>

            <p className="text-[28px] leading-[1.5]">
              We don't simply design spaces.
            </p>

            <p className="text-[34px] font-medium">
              We shape experiences people remember.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}