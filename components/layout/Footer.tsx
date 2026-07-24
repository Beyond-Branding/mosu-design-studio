"use client";

import Link from "next/link";
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
      <div className="mx-auto max-w-[1700px] px-10 py-24">

        <div className="grid gap-16 md:grid-cols-4">

          {/* Logo */}
          <div>
            <h2 className="text-5xl font-black tracking-tight">
              MOSU.
            </h2>

            <p className="mt-8 max-w-[280px] text-sm leading-8 text-gray-400">
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
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                >
                  Hotels & Resorts
                </Link>
              </li>

              <li>
                <Link
                  href="/services/luxury-residences"
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                >
                  Luxury Residences
                </Link>
              </li>

              <li>
                <Link
                  href="/services/art-installations"
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                >
                  Art Installations
                </Link>
              </li>

              <li>
                <Link
                  href="/services/sculptures"
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
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
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-5">

              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaInstagram size={22} />
                Instagram
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaFacebookF size={22} />
                Facebook
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaLinkedinIn size={22} />
                LinkedIn
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaXTwitter size={22} />
                X (Twitter)
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                <FaYoutube size={22} />
                YouTube
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>© {new Date().getFullYear()} MOSU Studio. All rights reserved.</p>

          <p>Designed & Developed by MOSU.</p>

        </div>

      </div>
    </footer>
  );
}