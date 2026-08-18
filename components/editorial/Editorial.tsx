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

      const characters = items.map((item) =>
        gsap.utils.toArray<HTMLElement>(".char", item),
      );

      // Hide all containers
      gsap.set(items, {
        visibility: "hidden",
      });

      // Show first container
      gsap.set(items[0], {
        visibility: "visible",
      });

      // Hide all characters initially
      gsap.set(characters.flat(), {
        opacity: 0,
      });

      // First text visible
      gsap.set(characters[0], {
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${lines.length * 1500}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((_, i) => {
        if (i === items.length - 1) return;

        const currentChars = characters[i];
        const nextChars = characters[i + 1];

        /*
         * 1. CURRENT TEXT FADES OUT
         *
         * Characters disappear from RIGHT → LEFT.
         * Small stagger means multiple characters
         * are animating together in groups.
         */
        tl.to(
          currentChars,
          {
            opacity: 0,
            duration: 0.25,
            stagger: {
              each: 0.015,
              from: "end",
            },
            ease: "power2.out",
          },
          "+=0.4",
        );

        /*
         * 2. NEXT TEXT CONTAINER BECOMES VISIBLE
         *
         * Characters are still opacity: 0,
         * so nothing pops onto the screen.
         */
        tl.set(items[i + 1], {
          visibility: "visible",
        });

        /*
         * 3. NEXT TEXT FADES IN
         *
         * Starts only AFTER the previous
         * animation is completely finished.
         *
         * Characters appear LEFT → RIGHT
         * in overlapping groups.
         */
        tl.to(
          nextChars,
          {
            opacity: 1,
            duration: 0.25,
            stagger: {
              each: 0.015,
              from: "start",
            },
            ease: "power2.out",
          },
          "+=0.15",
        );

        // Hide old text after transition
        tl.set(items[i], {
          visibility: "hidden",
        });

        // Small pause before next transition
        tl.to({}, { duration: 0.5 });
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F3EE] h-screen overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center items-center px-6 sm:px-10 lg:px-16">
        {lines.map((line) => (
          <div
            key={line}
            className="absolute flex justify-center items-center w-full editorial-line"
          >
            <h2 className="mx-auto max-w-[1500px] font-grey text-[#111] text-[1.7rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.7rem] xl:text-[4.3rem] text-center uppercase leading-[1] tracking-[-0.03em]">
              {line.split("\n").map((row, rowIndex) => (
                <div key={rowIndex}>
                  {Array.from(row).map((char, charIndex) => (
                    <span key={charIndex} className="inline-block char">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              ))}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
