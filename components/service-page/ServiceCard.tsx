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

  h-[320px]
  sm:h-[420px]
  md:h-[520px]
  lg:h-[620px]
"
    >
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        priority={false}
        sizes="(max-width:768px) 100vw,
               (max-width:1024px) 50vw,
               50vw"
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Overlay */}
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

          sm:inset-x-8
          sm:bottom-8

          lg:left-12
          lg:right-12
          lg:bottom-12

          z-20
        "
      >
        <h2
          className="
            max-w-[90%]

            text-white
            font-black
            uppercase
            leading-[0.95]

            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          {title}
        </h2>

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

            sm:px-6
            sm:py-3

            text-[11px]
            sm:text-xs
            md:text-sm

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
          "
        >
          Learn More
          <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
        </span>
      </div>
    </Link>
  );
}