"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  slug: string;
  subtitle?: string;
  description?: string;
}

export default function ServiceCard({
  title,
  image,
  slug,
  subtitle,
  description,
}: Props) {
  return (
    <Link
      href={`/services/${slug}`}
      className="
        group
        relative
        block
        h-[320px]
        overflow-hidden
        bg-black

        sm:h-[420px]
        md:h-[520px]
        lg:h-[620px]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={image}
        alt={title}
        fill
        priority={false}
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          50vw
        "
        className="
          object-cover
          transition-transform
          duration-[1200ms]
          ease-out
          group-hover:scale-[1.08]
        "
      />

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/20
          transition-all
          duration-700
          group-hover:bg-black/55
        "
      />

      {/* =====================================================
          TOP LABEL
      ===================================================== */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          z-20
          flex
          items-center
          justify-between

          sm:left-8
          sm:right-8
          sm:top-8

          lg:left-12
          lg:right-12
          lg:top-10
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.32em]
            text-white/65

            sm:text-[9px]
          "
        >
          Services
        </span>

        {/* Number / arrow */}

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            text-white
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:rotate-0
          "
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-5
          bottom-6
          z-20

          sm:inset-x-8
          sm:bottom-8

          lg:left-12
          lg:right-12
          lg:bottom-12
        "
      >
        {/* Subtitle */}

        {subtitle && (
          <p
            className="
              mb-3
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/60

              sm:text-[9px]
            "
          >
            {subtitle}
          </p>
        )}

        {/* Title */}

        <h2
          className="
            max-w-[95%]
            font-black
            uppercase
            leading-[0.88]
            tracking-[-0.045em]
            text-white

            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          {title}
        </h2>

        {/* =================================================
            HOVER DESCRIPTION
        ================================================= */}

        {description && (
          <p
            className="
              mt-4
              max-w-[420px]
              translate-y-4
              text-[11px]
              leading-[1.45]
              tracking-[-0.01em]
              text-white/70
              opacity-0

              transition-all
              duration-700

              group-hover:translate-y-0
              group-hover:opacity-100

              sm:text-xs
              md:text-sm
            "
          >
            {description}
          </p>
        )}

        {/* =================================================
            LEARN MORE
        ================================================= */}

        <span
          className="
            mt-5
            inline-flex
            items-center
            gap-2

            rounded-full
            bg-white
            px-5
            py-2.5

            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-black

            translate-y-3
            opacity-0

            transition-all
            duration-700

            group-hover:translate-y-0
            group-hover:opacity-100

            sm:px-6
            sm:py-3
            sm:text-[10px]

            md:text-xs
          "
        >
          Learn More

          <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
        </span>
      </div>

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
          opacity-80
        "
      />
    </Link>
  );
}