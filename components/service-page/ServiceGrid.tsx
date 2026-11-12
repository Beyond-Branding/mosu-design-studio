import ServiceCard from "./ServiceCard";
import { services } from "@/app/services/services";

export default function ServiceGrid() {
  return (
    <div className="min-h-screen bg-[#242323]">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}

        <div className="mb-16 text-center">
        <h1
  className="
    text-center
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-medium
    uppercase
    tracking-[0.02em]
    leading-[1]
    text-[#e5e5e5]
  "
>
  OUR PRODUCTS
</h1>
        </div>

        {/* ================= PRODUCTS GRID ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              image={service.image}
              slug={service.slug}
            />
          ))}
        </div>

      </div>
    </div>
  );
}