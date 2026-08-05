"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/projects/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function Team() {
  return (
    <section className="bg-[#f4f4f4] py-20 lg:py-28">
      <div className="mx-auto max-w-[1700px] px-5 lg:px-10">

        {/* Header */}

        <div className="mb-14 flex items-center justify-between">

          <div>
           <p className="uppercase tracking-[0.35em] text-xs text-neutral-600">
  PROJECTS
</p>

<h2 className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-none text-black">
  Explore Our Creations
</h2>

          
          </div>

          {/* Arrows */}

         <div className="hidden md:flex gap-4">
  <button className="team-prev group flex h-14 w-14 items-center justify-center rounded-full border border-black bg-white transition-all duration-300 hover:bg-black">
    <ChevronLeft
      size={24}
      strokeWidth={2.5}
      className="text-black transition-colors duration-300 group-hover:text-white"
    />
  </button>

  <button className="team-next group flex h-14 w-14 items-center justify-center rounded-full border border-black bg-white transition-all duration-300 hover:bg-black">
    <ChevronRight
      size={24}
      strokeWidth={2.5}
      className="text-black transition-colors duration-300 group-hover:text-white"
    />
  </button>
</div>
        </div>

        <Swiper
  modules={[Navigation, Autoplay]}
  navigation={{
    prevEl: ".team-prev",
    nextEl: ".team-next",
  }}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  loop={true}
  speed={1200}
  spaceBetween={28}
  grabCursor
  breakpoints={{
    0: {
      slidesPerView: 1.1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  }}
>
          {projects.map((project) => (
  <SwiperSlide key={project.slug}>
  <Link href={`/projects/${project.slug}`} className="group block">

    <div className="relative h-[430px] overflow-hidden rounded-sm">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />
    </div>

    <h3 className="mt-6 text-3xl font-bold text-black">
      {project.title}
    </h3>

    <p className="mt-2 uppercase tracking-[0.2em] text-sm text-neutral-600">
      {project.location}
    </p>

  </Link>
</SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Arrows */}

       <div className="mt-10 flex justify-center gap-4 md:hidden">
  <button className="team-prev group flex h-14 w-14 items-center justify-center rounded-full border border-black bg-white transition-all duration-300 hover:bg-black">
    <ChevronLeft
      size={24}
      strokeWidth={2.5}
      className="text-black transition-colors duration-300 group-hover:text-white"
    />
  </button>

  <button className="team-next group flex h-14 w-14 items-center justify-center rounded-full border border-black bg-white transition-all duration-300 hover:bg-black">
    <ChevronRight
      size={24}
      strokeWidth={2.5}
      className="text-black transition-colors duration-300 group-hover:text-white"
    />
  </button>
</div>

      </div>
    </section>
  );
}