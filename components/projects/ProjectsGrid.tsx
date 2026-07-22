"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import styles from "./Projects.module.css";

export default function ProjectsGrid() {
  return (
    <section className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}