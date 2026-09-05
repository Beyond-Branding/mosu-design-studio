"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image zoom
      gsap.to(imageRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Overlay
      gsap.to(overlayRef.current, {
        opacity: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Bottom content animation
      gsap.to(contentRef.current, {
        y: -120,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    requestAnimationFrame(() => {
  ScrollTrigger.refresh();
});

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
          src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1788619173/230_uzfij5.png"
          alt="MOSU Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55"
      />

      {/* Animated Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20"
      >
        {/* Bottom Left */}
        <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 uppercase text-white">

          <p className="text-[11px] sm:text-[12px] lg:text-[14px] tracking-[0.18em]">
            76 HAZRA
          </p>

          

        </div>

        {/* Bottom Right Button */}
        
      </div>
    </section>
  );
}