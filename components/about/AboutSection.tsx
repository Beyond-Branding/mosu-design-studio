"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !panelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(panelRef.current, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
  trigger: sectionRef.current,
  start: "top 80%",
  end: "bottom top",
  scrub: 1,
},
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* ========================= */}
      {/* BACKGROUND FOUNDER IMAGE */}
      {/* ========================= */}

      <div className="absolute inset-0">
         <Image
          src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784710319/pexels-cihan-karacayir-774859403-18889065_dwumod.jpg"
          alt="MOSU Hero"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute bottom-16 left-16 text-white z-10">
          <p className="uppercase tracking-[0.35em] text-sm">
            Founder
          </p>

          <h2 className="mt-4 text-6xl font-light">
            Your Name
          </h2>
        </div>
      </div>

      {/* ========================= */}
      {/* SLIDING WHITE PAGE */}
      {/* ========================= */}

      <div
        ref={panelRef}
        className="absolute inset-0 bg-[#F5F3EE] flex items-center"
      >
        <div className="mx-auto w-full max-w-3xl px-10">

          <p className="mb-10 uppercase tracking-[0.35em] text-neutral-500 text-sm">
            ABOUT MOSU
          </p>

          <h2 className="text-[clamp(1.5rem,2vw,2.6rem)] font-light leading-[1.6] text-[#111]">

            We believe every memorable project begins with a story.

            <br />
            <br />

            MOSU was founded with one simple belief —
            design should create emotion before attention.

            <br />
            <br />

            Every interaction,
            every animation,
            every detail,
            every decision
            exists to make people
            feel something genuine.

            <br />
            <br />

            We don't create websites.

            <br />

            We create experiences that stay with people.

          </h2>

        </div>
      </div>
    </section>
  );
}