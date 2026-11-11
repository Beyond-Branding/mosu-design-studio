
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/app/services/services";

import "@/styles/ServicesShowcase.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesShowcase() {
  const section = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = section.current;
    const pinElement = pin.current;

    if (!element || !pinElement) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =========================
      // DESKTOP ANIMATION
      // =========================

      mm.add("(min-width: 768px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".service-item");

        gsap.set(".services-wrapper", {
          opacity: 1,
          y: 0,
        });

        gsap.set(".services-button", {
          opacity: 0,
          y: 30,
        });

        gsap.set(items, {
          opacity: 0,
          y: 45,
          scale: 0.96,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: `+=${Math.max(2500, items.length * 350 + 500)}`,
            scrub: 0.6,
            pin: pinElement,
            pinSpacing: true,
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

        items.forEach((item, index) => {
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

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

 
// =========================
// MOBILE ANIMATION
// =========================

mm.add("(max-width: 767px)", () => {
  const items = gsap.utils.toArray<HTMLElement>(".service-item");

  gsap.set(".hero-words", {
    y: 0,
  });

  gsap.set(".services-wrapper", {
    y: "55vh",
    autoAlpha: 1,
  });

  gsap.set(items, {
    autoAlpha: 0,
    y: 20,
  });

  gsap.set(".services-button", {
    autoAlpha: 0,
    y: 20,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top top",
      end: `+=${Math.max(1600, items.length * 240 + 600)}`,
      scrub: 0.6,
      pin: pinElement,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // 1. WE DO moves upwards
  tl.to(".hero-words", {
    y: "-35vh",
    duration: 0.9,
    ease: "power2.inOut",
  });

  // 2. Products move into view
  tl.to(".services-wrapper", {
    y: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  // 3. Products appear one by one
  items.forEach((item) => {
    tl.to(item, {
      autoAlpha: 1,
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  });

  // 4. View all button appears last
  tl.to(".services-button", {
    autoAlpha: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
  });

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
});

    }, element);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={section}
      className="services-section bg-[#171717] text-white"
    >
      <div ref={pin} className="services-pin">

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
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}
