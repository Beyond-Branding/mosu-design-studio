"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      if (!sectionRef.current || !cardRef.current) return;

      gsap.set(cardRef.current, {
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
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Flip into position
      tl.to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
      });

      // Expand to fullscreen
      tl.to(
        cardRef.current,
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

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
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
            src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493728/NSP_0904_lkofdq.jpg"
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
              SINCE 2015
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
              Designing
              <br />
              Timeless Spaces
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
              MOSU is an internationally recognised architecture and
              interior design studio creating luxury residences,
              hospitality destinations and bespoke commercial spaces
              where craftsmanship, innovation and timeless elegance
              come together.
            </p>

            {/* Stats */}
            <div
              className="
                mt-8
                grid
                grid-cols-3
                gap-4
                border-t
                border-white/20
                pt-6
              "
            >
              <div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  100+
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                    sm:text-xs
                  "
                >
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  15+
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                    sm:text-xs
                  "
                >
                  Cities
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  Global
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                    sm:text-xs
                  "
                >
                  Presence
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}