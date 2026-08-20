"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/app/services/services";

import "@/styles/ServicesShowcase.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesShowcase() {
  const section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!section.current) return;

    const ctx = gsap.context(() => {
      const list = document.querySelector(".services-list");

      gsap.set(".services-wrapper", {
        opacity: 0,
        y: 100,
      });

      gsap.set(".services-button", {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=3400",
          scrub: 0.85,
          pin: true,
        },
      });

      // Split WE DO
      tl.to(
        ".we",
        {
          x: "-35vw",
          duration: 1.5,
        },
        0
      );

      tl.to(
        ".do",
        {
          x: "35vw",
          duration: 1.5,
        },
        0
      );

      // Reveal services
      tl.to(
        ".services-wrapper",
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5"
      );

      // Move services list
      tl.to(list, {
        y: -340,
        ease: "none",
        duration: 6,
      });

      // Reveal button
      tl.to(".services-button", {
        opacity: 1,
        duration: 0.6,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="services-section bg-black text-white"
    >
      <div className="hero-words">
        <h1 className="we text-white">WE</h1>
        <h1 className="do text-white">DO</h1>
      </div>

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