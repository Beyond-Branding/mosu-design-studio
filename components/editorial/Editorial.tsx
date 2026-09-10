"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "WE CRAFT PRODUCTS THAT TRANSFORM \n YOUR INTERIOR SPACES",
  "WE CRAFT EVERY DETAIL\nTO BELONG BEAUTIFULLY IN YOUR SPACE",
];

export default function Editorial() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".editorial-line");

      const characters = items.map((item) =>
        gsap.utils.toArray<HTMLElement>(".char", item)
      );

      /*
       * =========================
       * INITIAL STATE
       * =========================
       * Everything is completely
       * invisible when section starts.
       */

      gsap.set(items, {
        autoAlpha: 0,
      });

      gsap.set(characters.flat(), {
        opacity: 0,
        filter: "blur(8px)",
        scale: 1.02,
        y: 0,
      });

      /*
       * =========================
       * SCROLL ANIMATION
       * =========================
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          // Section starts blank
          start: "top top",

          // Gives enough scroll distance
          // for both sentences
          end: `+=${lines.length * 1200}`,

          // Keep section on screen
          pin: true,

          // Animation follows scrolling
          scrub: 1,

          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * =========================
       * FIRST SENTENCE
       * =========================
       */

      // First sentence appears
      tl.set(items[0], {
        autoAlpha: 1,
      });

      tl.to(characters[0], {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.018,
          from: "center",
        },
        ease: "power2.out",
      });

      // Hold first sentence
      tl.to({}, {
        duration: 1,
      });

      /*
       * =========================
       * FIRST SENTENCE DISAPPEARS
       * =========================
       */

      tl.to(characters[0], {
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.98,
        duration: 1,
        stagger: {
          each: 0.018,
          from: "center",
        },
        ease: "power2.inOut",
      });

      tl.set(items[0], {
        autoAlpha: 0,
      });

      /*
       * =========================
       * SECOND SENTENCE
       * =========================
       */

      tl.set(items[1], {
        autoAlpha: 1,
      });

      tl.to(characters[1], {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.018,
          from: "center",
        },
        ease: "power2.out",
      });

      // Hold second sentence
      tl.to({}, {
        duration: 1,
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
      className="
        relative
        h-screen
        overflow-hidden
        bg-[#242323]
      "
    >
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          px-6
          sm:px-10
          lg:px-16
        "
      >
        {lines.map((line) => (
          <div
            key={line}
            className="
              editorial-line
              absolute
              flex
              w-full
              items-center
              justify-center
            "
          >
            <h2
              className="
                mx-auto
                max-w-[1500px]
                text-center
                font-grey
                font-semibold
                uppercase
                leading-[1.02]
                tracking-[-0.025em]
                text-[#F2F2F2]
                text-[1.7rem]
                sm:text-[2.2rem]
                md:text-[3rem]
                lg:text-[3.7rem]
                xl:text-[4.3rem]
              "
              style={{
                wordSpacing: "0.14em",
                fontWeight: 550,
              }}
            >
              {line.split("\n").map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="whitespace-nowrap"
                >
                  {Array.from(row).map((char, charIndex) => (
                    <span
                      key={`${rowIndex}-${charIndex}`}
                      className="char inline-block"
                    >
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