"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Plus, X } from "lucide-react";

const LOGO_URL =
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491644/text_3_hdcwme.png";

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

  /* Prevent background scrolling when mobile menu is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close mobile menu when screen becomes desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-[999]">
        {/* Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-36
            bg-gradient-to-b
            from-black/70
            via-black/30
            to-transparent
          "
        />

        <div
          className="
            relative
            mx-auto
            flex
            h-24
            max-w-[1800px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-12
          "
        >
          {/* ================= LEFT NAV ================= */}
          <nav className="hidden items-center gap-14 text-[13px] font-medium lg:flex">
            <NavItem href="/projects" text="PROJECTS" />
            <NavItem href="/services" text="SERVICES" />
            <NavItem href="/contact" text="CONTACT" />
          </nav>

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
            aria-label="MOSU Home"
          >
            <Image
              src={LOGO_URL}
              alt="MOSU"
              width={140}
              height={45}
              priority
              unoptimized
              className="h-8 w-auto sm:h-9 lg:h-10"
            />
          </Link>

          {/* ================= RIGHT NAV ================= */}
          <div className="ml-auto hidden items-center gap-14 text-[13px] font-medium lg:flex">
            <NavItem href="/about" text="ABOUT" />

            <Link
              href="/StartProject"
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
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-90
                "
              />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              ml-auto
              flex
              items-center
              justify-center
              text-white
              lg:hidden
            "
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={32} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed
          inset-0
          z-[1000]
          bg-[#111]
          transition-all
          duration-500
          ease-[cubic-bezier(.76,0,.24,1)]
          ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }
        `}
        aria-hidden={!open}
      >
        {/* ================= MOBILE TOP ================= */}
        <div className="flex h-24 items-center justify-between px-6 sm:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="MOSU Home"
          >
            <Image
              src={LOGO_URL}
              alt="MOSU"
              width={140}
              height={45}
              priority
              unoptimized
              className="h-9 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>

        {/* ================= MOBILE LINKS ================= */}
        <nav className="mt-20 flex flex-col items-center gap-8">
          <Link
            href="/projects"
            onClick={closeMenu}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:translate-x-2
            "
          >
            Projects
          </Link>

          <Link
            href="/services"
            onClick={closeMenu}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:translate-x-2
            "
          >
            Services
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:translate-x-2
            "
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="
              text-4xl
              font-light
              uppercase
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:translate-x-2
            "
          >
            Contact
          </Link>

          {/* ================= MOBILE LET'S TALK ================= */}
          <Link
            href="/StartProject"
            onClick={closeMenu}
            className="
              group
              mt-8
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/50
              px-8
              py-4
              uppercase
              tracking-[0.2em]
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            <span>LET'S TALK</span>

            <Plus
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:rotate-90
              "
            />
          </Link>
        </nav>
      </div>
    </>
  );
}