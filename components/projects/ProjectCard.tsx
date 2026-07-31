"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.css";

interface Props {
  project: any;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={styles.card}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
        className={styles.image}
      />

      <div className={styles.overlay}>
        <span>{project.category}</span>

        <h2>{project.title}</h2>

        <p>
          {project.location} • {project.year}
        </p>
      </div>
    </Link>
  );
}