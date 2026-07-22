"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProject() {

  const sectionRef = useRef<HTMLElement>(null);
const imageRef = useRef<HTMLDivElement>(null);
const contentRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
      end: "top 25%",
      scrub: 1,
    },
  });

  tl.from(contentRef.current, {
    y: 100,
    opacity: 0,
    ease: "power3.out",
  }).to(
    imageRef.current,
    {
      scale: 1.05,
      ease: "none",
    },
    0
  );
}, []);

  return (
    <section
  ref={sectionRef}
  id="featured"
  className="relative h-screen w-full overflow-hidden"
>

      {/* Background Image */}
      <div
  ref={imageRef}
  className="absolute inset-0"
>
  <Image
    src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784710699/pexels-pppsdavid-1654138_orqnjt.jpg"
    alt="MOSU Hero"
    fill
    priority
    className="object-cover object-center"
  />
</div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Center Content */}
      <div
  ref={contentRef}
  className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white"
>

        <p className="mb-6 text-sm uppercase tracking-[0.18em]">
          Jubaylah, Riyadh Region, Saudi Arabia
        </p>

        <h2
          className="
          text-[clamp(4rem,7vw,7rem)]
          font-black
          uppercase
          leading-none
          "
        >
          STILLSTONE
        </h2>

        <button
          className="
mt-10
rounded-full
border
border-white
bg-white
px-8
py-3
text-sm
font-medium
uppercase
tracking-[0.15em]
text-black
transition-all
duration-500
hover:scale-105
hover:bg-transparent
hover:text-white
"
        >
          View Project
        </button>

      </div>

    </section>
  );
}