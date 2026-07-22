"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {

useGSAP(()=>{

gsap.to(".hero-title",{

y:-300,

scrollTrigger:{

trigger:".hero-section",

start:"top top",

end:"bottom top",

scrub:true,

}

});

});

return null;

}