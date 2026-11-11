
"use client";

import { useState } from "react";
import { cities } from "./cities";
import ContactModal from "./ContactModal";

export default function ContactCities() {
  const [hovered, setHovered] = useState<number | null>(1);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  return (
    <>
      <section className="bg-[#242323] px-5 pb-16 text-white sm:px-8 md:pb-24">
        <div className="mx-auto w-full max-w-3xl">

          {cities.map((city) => {
            const isMumbai = city.name.toLowerCase() === "mumbai";
            const isActive = hovered === city.id;

            return (
              <div
                key={city.id}
                onMouseEnter={() => setHovered(city.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={
                  isMumbai
                    ? () => setSelectedCity(city)
                    : undefined
                }
                className={`
                  border-b
                  border-white/20
                  py-5
                  transition-colors
                  duration-300
                  md:py-7
                  ${isMumbai ? "cursor-pointer" : "cursor-default"}
                `}
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
                        isActive
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

                  {/* Address and Phone */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-500

                      max-md:mt-4
                      max-md:max-h-40
                      max-md:opacity-100

                      ${
                        isActive
                          ? "mt-4 max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="space-y-2">

                      {/* Address */}
                      {city.address && (
                        <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
                          <span className="font-bold text-white">
                            A.
                          </span>{" "}
                          {city.address}
                        </p>
                      )}

                      {/* Phone */}
                      {city.phone && (
                        <p className="text-xs text-white/70 sm:text-sm">
                          <span className="font-bold text-white">
                            P.
                          </span>{" "}
                          {city.phone}
                        </p>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Contact Modal */}
      {selectedCity && (
        <ContactModal
          city={selectedCity}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </>
  );
}
