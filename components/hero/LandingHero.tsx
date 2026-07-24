"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

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

    // Dark overlay
    gsap.to(overlayRef.current, {
      opacity: 0.6,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Bottom content
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

  return () => ctx.revert();
}, []);

  return (
    <section
  ref={sectionRef}
  className="relative h-screen w-full overflow-hidden"
>

      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0">
  <Image
  src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784710057/pexels-giantasparagus-19784204_kwwzhq.jpg"
  alt="MOSU Hero"
  fill
  priority
  className="object-cover object-center"
/>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70">
  <span className="text-[11px] uppercase tracking-[0.35em]">
    Scroll
  </span>

  <div className="mt-3 h-14 w-[1px] overflow-hidden bg-white/20">
    <div className="h-full w-full animate-pulse bg-white"></div>
  </div>
</div>

      {/* Dark Overlay */}
      <div
  ref={overlayRef}
  className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55"
/>

      {/* Bottom Left */}
      <div className="absolute bottom-10 left-10 z-20 text-white uppercase">

        <p className="text-[14px] tracking-[0.15em]">
          Dog Arena
        </p>

        <p className="mt-2 text-[14px] tracking-[0.15em] text-white/70">
          Kyiv, Ukraine
        </p>

      </div>

      {/* Bottom Right */}
      <button
  className="
    absolute
    bottom-10
    right-10
    z-20
    rounded-full
    border
    border-black
    bg-white
    px-8
    py-3
    text-[13px]
    font-medium
    uppercase
    tracking-[0.15em]
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

    </section>
  );
}