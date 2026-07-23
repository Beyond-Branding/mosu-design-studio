"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
  title: string;
  image: string;
}

export default function Hero({ title, image }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 1.15,
        duration: 2,
        ease: "power3.out",
      });

      gsap.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.4,
        delay: 0.4,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="absolute bottom-20 left-16 z-10 max-w-5xl">
        <p className="mb-5 uppercase tracking-[0.4em] text-white/70 text-sm">
          Service
        </p>

        <h1
          ref={titleRef}
          className="text-white font-black uppercase leading-none tracking-tight
          text-[clamp(4rem,10vw,10rem)]"
        >
          {title}
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div className="mt-3 h-16 w-px bg-white/30 overflow-hidden">
          <div className="h-full w-full animate-pulse bg-white"></div>
        </div>
      </div>
    </section>
  );
}