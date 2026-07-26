"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./ServicesSection.module.css";
import { services } from "@/app/services/services";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  home?: boolean;
}

export default function ServicesSection({ home = false }: Props) {
  const pathname = usePathname();

  const sectionRef = useRef<HTMLElement>(null);
  const weRef = useRef<HTMLHeadingElement>(null);
  const doRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(
        ".service-word",
        sectionRef.current
      );

      gsap.set(words, {
        opacity: 0,
        y: 30,
      });

      gsap.set([weRef.current, doRef.current], {
        x: 0,
        color: "#111",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Split WE and DO
      tl.to(
        weRef.current,
        {
          x: "-28vw",
          color: "#d5d5d5",
          ease: "none",
          duration: 1,
        },
        0
      );

      tl.to(
        doRef.current,
        {
          x: "28vw",
          color: "#d5d5d5",
          ease: "none",
          duration: 1,
        },
        0
      );

      // Reveal services
      words.forEach((word, index) => {
        tl.to(
          word,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          0.2 + index * 0.12
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{
        background: home ? "#F6F4F1" : "#fff",
      }}
    >
      <div className={styles.container}>
        <h2 ref={weRef} className={styles.we}>
          WE
        </h2>

        <div className={styles.center}>
          {services.map((service) => {
            const active = pathname === `/services/${service.slug}`;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`service-word ${styles.word} ${
                  active ? styles.active : ""
                }`}
              >
                {service.title}
              </Link>
            );
          })}
        </div>

        <h2 ref={doRef} className={styles.do}>
          DO
        </h2>
      </div>
    </section>
  );
}