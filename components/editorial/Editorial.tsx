"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "WE DON'T FOLLOW TRENDS.",
  "WE CREATE THEM.",
  "EVERY PIXEL MATTERS.",
  "EVERY DETAIL COUNTS.",
  "DESIGN WITH PURPOSE.",
  "WELCOME TO MOSU.",
];

export default function Editorial() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".editorial-line");

      gsap.set(words, {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      words.forEach((word) => {
        tl.to(word, {
          opacity: 1,
          y: 0,
          duration: 0.4,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-[#F5F3EE]"
    >
      <div className="text-center">
        {lines.map((line) => (
          <h2
            key={line}
            className="editorial-line opacity-0 text-[#111] uppercase font-semibold tracking-[0.08em] leading-[1.15]"
            style={{
              fontSize: "clamp(2rem,3vw,3.4rem)",
            }}
          >
            {line}
          </h2>
        ))}
      </div>
    </section>
  );
}