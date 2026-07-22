"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./ServicesSection.module.css";
import services from "./services";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const weRef = useRef<HTMLDivElement>(null);
  const doRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Scope only to this section
      const words = gsap.utils.toArray<HTMLElement>(
        ".service-word",
        sectionRef.current
      );

      gsap.set(weRef.current, { x: 0 });
      gsap.set(doRef.current, { x: 0 });

      gsap.set(words, {
        opacity: 0,
        y: 50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // WE & DO split
      tl.to(
        weRef.current,
        {
          x: -220,
          ease: "none",
          duration: 1,
        },
        0
      );

      tl.to(
        doRef.current,
        {
          x: 220,
          ease: "none",
          duration: 1,
        },
        0
      );

      // Reveal services one by one
      words.forEach((word) => {
        tl.to(word, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div ref={weRef} className={styles.we}>
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
        </div>

        <div ref={doRef} className={styles.do}>
          DO
        </div>
      </div>
    </section>
  );
}