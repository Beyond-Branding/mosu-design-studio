"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "./experienceData";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slides = gsap.utils.toArray<HTMLElement>(".exp-slide");

    slides.forEach((slide, index) => {
      if (index !== 0) {
        gsap.set(slide, {
          autoAlpha: 0,
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    });

    slides.forEach((slide, index) => {
      if (index === 0) return;

      tl.to(slides[index - 1], {
        autoAlpha: 0,
        duration: 1,
      });

      tl.to(
        slide,
        {
          autoAlpha: 1,
          duration: 1,
        },
        "<"
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={section}
      className="relative h-screen overflow-hidden bg-black"
    >
      {experienceData.map((item) => (
        <div
          key={item.title}
          className="exp-slide absolute inset-0"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute left-24 top-1/2 -translate-y-1/2 text-white max-w-xl">

            <h2 className="text-7xl font-black uppercase">
              {item.title}
            </h2>

            <h3 className="mt-4 text-3xl uppercase">
              {item.subtitle}
            </h3>

            <p className="mt-8 text-lg leading-8 text-neutral-300">
              {item.description}
            </p>

          </div>
        </div>
      ))}
    </section>
  );
}