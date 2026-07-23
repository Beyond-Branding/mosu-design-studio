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
      className="group relative block h-[620px] overflow-hidden cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:blur-[4px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/20
          transition
          duration-700
          group-hover:bg-black/45
        "
      />

      <div
        className="
          absolute
          bottom-14
          left-12
          z-20
        "
      >
        <h2
          className="
            text-white
            text-5xl
            font-black
            uppercase
            leading-none
          "
        >
          {title}
        </h2>

        <div
          className="
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-white
            px-7
            py-3
            text-black
            uppercase
            tracking-[0.18em]
            text-sm
            opacity-0
            translate-y-6
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          Learn More
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
}