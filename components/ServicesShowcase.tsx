"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/app/services/services";

import "@/styles/ServicesShowcase.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesShowcase() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!section.current) return;

    const ctx = gsap.context(() => {
      const serviceItems = gsap.utils.toArray<HTMLElement>(
        ".service-item"
      );

      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(".services-wrapper", {
        opacity: 1,
        y: 0,
      });

      gsap.set(".services-button", {
        opacity: 0,
        y: 30,
      });

      // Hide every service initially
      gsap.set(serviceItems, {
        opacity: 0,
        y: 45,
        scale: 0.96,
      });

      /* =========================================
         MAIN SCROLL TIMELINE
      ========================================= */

      const tl = gsap.timeline({
       scrollTrigger: {
  trigger: section.current,
  start: "top top",
  end: `+=${Math.max(
    2200,
    serviceItems.length * 300 + 700
  )}`,
  scrub: 0.6,
  pin: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,
},
      });

      /* =========================================
         1. SPLIT WE / DO
      ========================================= */

      tl.to(
        ".we",
        {
          x: "-25vw",
          duration: 1.5,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        ".do",
        {
          x: "25vw",
          duration: 1.5,
          ease: "power2.inOut",
        },
        0
      );

      /* =========================================
   2. SERVICES POP UP ONE BY ONE
========================================= */

serviceItems.forEach((item, index) => {
  tl.to(
    item,
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
    },
    index === 0 ? "+=0.1" : "+=0.08"
  );
});

      /* =========================================
         3. SHOW BUTTON
      ========================================= */

      tl.to(
        ".services-button",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "+=0.3"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="services-section bg-[#171717] text-white"
    >
      {/* =========================================
          WE DO
      ========================================= */}

      <div className="hero-words">
        <h1 className="we text-white">
          WE
        </h1>

        <h1 className="do text-white">
          DO
        </h1>
      </div>

      {/* =========================================
          SERVICES
      ========================================= */}

      <div className="services-wrapper">
        <div className="services-list">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-item text-white"
            >
              {service.title}
            </Link>
          ))}
        </div>

        <Link
          href="/services"
          className="services-button text-white"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}