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
    gsap.from(".team-card", {
      y: 120,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: section.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section
      ref={section}
      className="bg-[#f4f4f4] py-36"
    >
      <div className="mx-auto max-w-[1600px] px-12">

        <p className="mb-4 text-center uppercase tracking-[0.3em] text-neutral-500">
          Our Team
        </p>

        <h2 className="mb-20 text-center text-[clamp(3rem,7vw,6rem)] font-black uppercase">
          Meet The Team
        </h2>

        <div className="grid grid-cols-4 gap-8">

          {team.map((member) => (
            <div
              key={member.name}
              className="team-card group"
            >
              <div className="relative h-[520px] overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {member.name}
              </h3>

              <p className="mt-2 uppercase tracking-[0.18em] text-neutral-500">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}