import ServiceCard from "./ServiceCard";
import { services } from "@/app/services/services";

export default function ServiceGrid() {
  return (
    <section className="mx-auto grid max-w-[1700px] gap-8 px-10 py-20 md:grid-cols-2">
      {services.map((service) => (
        <ServiceCard
          key={service.slug}
          title={service.title}
          image={service.image}
          slug={service.slug}
        />
      ))}
    </section>
  );
}