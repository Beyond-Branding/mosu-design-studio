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
        x: 120,
        filter: "blur(12px)",
      });

      gsap.set(items[0], {
        opacity: 1,
        x: 0,
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
          invalidateOnRefresh: true,
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      items.forEach((item, i) => {
        if (i === items.length - 1) return;

        // Current text leaves to the left
        tl.to(
          item,
          {
            x: -120,
            opacity: 0,
            filter: "blur(12px)",
            duration: 1,
            ease: "power3.inOut",
          },
          "+=0.2"
        );

        // Next text comes from the right
        tl.fromTo(
          items[i + 1],
          {
            x: 120,
            opacity: 0,
            filter: "blur(12px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.inOut",
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
      className="relative h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 lg:px-16">
        {lines.map((line) => (
          <div
            key={line}
            className="editorial-line absolute flex w-full items-center justify-center"
          >
            <h2
              className="
                max-w-[1500px]
                mx-auto
                whitespace-pre-line
                text-center
                font-grey
                uppercase
                text-white
                leading-[1]
                tracking-[-0.03em]

                text-[1.7rem]
                sm:text-[2.2rem]
                md:text-[3rem]
                lg:text-[3.7rem]
                xl:text-[4.3rem]
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