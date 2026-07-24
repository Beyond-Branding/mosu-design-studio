"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {

  const section = useRef(null);
  const title = useRef(null);
  const paragraph = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.set(paragraph.current,{
        opacity:0,
        y:60
      });

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:section.current,
          start:"top top",
          end:"+=200%",
          scrub:true,
          pin:true,
        }
      });

      tl.to(title.current,{
        scale:.55,
        y:-120,
        ease:"none"
      })

      .to(paragraph.current,{
        opacity:1,
        y:0,
        ease:"none"
      },"-=.3");

    },section);

    return ()=>ctx.revert();

  },[]);

  return (

<section
ref={section}
className="relative h-screen overflow-hidden bg-black text-white"
>

{/* LEFT IMAGE */}

<div className="absolute left-0 top-0 h-full w-[30%]">

<Image
fill
src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784831979/pexels-zeynep-sude-emek-193601188-21897011_baqjo0.jpg"
alt=""
className="object-cover"
/>

</div>

{/* RIGHT IMAGE */}

<div className="absolute right-0 top-0 h-full w-[30%]">

<Image
fill
src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1784710319/pexels-cihan-karacayir-774859403-18889065_dwumod.jpg"
alt=""
className="object-cover"
/>

</div>

{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-black/40"/>

{/* CONTENT */}

<div className="relative z-20 flex h-full flex-col items-center justify-center">

<div
ref={title}
className="text-center"
>

<h2 className="text-[7vw] font-black uppercase leading-none">
WE'RE
</h2>

<h1 className="text-[9vw] font-black uppercase leading-none">
MOSU
</h1>

</div>

<p
ref={paragraph}
className="mt-12 max-w-xl text-center text-lg text-neutral-300 leading-relaxed"
>

MOSU is a globally operating architecture and design studio
crafting luxury residential, hospitality, and commercial
spaces with timeless design language and meticulous attention
to detail.

</p>

</div>

</section>

  );
}