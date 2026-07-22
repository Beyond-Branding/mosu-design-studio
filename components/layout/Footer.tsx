"use client";

import Image from "next/image";
import Link from "next/link";

const works = [
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750119/pexels-lebih-dari-ini-3915826-19939584_yzqjk4.jpg",
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750119/pexels-pu-ca-adryan-163345030-12881057_lmymgz.jpg",
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750120/pexels-myhq-workspaces-3638298-5444194_yobovh.jpg",
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750120/pexels-achraf-borkadi-440724799-19893586_vbh8jy.jpg",
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750120/pexels-capture-crew-2153847797-33827313_ywxldi.jpg",
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750119/pexels-pu-ca-adryan-163345030-12913377_fbhnxm.jpg",
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