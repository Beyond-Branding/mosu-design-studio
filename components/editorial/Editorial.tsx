"use client";

import { useEffect, useRef, useState } from "react";
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

  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${lines.length * 700}`,
      pin: true,
      scrub: true,

      onUpdate(self) {
        const step = Math.min(
          lines.length,
          Math.floor(self.progress * lines.length) + 1
        );

        setVisibleLines(step);
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex h-screen items-center bg-[#F5F3EE]"
    >
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-center px-8">
    <div className="flex flex-col items-center gap-6 text-center">

          {lines.map((line, index) => (
            <p
              key={index}
              className={`
                text-[#111]
font-medium
uppercase
tracking-[0.08em]
leading-[1.15]
transition-all
duration-700
                ${
                  index < visibleLines
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{
    fontSize: "clamp(2rem,3vw,3.4rem)",
              }}
            >
              {line}
            </p>
          ))}

        </div>

      </div>
    </section>
  );
}