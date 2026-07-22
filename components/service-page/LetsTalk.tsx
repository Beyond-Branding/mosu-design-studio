"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LetsTalk() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-40">

      {/* Huge Background Text */}
      <h1
        className="
absolute
left-1/2
top-1/2
-z-0
-translate-x-1/2
-translate-y-1/2
select-none
whitespace-nowrap
text-[clamp(6rem,18vw,18rem)]
font-black
uppercase
leading-none
text-[#e8e8e8]
"
      >
        LET'S TALK
      </h1>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">

        <p className="mb-10 max-w-2xl text-center text-lg text-neutral-600">
          Whether you're planning a residence, commercial development,
          hospitality space or a bespoke interior, we'd love to hear your ideas.
        </p>

        <Link
          href="/contact"
          className="
group
flex
items-center
gap-3
rounded-full
border
border-black
px-8
py-4
uppercase
tracking-[0.2em]
transition-all
duration-500
hover:bg-black
hover:text-white
"
        >
          Start a Project

          <ArrowUpRight
            className="transition-transform duration-500 group-hover:rotate-45"
          />
        </Link>

      </div>

    </section>
  );
}