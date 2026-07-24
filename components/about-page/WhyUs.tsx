"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(circleRef.current, {
        scale: 0,
        rotate: 180,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center bg-[#f6f6f4]"
    >
      {/* Circle */}

      <div
        ref={circleRef}
        className="absolute left-[28%] top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border-2 border-neutral-800"
      />

      {/* Content */}

      <div ref={titleRef} className="text-center">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          WHY US?
        </p>

        <h2 className="leading-none font-black uppercase text-neutral-900">

          <span className="block text-[6vw]">
            5 REASONS
          </span>

          <span className="block text-[5vw]">
            TO WORK WITH MOSU
          </span>

        </h2>

      </div>
    </section>
  );
}