"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

function NavItem({
  href,
  text,
}: {
  href: string;
  text: string;
}){
  return (
    <Link
      href={href}
      className="group relative block h-5 overflow-hidden text-white"
    >
      {/* First Text */}
      <span
        className="
          block
          uppercase
          tracking-[0.18em]
          transition-transform
          duration-500
          ease-[cubic-bezier(.76,0,.24,1)]
          group-hover:-translate-y-full
        "
      >
        {text}
      </span>

      {/* Reflection */}
      <span
        className="
          absolute
          left-0
          top-full
          block
          uppercase
          tracking-[0.18em]
          transition-transform
          duration-500
          ease-[cubic-bezier(.76,0,.24,1)]
          group-hover:-translate-y-full
        "
      >
        {text}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-[999] w-full">

  {/* Top Gradient */}
  <div
    className="
      absolute
      inset-x-0
      top-0
      h-36
      bg-gradient-to-b
      from-black/65
      via-black/30
      to-transparent
      pointer-events-none
    "
  />

  {/* Navbar */}
  <div className="relative">
    <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-10">

      {/* Left Navigation */}
      <nav className="hidden md:flex items-center gap-14 text-[13px] font-medium text-white">
       <NavItem href="/projects" text="PROJECTS" />
<NavItem href="/services" text="SERVICES" />
<NavItem href="/contact" text="CONTACT" />
<NavItem href="/about" text="ABOUT" />
      </nav>

      {/* Logo */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 text-5xl font-black tracking-tight text-white"
      >
        MOSU
      </Link>

      {/* Right Navigation */}
      <div className="hidden md:flex items-center gap-14 text-[13px] font-medium text-white">

        <NavItem href="/about" text="ABOUT" />

        <button
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/40
            bg-white/10
            backdrop-blur-md
            px-6
            py-3
            uppercase
            tracking-[0.18em]
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          LET'S TALK
          <Plus size={15} />
        </button>

      </div>

    </div>
  </div>

</header>
  );
}