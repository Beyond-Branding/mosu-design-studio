"use client";

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

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
  "LOCATION",
];

export default function FilterBar({
  activeFilter,
  setActiveFilter,
}: FilterBarProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "64px",
        display: "flex",
        alignItems: "center",
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.14)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          gap: "28px",
          whiteSpace: "nowrap",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            style={{
              flexShrink: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              padding: 0,

              color:
                activeFilter === filter
                  ? "#fff"
                  : "rgba(255,255,255,0.65)",

              fontFamily: "inherit",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "1",
              letterSpacing: "-0.025em",

              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}