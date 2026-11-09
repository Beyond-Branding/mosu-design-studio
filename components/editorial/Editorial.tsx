
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
      });

      // SHOW FIRST SENTENCE
      gsap.set(items[0], {
        autoAlpha: 1,
      });

      gsap.set(characters[0], {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      });

      // SCROLL ANIMATION
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=120%",
          scrub: 0.4,
          pin: true,
          anticipatePin: 1,
        },
      });

      // FIRST SENTENCE DISAPPEARS
      tl.to(characters[0], {
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.98,
        duration: 0.35,
        stagger: {
          each: 0.008,
          from: "center",
        },
        ease: "power2.inOut",
      });

      tl.set(items[0], {
        autoAlpha: 0,
      });

      // SECOND SENTENCE APPEARS
      tl.set(items[1], {
        autoAlpha: 1,
      });

      tl.to(characters[1], {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.4,
        stagger: {
          each: 0.008,
          from: "center",
        },
        ease: "power2.out",
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
