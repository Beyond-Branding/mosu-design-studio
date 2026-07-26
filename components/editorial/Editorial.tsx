"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "WE CRAFT ART, LIGHTING AND OBJECTS\nTHAT TRANSFORM INTERIOR SPACES",
  "WE CRAFT EVERY DETAIL\nTO BELONG BEAUTIFULLY IN YOUR SPACE",
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

        tl.to(item, {
          opacity: 0,
          y: -40,
          scale: 0.98,
          filter: "blur(8px)",
          duration: 1,
          ease: "power2.out",
        });

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
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 lg:px-16">
        {lines.map((line) => (
          <div
            key={line}
            className="editorial-line absolute flex items-center justify-center w-full"
          >
            <h2
              className="
                whitespace-pre-line
                text-center
                font-black
                uppercase
                text-[#111]
                leading-[0.95]
                tracking-[-0.05em]
                text-[2rem]
                sm:text-[3rem]
                md:text-[4rem]
                lg:text-[5.5rem]
              "
            >
              {line}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}