"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-[1700px] px-6 sm:px-8 lg:px-10 pt-20 pb-6">

        {/* ================= TOP ================= */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* LOGO / ABOUT */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491644/text_3_hdcwme.png"
                alt="MOSU"
                width={110}
                height={40}
                priority
                className="h-auto w-[90px] lg:w-[110px]"
              />
            </Link>

            <p className="mt-8 max-w-[290px] text-[15px] leading-8 text-white/50">
              We create timeless architecture, interiors and bespoke spaces
              inspired by simplicity, craftsmanship and innovation.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h3>

            <ul className="space-y-4">
              {[
                ["Hotels & Resorts", "/services/hotels-resorts"],
                ["Luxury Residences", "/services/luxury-residences"],
                ["Art Installations", "/services/art-installations"],
                ["Sculptures", "/services/sculptures"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      inline-block
                      text-white/50
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-white
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      inline-block
                      text-white/50
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-white
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Connect With Us
            </h3>

            <div className="space-y-5">

              <SocialLink
                href="https://instagram.com"
                icon={<FaInstagram size={19} />}
                label="Instagram"
              />

              <SocialLink
                href="https://facebook.com"
                icon={<FaFacebookF size={19} />}
                label="Facebook"
              />

              <SocialLink
                href="https://linkedin.com"
                icon={<FaLinkedinIn size={19} />}
                label="LinkedIn"
              />

              <SocialLink
                href="https://x.com"
                icon={<FaXTwitter size={19} />}
                label="X (Twitter)"
              />

              <SocialLink
                href="https://youtube.com"
                icon={<FaYoutube size={19} />}
                label="YouTube"
              />

            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-6
            text-xs
            uppercase
            tracking-[0.12em]
            text-white/35

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} MOSU Studio. All rights reserved.
          </p>

          <p>
            Designed & Developed by MOSU.
          </p>
        </div>

      </div>
    </footer>
  );
}


/* ================= SOCIAL LINK ================= */

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-4
        text-white/50
        transition-all
        duration-300
        hover:translate-x-2
        hover:text-white
      "
    >
      {icon}
      {label}
    </Link>
  );
}