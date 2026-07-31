"use client";

import { useMemo, useState } from "react";
import { projects } from "@/app/projects/projects";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import styles from "./Projects.module.css";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = useMemo(() => {
    if (filter === "ALL") return projects;

    if (filter === "COMPLETED") {
      return projects.filter((p) => status === "COMPLETED");
    }

    if (filter === "IN PROGRESS") {
      return projects.filter((p) => status === "IN PROGRESS");
    }

    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="bg-[#f5f5f3] py-24">
      <div className="mx-auto max-w-[1700px] px-6">

        {/* Heading */}

        <div className="mb-20 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-black">
            Our Creations
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-neutral-600 text-lg leading-relaxed">
            Every project is crafted with precision, emotion and timeless
            aesthetics. Explore our portfolio across hospitality,
            residences and bespoke design.
          </p>
        </div>

        <FilterBar
          active={filter}
          onChange={setFilter}
        />

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}