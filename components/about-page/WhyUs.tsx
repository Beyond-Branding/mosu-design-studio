"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          y: 120,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        gsap.from(circleRef.current, {
          scale: 0,
          rotate: 180,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        items-center
        justify-center

        min-h-[70vh]
        lg:min-h-screen

        bg-[#f6f6f4]

        px-6
        sm:px-8
        lg:px-12
      "
    >
     

      {/* Content */}
      <div
        ref={titleRef}
        className="text-center"
      >
        <p
          className="
            mb-4

            text-xs
            sm:text-sm

            font-medium
            uppercase
            tracking-[0.35em]
            text-neutral-500
          "
        >
          WHY US?
        </p>

        <h2
          className="
            font-black
            uppercase
            leading-none
            text-neutral-900
          "
        >
          <span
            className="
              block

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[6vw]
            "
          >
            5 REASONS
          </span>

          <span
            className="
              mt-2
              block

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[5vw]
            "
          >
            TO WORK WITH MOSU
          </span>
        </h2>
      </div>
    </section>
  );
}