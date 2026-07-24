"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

import gsap from "gsap";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const x = gsap.quickTo(cursor.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const y = gsap.quickTo(cursor.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      x(e.clientX);
      y(e.clientY);
    };

    window.addEventListener("mousemove", move);

    // Hover animation
    const hoverables = document.querySelectorAll(
      "a, button, .cursor-hover"
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.current?.classList.add(styles.active);
      });

      el.addEventListener("mouseleave", () => {
        cursor.current?.classList.remove(styles.active);
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={cursor} className={styles.cursor}></div>;
}