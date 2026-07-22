"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroAnimation() {

  useGSAP(() => {

    gsap.from(".hero-title",{
      y:120,
      opacity:0,
      duration:1.2,
      ease:"power4.out"
    });

    gsap.from(".hero-subtitle",{
      y:60,
      opacity:0,
      duration:1,
      delay:0.3
    });

  });

  return null;
}