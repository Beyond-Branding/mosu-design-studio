"use client";

import { useState } from "react";
import { cities } from "./cities";
import ContactModal from "./ContactModal";

export default function ContactCities() {
  const [hovered, setHovered] = useState<number | null>(1);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  return (
    <>
      <section className="bg-[#f6f4f1] px-5 sm:px-8 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-3xl">

          {cities.map((city) => (
            <div
              key={city.id}
              onMouseEnter={() => setHovered(city.id)}
              onMouseLeave={() => setHovered(1)}
              onClick={() => setSelectedCity(city)}
              className="cursor-pointer border-b border-neutral-300 py-5 md:py-7"
            >
              <div className="text-center">

                <h2
                  className={`
                    font-black
                    uppercase
                    leading-none
                    tracking-tight
                    transition-all
                    duration-300

                    ${
                      hovered === city.id
                        ? "text-[#111]"
                        : "text-neutral-300"
                    }

                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  `}
                >
                  {city.name}
                </h2>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500

                    ${
                      hovered === city.id
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="space-y-2">

                    <p className="text-xs sm:text-sm text-neutral-700">
                      <span className="font-bold">P.</span> {city.phone}
                    </p>

                    <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-neutral-700">
                      <span className="font-bold">A.</span> {city.address}
                    </p>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      <ContactModal
        city={selectedCity}
        onClose={() => setSelectedCity(null)}
      />
    </>
  );
}