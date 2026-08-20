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
    if (!section.current) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".exp-slide");

      slides.forEach((slide, index) => {
        gsap.set(slide, {
          autoAlpha: index === 0 ? 1 : 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: `+=${slides.length * 1000}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      slides.forEach((slide, index) => {
        if (index === 0) return;

        tl.to(
          slides[index - 1],
          {
            autoAlpha: 0,
            duration: 1,
          }
        );

        tl.to(
          slide,
          {
            autoAlpha: 1,
            duration: 1,
          },
          "<"
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative h-screen overflow-hidden bg-black"
    >
      {experienceData.map((item) => (
        <div
          key={item.title}
          className="exp-slide absolute inset-0 bg-black"
        >
          {/* IMAGE */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* CONTENT */}
          <div
            className="
              absolute
              z-20
              text-white

              left-6
              right-6
              bottom-12

              sm:left-10
              sm:right-10
              sm:bottom-16

              md:left-14
              md:right-20
              md:bottom-20

              lg:left-20
              lg:right-auto
              lg:top-1/2
              lg:bottom-auto
              lg:-translate-y-1/2
              lg:max-w-xl

              xl:left-24
              xl:max-w-2xl
            "
          >
            {/* TITLE */}
            <h2
              className="
                font-light
                uppercase
                leading-[0.95]
                tracking-[-0.03em]
                text-white

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              {item.title}
            </h2>

            {/* SUBTITLE */}
            <h3
              className="
                mt-3
                uppercase
                tracking-[0.2em]
                text-white/80

                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
              "
            >
              {item.subtitle}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-lg
                leading-6
                text-white/65

                text-sm
                sm:text-[15px]
                md:text-base
                md:leading-7
              "
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}