"use client";

import { services } from "./services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="bg-[#f4f4f4] px-8 pt-40 pb-24">

      <h1 className="mb-24 text-center text-[70px] font-black uppercase tracking-tight">
        All Services
      </h1>

      <div className="grid grid-cols-2 gap-5">

        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            image={service.image}
          />
        ))}

      </div>

    </section>
  );
}