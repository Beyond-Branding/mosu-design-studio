"use client";

import { useEffect, useRef } from "react";
import styles from "./ServicesSection.module.css";
import services from "./services";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".service-word");

      // Initial State
      gsap.set(leftRef.current, { xPercent: -120 });
      gsap.set(rightRef.current, { xPercent: 120 });

      gsap.set(words, {
        opacity: 0,
        y: 50,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 30,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // WE & DO
      tl.to(
        leftRef.current,
        {
          xPercent: 0,
          duration: 1,
          ease: "power3.out",
        },
        0
      );

      tl.to(
        rightRef.current,
        {
          xPercent: 0,
          duration: 1,
          ease: "power3.out",
        },
        0
      );

      // Reveal services one by one (keep previous visible)
      words.forEach((word) => {
        tl.to(word, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      // Button
      tl.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div ref={leftRef} className={styles.left}>
        WE
      </div>

      <div className={styles.center}>
        {services.map((service) => (
          <h2
            key={service}
            className={`service-word ${styles.word}`}
          >
            {service}
          </h2>
        ))}

        <button
          ref={buttonRef}
          className={styles.button}
        >
          VIEW ALL PROJECTS
        </button>
      </div>

      <div ref={rightRef} className={styles.right}>
        DO
      </div>
    </section>
  );
}