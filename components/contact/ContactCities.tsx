"use client";

import { useState } from "react";
import { cities } from "./cities";
import ContactModal from "./ContactModal";

export default function ContactCities() {
  const [hovered, setHovered] = useState<number | null>(1);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  return (
    <>
      <section className="bg-black px-5 pb-16 text-white sm:px-8 md:pb-24">
        <div className="mx-auto w-full max-w-3xl">

          {cities.map((city) => (
            <div
              key={city.id}
              onMouseEnter={() => setHovered(city.id)}
              onMouseLeave={() => setHovered(1)}
              onClick={() => setSelectedCity(city)}
              className="cursor-pointer border-b border-white/20 py-5 transition-colors duration-300 md:py-7"
            >
              <div className="text-center">

                {/* City Name */}
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
                        ? "text-white"
                        : "text-white/25"
                    }

                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  `}
                >
                  {city.name}
                </h2>

                {/* City Details */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500

                    ${
                      hovered === city.id
                        ? "mt-3 max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="space-y-2">

                    <p className="text-xs text-white/70 sm:text-sm">
                      <span className="font-bold text-white">P.</span>{" "}
                      {city.phone}
                    </p>

                    <p className="mx-auto max-w-md text-xs leading-relaxed text-white/70 sm:text-sm">
                      <span className="font-bold text-white">A.</span>{" "}
                      {city.address}
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