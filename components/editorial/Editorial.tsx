"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const lines = [
  "WE CRAFT PRODUCTS THAT TRANSFORM \n YOUR INTERIOR SPACES",
  "WE CRAFT EVERY DETAIL\nTO BELONG BEAUTIFULLY IN YOUR SPACE",
];

export default function Editorial() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".editorial-line");

      const characters = items.map((item) =>
        gsap.utils.toArray<HTMLElement>(".char", item)
      );

      // INITIAL STATE
      gsap.set(items, {
        autoAlpha: 0,
      });

      gsap.set(characters.flat(), {
        opacity: 0,
        filter: "blur(8px)",
        scale: 1.02,
        y: 0,
      });

      // AUTOMATIC ANIMATION
      const tl = gsap.timeline({
        repeat: -1,
      });

      lines.forEach((_, index) => {
        const currentItem = items[index];
        const currentChars = characters[index];

        // Show current sentence
        tl.set(currentItem, {
          autoAlpha: 1,
        });

        // Characters appear with blur-to-clear effect
        tl.to(currentChars, {
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

        // Keep sentence visible for a few seconds
        tl.to({}, {
          duration: 2.5,
        });

        // Characters disappear with the same blur effect
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

        // Hide current sentence before the next one
        tl.set(currentItem, {
          autoAlpha: 0,
        });
      });
    }, section);

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
        w-full
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
          px-4
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
              left-0
              right-0
              flex
              w-full
              items-center
              justify-center
              px-4
              sm:px-0
            "
          >
            <h2
              className="
                mx-auto
                w-full
                max-w-[1500px]
                text-center
                font-grey
                font-semibold
                uppercase
                leading-[1.08]
                tracking-[-0.02em]
                text-[#F2F2F2]
                text-[1.25rem]
                sm:text-[2.2rem]
                md:text-[3rem]
                lg:text-[3.7rem]
                xl:text-[4.3rem]
              "
              style={{
                fontWeight: 550,
              }}
            >
              {line.split("\n").map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-[0.22em]
                    gap-y-[0.08em]
                    whitespace-normal
                    sm:whitespace-nowrap
                  "
                >
                  {row.split(" ").map((word, wordIndex) => (
                    <span
                      key={`${rowIndex}-${wordIndex}`}
                      className="inline-flex whitespace-nowrap"
                    >
                      {Array.from(word).map((char, charIndex) => (
                        <span
                          key={`${rowIndex}-${wordIndex}-${charIndex}`}
                          className="char inline-block"
                        >
                          {char}
                        </span>
                      ))}
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