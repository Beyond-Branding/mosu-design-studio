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
    const categoryItems = gsap.utils.toArray<HTMLElement>(
      ".service-item"
    );

    gsap.set(".services-wrapper", {
      opacity: 1,
      y: 0,
    });

    gsap.set(".services-button", {
      opacity: 0,
      y: 30,
    });

    gsap.set(categoryItems, {
      opacity: 0,
      y: 45,
      scale: 0.96,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "services-showcase-trigger",
        trigger: section.current,
        start: "top top",
        end: `+=${Math.max(
          1800,
          categoryItems.length * 400 + 700
        )}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

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

    categoryItems.forEach((item, index) => {
      tl.to(
        item,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        index === 0 ? "+=0.15" : "+=0.12"
      );
    });

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

  return () => {
    // Stop all animations belonging to this component
    ctx.revert();

    // Make absolutely sure the pinned ScrollTrigger is removed
    const trigger = ScrollTrigger.getById(
      "services-showcase-trigger"
    );

    if (trigger) {
      trigger.kill(true);
    }
  };
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