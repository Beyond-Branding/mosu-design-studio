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
  const weRef = useRef<HTMLDivElement>(null);
  const doRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".service-word");

      gsap.set(words, {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2400",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Split WE
      tl.to(
        weRef.current,
        {
          x: "-32vw",
          duration: 1,
          ease: "power3.inOut",
        },
        0
      );

      // Split DO
      tl.to(
        doRef.current,
        {
          x: "32vw",
          duration: 1,
          ease: "power3.inOut",
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
            duration: 0.45,
            ease: "power3.out",
          },
          0.85 + index * 0.18
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
      <div className={styles.wrapper}>
        {/* WE DO */}
        <div className={styles.title}>
          <div ref={weRef} className={styles.we}>
            WE
          </div>

          <div ref={doRef} className={styles.do}>
            DO
          </div>
        </div>

        {/* Services */}
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
      </div>
    </section>
  );
}