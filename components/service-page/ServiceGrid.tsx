import ServiceCard from "./ServiceCard";
import { services } from "@/app/services/services";

export default function ServiceGrid() {
  return (
    <section className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm">
            What We Do
          </p>

          <h1
            className="
              text-center
              font-black
              uppercase
              leading-none
              text-white

              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Our Services
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl

              text-base
              leading-relaxed
              text-white/60
              md:text-lg
            "
          >
            We create bespoke interiors, luxury hospitality spaces, custom
            furniture, lighting, sculptures, and architectural solutions
            tailored to every project.
          </p>
        </div>

        {/* Services Grid */}
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
    </section>
  );
}