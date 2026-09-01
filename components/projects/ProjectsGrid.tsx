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
    if (activeFilter === "ALL") {
      return projects;
    }

    return projects.filter(
      (project) => project.category?.toUpperCase() === activeFilter
    );
  }, [activeFilter]);

  return (
    <section className="bg-[#171717] py-24 text-white">
      <div className="mx-auto max-w-[1700px] px-6">
        {filteredProjects.length > 0 ? (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              No projects found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}