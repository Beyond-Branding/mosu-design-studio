"use client";

import Link from "next/link";

interface NavItemProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemProps) {
  return (
    <Link href={href} className="group relative overflow-hidden h-6">
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-6">
        <span className="uppercase tracking-[0.25em] text-sm text-white">
          {text}
        </span>

        <span className="uppercase tracking-[0.25em] text-sm text-white opacity-40 scale-y-[-1] blur-[1px]">
          {text}
        </span>
      </div>
    </Link>
  );
}