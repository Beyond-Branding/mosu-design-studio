"use client";

import { projects } from "@/app/projects/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function ProjectsGrid() {
  return (
    <section className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}