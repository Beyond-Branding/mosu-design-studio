"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "WE CRAFT ART , LIGHTING AND OBJECTS \nTHAT TRANSFORM INTERIOR SPACES",
   "WE CRAFT EVERY DETAIL \nTO BELONG BEAUTIFULLY IN YOUR SPACE",
];

export default function Editorial() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".editorial-line");

      gsap.set(items, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        filter: "blur(8px)",
      });

      gsap.set(items[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${lines.length * 700}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      items.forEach((item, i) => {
        if (i === items.length - 1) return;

        // Current text fades away
        tl.to(item, {
          opacity: 0,
          y: -40,
          scale: 0.98,
          filter: "blur(8px)",
          duration: 1,
          ease: "power2.out",
        });

        // Next text fades in
        tl.fromTo(
          items[i + 1],
          {
            opacity: 0,
            y: 40,
            scale: 0.98,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "<"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#F5F3EE]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {lines.map((line) => (
          <div
            key={line}
            className="editorial-line absolute flex items-center justify-center px-10"
          >
            <h2
              className="text-center font-black uppercase text-[#111]"
              style={{
                fontSize: "clamp(3rem,5vw,5.5rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.05em",
              }}
            >
              {line}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}