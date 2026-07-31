"use client";

import styles from "./Projects.module.css";

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const filters = [
  "ALL",
  "COMPLETED",
  "IN PROGRESS",
  "HOTELS & RESORTS",
  "RESIDENCES",
  "BESPOKE ART",
  "WALL INSTALLATIONS",
  "SCULPTURES",
  "CUSTOM LIGHTING",
  "FURNITURE",
  "DOORS & PARTITIONS",
  "METAL WORKS",
];

export default function FilterBar({
  activeFilter,
  setActiveFilter,
}: FilterBarProps) {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={activeFilter === filter ? styles.active : ""}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}