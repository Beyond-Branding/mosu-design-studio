"use client";

import { useState } from "react";
import { cities } from "./cities";
import ContactModal from "./ContactModal";

export default function ContactCities() {
  const [hovered, setHovered] = useState<number | null>(1);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  return (
    <>
      <section className="flex justify-center bg-[#f6f4f1] px-8 pb-20">
        <div className="w-full max-w-3xl">

          {cities.map((city) => (
            <div
              key={city.id}
              onMouseEnter={() => setHovered(city.id)}
              onClick={() => setSelectedCity(city)}
              className="cursor-pointer border-b border-neutral-300 py-6 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">

                {/* City */}
                <h2
                  className={`font-black uppercase leading-none tracking-tight transition-all duration-300
                  ${
                    hovered === city.id
                      ? "text-[#111]"
                      : "text-neutral-300"
                  }
                  text-5xl md:text-6xl`}
                >
                  {city.name}
                </h2>

                {/* Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hovered === city.id
                      ? "mt-3 max-h-24 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-1 text-neutral-700">

                    <p className="text-sm font-medium tracking-wide">
                      <span className="font-bold">P.</span>{" "}
                      {city.phone}
                    </p>

                    <p className="max-w-md text-sm leading-relaxed">
                      <span className="font-bold">A.</span>{" "}
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