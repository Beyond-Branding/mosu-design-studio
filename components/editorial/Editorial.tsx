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
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".editorial-line");

      gsap.set(items, {
        opacity: 0.15,
        y: 80,
        scale: 0.95,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3500",
          pin: true,
          scrub: 1,
        },
      });

      items.forEach((item, i) => {
        tl.to(
          item,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
          },
          i
        );

        tl.to(
          item,
          {
            opacity: 0.15,
            y: -40,
            scale: 0.97,
            filter: "blur(6px)",
            duration: 0.8,
          },
          i + 0.7
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#F5F3EE]"
    >
      <div className="flex flex-col items-center gap-5">

        {lines.map((line) => (
          <h2
            key={line}
            className="editorial-line text-center font-black uppercase text-[#111]"
            style={{
              fontSize: "clamp(3rem,5vw,5.5rem)",
              lineHeight: "1",
              letterSpacing: "-0.05em",
            }}
          >
            {line}
          </h2>
        ))}

      </div>
    </section>
  );
}