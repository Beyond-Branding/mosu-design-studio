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
    if (!sectionRef.current || !cardRef.current) return;

    gsap.set(cardRef.current, {
      rotateY: -25,
      rotateX: 8,
      scale: 0.5,
      y: 150,
      transformPerspective: 1200,
      transformOrigin: "center center",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    })
      .to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        y: 0,
        ease: "none",
      })
      .to(
        cardRef.current,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          ease: "none",
        },
        ">0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#f6f6f4]"
    >
      <div className="flex h-full items-center justify-center">

        <div
          ref={cardRef}
          className="relative h-[500px] w-[340px] overflow-hidden rounded-xl shadow-2xl"
        >
          <Image
            src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784832102/pexels-chris-f-38966-14307406_dhiyte.jpg"
            alt="MOSU"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}