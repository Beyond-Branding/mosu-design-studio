"use client";

import Image from "next/image";
import { team } from "./teamData";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="bg-[#f4f4f4] py-20 md:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        <p className="mb-4 text-center text-xs sm:text-sm uppercase tracking-[0.35em] text-neutral-500">
          Our Team
        </p>

        <h2
          className="
            mb-12
            md:mb-20
            text-center
            font-black
            uppercase
            leading-none
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-[6rem]
          "
        >
          Meet The Team
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-8
          "
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card group"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-sm

                  h-[420px]
                  sm:h-[500px]
                  lg:h-[520px]
                "
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width:768px) 100vw,
                         (max-width:1024px) 50vw,
                         25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  md:text-3xl
                  font-bold
                "
              >
                {member.name}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  md:text-sm
                  uppercase
                  tracking-[0.2em]
                  text-neutral-500
                "
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}