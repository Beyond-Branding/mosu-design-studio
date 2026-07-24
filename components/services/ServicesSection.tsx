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
    const words = gsap.utils.toArray<HTMLElement>(".service-word");

    gsap.set(words, {
      opacity: 0,
      y: 40,
    });

    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top top",
    end: "+=2600",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});

// Initial state
gsap.set(words, {
  opacity: 0,
  y: 40,
});

// STEP 1 - Split WE and DO
tl.to(
  weRef.current,
  {
    xPercent: -90,
    duration: 1,
    ease: "power3.inOut",
  },
  0
);

tl.to(
  doRef.current,
  {
    xPercent: 90,
    duration: 1,
    ease: "power3.inOut",
  },
  0
);

// STEP 2 - Reveal services after split
words.forEach((word, i) => {
  tl.to(
    word,
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    },
    0.8 + i * 0.18
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

      <div className={styles.title}>
        <div ref={weRef} className={styles.we}>
          WE
        </div>

        <div ref={doRef} className={styles.do}>
          DO
        </div>
      </div>

      <div className={styles.center}>
        {services.map((service) => {
          const active =
            pathname === `/services/${service.slug}`;

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