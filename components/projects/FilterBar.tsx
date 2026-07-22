"use client";

import styles from "./Projects.module.css";

const filters = [
  "ALL",
  "COMPLETED",
  "IN PROGRESS",
  "RESIDENCES",
  "RESTAURANTS",
  "PUBLIC SPACES",
  "PRIVATE JETS",
  "HOTELS & RESORTS",
  "YACHTS",
];

export default function FilterBar() {
  return (
    <div className={styles.filters}>
      {filters.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
}