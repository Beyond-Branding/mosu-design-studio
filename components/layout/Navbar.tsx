"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

function NavItem({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-5 overflow-hidden text-white"
    >
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
  return (
    <header className="fixed inset-x-0 top-0 z-[999]">

      {/* Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/65 via-black/25 to-transparent" />

      <div className="relative mx-auto flex h-24 max-w-[1800px] items-center justify-between px-12">

        {/* Left */}
        <nav className="hidden items-center gap-14 md:flex text-[13px] font-medium">
          <NavItem href="/projects" text="PROJECTS" />
          <NavItem href="/services" text="SERVICES" />
          <NavItem href="/contact" text="CONTACT" />
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-5xl font-black tracking-tight text-white"
        >
          MOSU
        </Link>

        {/* Right */}
        <div className="hidden items-center gap-14 md:flex">

          <NavItem href="/about" text="ABOUT" />

          <Link
            href="/contact"
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/40
              bg-white/10
              px-7
              py-3
              uppercase
              tracking-[0.18em]
              text-[13px]
              font-medium
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            <span>LET'S TALK</span>
            <Plus size={16} />
          </Link>

        </div>

      </div>
    </header>
  );
}