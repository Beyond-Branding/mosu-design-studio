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
        <p className="text-[11px] uppercase tracking-[0.5em] opacity-80">
          Founder
        </p>

        <h2 className="mt-2 text-6xl font-extralight tracking-tight">
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
    w-[50%]
    bg-[#F6F4F1]
    flex
    items-center
    shadow-[30px_0_60px_rgba(0,0,0,0.08)]
"
>
  <div
    ref={contentRef}
    className="w-full max-w-[520px] ml-20"
  >
    {/* Small Heading */}
    <p className="mb-8 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
      ABOUT MOSU
    </p>

    {/* Main Content */}
    <div className="space-y-6 text-[#111]">

      <p className="text-[17px] font-light leading-[1.9]">
        Every remarkable project begins with an idea worth believing in.
      </p>

      <p className="text-[17px] font-light leading-[1.9]">
        At MOSU, we create architecture, interiors and bespoke design that
        balances timeless aesthetics with purposeful functionality.
      </p>

      <p className="text-[17px] font-light leading-[1.9]">
        Every proportion, material and detail is carefully considered to
        shape spaces that feel calm, elegant and enduring.
      </p>

      <p className="pt-2 text-[22px] font-light leading-[1.5] tracking-[-0.02em]">
        We don't simply design spaces.
        <br />
        <span className="font-medium">
          We create experiences people remember.
        </span>
      </p>

    </div>

    {/* Button */}
   <Link
  href="/about"
  className="
    mt-12
    inline-flex
    w-fit
    items-center
    justify-center
    gap-3
    rounded-full
    border
    border-[#111]
    bg-transparent
    px-8
    py-4
    text-[12px]
    font-medium
    uppercase
    tracking-[0.3em]
    text-[#111]
    transition-all
    duration-500
    hover:bg-[#111]
    hover:text-white
  "
>
  DISCOVER MORE
  <span className="text-base">→</span>
</Link>
  </div>
</div>
    </section>
  );
}