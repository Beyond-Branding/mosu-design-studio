"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  slug: string;
}

export default function ServiceCard({
  title,
  image,
  slug,
}: Props) {
  return (
    <Link
      href={`/services/${slug}`}
      className="
        group
        relative
        block
        overflow-hidden
        bg-black

        h-[320px]
        sm:h-[420px]
        md:h-[520px]
        lg:h-[620px]
      "
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority={false}
        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1024px) 50vw,
          50vw
        "
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/30
          transition-all
          duration-500
          group-hover:bg-black/50
        "
      />

      {/* Content */}
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
        {/* Title */}
        <h2
          className="
            max-w-[90%]

            font-black
            uppercase
            leading-[0.95]
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

        {/* Learn More */}
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

            text-[11px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-black

            transition-all
            duration-500

            opacity-100
            lg:translate-y-5
            lg:opacity-0

            group-hover:translate-y-0
            group-hover:opacity-100

            sm:px-6
            sm:py-3
            sm:text-xs
            md:text-sm
          "
        >
          Learn More

          <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
        </span>
      </div>
    </Link>
  );
}