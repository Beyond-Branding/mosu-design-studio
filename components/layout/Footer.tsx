"use client";

import Image from "next/image";
import Link from "next/link";

const works = [
  "/images/footer/work1.jpg",
  "/images/footer/work2.jpg",
  "/images/footer/work3.jpg",
  "/images/footer/work4.jpg",
  "/images/footer/work5.jpg",
  "/images/footer/work6.jpg",
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white">
      <div className="mx-auto max-w-[1700px] px-10 py-24">

        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">

          {/* Logo */}

          <div>
            <h2 className="text-4xl font-black tracking-tight">
              MOSU.
            </h2>

            <p className="mt-8 max-w-[260px] text-sm leading-8 text-gray-400">
              We create timeless architecture and interior spaces
              inspired by simplicity, innovation and craftsmanship.
            </p>
          </div>

          {/* Services */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
  <Link
    href="#"
    className="transition duration-300 hover:text-white hover:translate-x-2 inline-block"
  >
    Architecture
  </Link>
</li>

              <li>
                <Link href="#">Interior Design</Link>
              </li>

              <li>
                <Link href="#">Landscape</Link>
              </li>

              <li>
                <Link href="#">Visualization</Link>
              </li>

            </ul>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/projects">Projects</Link>
              </li>

              <li>
                <Link href="/careers">Careers</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>

            </ul>
          </div>

          {/* Gallery */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Recent Works
            </h3>

            <div className="grid grid-cols-3 gap-3">

              {works.map((img, index) => (

                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden"
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}