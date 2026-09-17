"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    if (!section || !card) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(card, {
          rotateY: -25,
          rotateX: 8,
          scale: 0.6,
          y: 150,
          transformPerspective: 1500,
          transformOrigin: "center center",
          force3D: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=220%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Flip into position
        tl.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 1,
        });

        // Expand to fullscreen
        tl.to(
          card,
          {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            borderRadius: 0,
            ease: "power3.inOut",
            duration: 1,
          },
          ">0.2"
        );
      }, section);

      return () => {
        ctx.revert();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#242323]"
    >
      <div className="relative flex h-full items-center justify-center">

        {/* CARD */}
        <div
          ref={cardRef}
          className="
            relative
            overflow-hidden
            rounded-2xl
            shadow-2xl

            w-[300px]
            h-[460px]

            sm:w-[360px]
            sm:h-[540px]

            md:w-[420px]
            md:h-[620px]

            lg:w-[500px]
            lg:h-[640px]

            xl:w-[560px]
            xl:h-[720px]

            will-change-transform
          "
        >
          <Image
            src="https://res.cloudinary.com/i1hfhoaw/image/upload/v1789660128/title.png"
            alt="MOSU"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

          {/* Content */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              justify-end
              p-6
              sm:p-8
              lg:p-10
              text-white
            "
          >
            {/* Label */}
            <p
              className="
                mb-3
                text-[11px]
                sm:text-xs
                uppercase
                tracking-[0.35em]
                text-white/60
              "
            >
              01 — BESPOKE BY NATURE
            </p>

            {/* Heading */}
            <h2
              className="
                font-black
                uppercase
                leading-none
                text-white
                text-3xl
                sm:text-4xl
                lg:text-5xl
              "
            >
              Bespoke
              <br />
              by Nature
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                text-sm
                sm:text-base
                leading-relaxed
                text-white/75
              "
            >
              Every piece is conceived for a specific space, story and
              purpose. From art installations and mirrors to lighting,
              furniture and sculptural elements, nothing feels generic
              or off-the-shelf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
