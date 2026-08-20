"use client";

import { useMemo } from "react";
import { projects } from "@/app/projects/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

interface ProjectsGridProps {
  activeFilter: string;
}

export default function ProjectsGrid({
  activeFilter,
}: ProjectsGridProps) {
  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;

    if (activeFilter === "COMPLETED") {
      return projects.filter((p) => p.status === "COMPLETED");
    }

    if (activeFilter === "IN PROGRESS") {
      return projects.filter((p) => p.status === "IN PROGRESS");
    }

    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[1700px] px-6">
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