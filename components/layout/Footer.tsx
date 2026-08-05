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
    <footer className="bg-[#1d1d1d] text-white">
      <div className="mx-auto max-w-[1700px] px-8 lg:px-10 pt-20 pb-6">

        {/* Top */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <Link href="/">
      <Image
  src="https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491644/text_3_hdcwme.png"
  alt="MOSU"
  width={100}
  height={35}
  priority
  className="h-auto w-[90px] lg:w-[110px]"
/>
            </Link>

            <p className="mt-8 max-w-[290px] text-[15px] leading-8 text-gray-400">
              We create timeless architecture, interiors and bespoke spaces
              inspired by simplicity, craftsmanship and innovation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/services/hotels-resorts"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  Hotels & Resorts
                </Link>
              </li>

              <li>
                <Link
                  href="/services/luxury-residences"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  Luxury Residences
                </Link>
              </li>

              <li>
                <Link
                  href="/services/art-installations"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  Art Installations
                </Link>
              </li>

              <li>
                <Link
                  href="/services/sculptures"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  Sculptures
                </Link>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/about"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="inline-block text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Connect With Us
            </h3>

            <div className="space-y-5">

              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaInstagram size={20} />
                Instagram
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaFacebookF size={20} />
                Facebook
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaLinkedinIn size={20} />
                LinkedIn
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaXTwitter size={20} />
                X (Twitter)
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaYoutube size={20} />
                YouTube
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-5 flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

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