"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Menu, X } from "lucide-react";
import Image from "next/image";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed inset-x-0 top-0 z-[999]">

        {/* Gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/65 via-black/25 to-transparent" />

        <div className="relative mx-auto flex h-24 max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ================= LEFT ================= */}

          <nav className="hidden items-center gap-14 text-[13px] font-medium lg:flex">
            <NavItem
              href="/projects"
              text="PROJECTS"
            />

            <NavItem
              href="/services"
              text="SERVICES"
            />

            <NavItem
              href="/contact"
              text="CONTACT"
            />
          </nav>

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491644/text_3_hdcwme.png"
              alt="MOSU Logo"
              width={140}
              height={45}
              priority
              className="h-8 w-auto sm:h-9 lg:h-10"
            />
          </Link>

          {/* ================= RIGHT ================= */}

          <div className="hidden items-center gap-14 text-[13px] font-medium lg:flex">

            <NavItem
              href="/about"
              text="ABOUT"
            />

            {/* LET'S TALK */}
            <Link
              href="/#start-project"
              className="
                group
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

              <Plus
                size={14}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </Link>

          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setOpen(true)}
            className="ml-auto text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={34} />
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[1000] bg-[#111] transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >

        {/* Top */}

        <div className="flex h-24 items-center justify-between px-6">

          <Link
            href="/"
            onClick={() => setOpen(false)}
          >
            <Image
              src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491644/text_3_hdcwme.png"
              alt="MOSU Logo"
              width={140}
              height={45}
              className="h-9 w-auto"
            />
          </Link>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X
              size={34}
              className="text-white"
            />
          </button>

        </div>

        {/* Links */}

        <nav className="mt-20 flex flex-col items-center gap-10">

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            Projects
          </Link>

          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            Services
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:translate-x-2
            "
          >
            Contact
          </Link>

          {/* ================= MOBILE LET'S TALK ================= */}

          <Link
            href="/#start-project"
            onClick={() => setOpen(false)}
            className="
              group
              mt-10
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white
              px-8
              py-4
              uppercase
              tracking-[0.2em]
              text-white
              transition
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            <span>LET'S TALK</span>

            <Plus
              size={14}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </Link>

        </nav>
      </div>
    </>
  );
}