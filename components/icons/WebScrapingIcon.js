import React from "react";

export default function WebScraping() {
  return (
    <svg viewBox="0 0 32 32">
      <title>{"file_type_webscraping"}</title>

      {/* Background base - mimicking a browser window */}
      <path
        d="M4,26 L28,26 L28,6 L4,6 Z"
        style={{ fill: "#33a9dc" }}
      />

      {/* Tab bar - top strip */}
      <path
        d="M4,6 L28,6 L28,9 L4,9 Z"
        style={{ fill: "#1572b6" }}
      />

      {/* Browser circles */}
      <circle cx="6.5" cy="7.5" r="0.8" style={{ fill: "#fff" }} />
      <circle cx="9.5" cy="7.5" r="0.8" style={{ fill: "#fff" }} />
      <circle cx="12.5" cy="7.5" r="0.8" style={{ fill: "#fff" }} />

      {/* Scraping arrow */}
      <path
        d="M10 14 L16 20 L22 14"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />

      {/* Web elements - rectangles as data boxes */}
      <rect x="8" y="21" width="4" height="2" rx="0.5" style={{ fill: "#ebebeb" }} />
      <rect x="14" y="21" width="4" height="2" rx="0.5" style={{ fill: "#ebebeb" }} />
      <rect x="20" y="21" width="4" height="2" rx="0.5" style={{ fill: "#ebebeb" }} />

      {/* Bottom base shadow */}
      <path
        d="M4,26 L16,30 L28,26"
        style={{ fill: "#1572b6" }}
      />
    </svg>
  );
}
