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
        gsap.utils.toArray<HTMLElement>(".char", item)
      );

      /* =========================================
         INITIAL STATE
      ========================================= */

      gsap.set(items, {
        visibility: "hidden",
      });

      gsap.set(items[0], {
        visibility: "visible",
      });

      gsap.set(characters.flat(), {
        opacity: 0,
        filter: "blur(0px)",
        scale: 1,
        y: 0,
      });

      gsap.set(characters[0], {
        opacity: 1,
      });

      /* =========================================
         SCROLL TIMELINE
      ========================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${lines.length * 1200}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((_, index) => {
        if (index === items.length - 1) return;

        const currentChars = characters[index];
        const nextChars = characters[index + 1];

        /* =========================================
           HOLD
        ========================================= */

        tl.to({}, {
          duration: 0.7,
        });

        /* =========================================
           ERASE CURRENT TEXT
           CENTER → OUTWARD
        ========================================= */

        tl.to(currentChars, {
          opacity: 0,
          filter: "blur(8px)",
          scale: 0.98,

          duration: 0.8,

          stagger: {
            each: 0.018,
            from: "center",
          },

          ease: "power2.inOut",
        });

        /* =========================================
           HIDE OLD LINE
        ========================================= */

        tl.set(items[index], {
          visibility: "hidden",
        });

        /* =========================================
           SHOW NEXT LINE
        ========================================= */

        tl.set(items[index + 1], {
          visibility: "visible",
        });

        /* =========================================
           RESET NEXT CHARACTERS
        ========================================= */

        tl.set(nextChars, {
          opacity: 0,
          filter: "blur(8px)",
          scale: 1.02,
        });

        /* =========================================
           REVEAL NEXT TEXT
           CENTER → OUTWARD
        ========================================= */

        tl.to(nextChars, {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,

          duration: 0.8,

          stagger: {
            each: 0.018,
            from: "center",
          },

          ease: "power2.out",
        });

        /* =========================================
           HOLD
        ========================================= */

        tl.to({}, {
          duration: 0.7,
        });
      });

      /* =========================================
         REFRESH
      ========================================= */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
        bg-[#1F1F1F]
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