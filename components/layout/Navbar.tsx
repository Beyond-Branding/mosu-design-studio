"use client";

import Link from "next/link";
import NavItem from "./NavItem";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current > lastScroll && current > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
fixed top-5 left-1/2 z-50
w-[95%] max-w-[1700px]
-translate-x-1/2
transition-all duration-500
${hidden ? "-translate-y-32" : "translate-y-0"}
`}
    >
      <div
        className={`
flex items-center justify-between
rounded-full
px-10
h-20
transition-all duration-500

${
  scrolled
    ? "bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl"
    : "bg-transparent"
}
`}
      >
        {/* LEFT */}

        <nav className="hidden lg:flex gap-12">
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/services" text="Services" />
          <NavItem href="/contact" text="Contact" />
        </nav>

        {/* LOGO */}

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-4xl font-black tracking-tight text-white transition duration-500 hover:tracking-[0.2em]"
        >
          MOSU
        </Link>

        {/* RIGHT */}

        <div className="hidden lg:flex items-center gap-12">
          <NavItem href="/about" text="About" />

          <button
            className="
group
flex items-center
gap-3
rounded-full
border
border-white/20
bg-white/10
backdrop-blur-xl
px-6
py-3
text-sm
uppercase
tracking-[0.2em]
text-white
transition-all
duration-500
hover:bg-white
hover:text-black
"
          >
            Let's Talk

            <ArrowUpRight
              className="
transition-transform
duration-500
group-hover:rotate-45
"
              size={18}
            />
          </button>
        </div>
      </div>
    </header>
  );
}