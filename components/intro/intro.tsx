"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
  if (!container.current) return;

  const ctx = gsap.context(() => {
    // Fade away the hero gradient
    gsap.to("#hero-gradient", {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "40% top",
        scrub: true,
      },
    });

    // Move the white panel upward to reveal the banner
    gsap.to(".intro-panel", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    // Animate the title slightly
    gsap.fromTo(
      ".intro-title",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }
    );
  }, container);

  return () => ctx.revert();
}, []);

  return (
    <section ref={container} className="relative h-screen overflow-hidden">
      {/* Banner underneath */}
      <div className="absolute inset-0">
        <img
          src="/images/banner.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-10 left-10 text-white">
          <p className="text-sm uppercase">DOG ARENA</p>
          <p className="text-sm uppercase">KYIV, UKRAINE</p>
        </div>

        <button className="absolute bottom-10 right-10 rounded-full bg-white px-8 py-3 text-sm font-medium">
          VIEW PROJECT
        </button>
      </div>

      {/* White intro */}
      <div className="intro-panel absolute inset-0 bg-[#F6F4F1] flex items-center justify-center z-10">
        <h1 className="intro-title max-w-[1500px] px-10 text-center font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#222] text-[7vw]">
          WE DESIGN BESPOKE SOLUTIONS
          <br />
          FOR ARCHITECTURE AND INTERIOR DESIGN
        </h1>
      </div>
    </section>
  );
}