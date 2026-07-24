"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

interface Props {
  project: {
    title: string;
    location: string;
    image: string;
  };
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className={styles.image}
      />

      <div className={styles.overlay}>
        <h2>{project.title}</h2>
        <p>{project.location}</p>
      </div>
    </div>
  );
}