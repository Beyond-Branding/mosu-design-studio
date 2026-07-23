"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ServicesSection.module.css";

import { services } from "@/app/services/services";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  home?: boolean;
}

export default function ServicesSection({
  home = false,
}: Props) {
  const pathname = usePathname();

  const sectionRef = useRef<HTMLElement>(null);
  const weRef = useRef<HTMLDivElement>(null);
  const doRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(
        ".service-word",
        sectionRef.current
      );

      gsap.set([weRef.current, doRef.current], {
        x: 0,
      });

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

      // Split WE DO
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

      // Reveal services
      words.forEach((word) => {
        tl.to(word, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
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
        <div ref={weRef} className={styles.we}>
          WE
        </div>

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

        <div ref={doRef} className={styles.do}>
          DO
        </div>
      </div>
    </section>
  );
}