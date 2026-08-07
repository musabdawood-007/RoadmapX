"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { roadmapMeta } from "@/roadmaps/index";

const categories = ["All", ...new Set(roadmapMeta.map((r) => r.category))];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

const container: React.CSSProperties = {
  maxWidth: 1152,
  margin: "0 auto",
  paddingLeft: 24,
  paddingRight: 24,
};

const searchInput: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px 12px 44px",
  borderRadius: 12,
  border: "1px solid var(--card-border)",
  background: "var(--card)",
  fontSize: 14,
  color: "var(--foreground)",
  outline: "none",
};

const filterBtn = (active: boolean, accent?: boolean): React.CSSProperties => ({
  padding: "8px 16px",
  borderRadius: 12,
  fontSize: 14,
  fontWeight: 500,
  whiteSpace: "nowrap" as const,
  border: active ? "none" : "1px solid var(--card-border)",
  background: accent
    ? active ? "var(--accent)" : "transparent"
    : active ? "var(--foreground)" : "transparent",
  color: accent
    ? active ? "white" : "var(--muted)"
    : active ? "var(--background)" : "var(--muted)",
  cursor: "pointer",
  transition: "all 0.2s",
});

const card: React.CSSProperties = {
  display: "block",
  position: "relative",
  padding: 24,
  borderRadius: 16,
  border: "1px solid var(--card-border)",
  background: "var(--card)",
  textDecoration: "none",
  color: "var(--foreground)",
  transition: "all 0.3s",
};

export default function RoadmapsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = useMemo(() => {
    return roadmapMeta.filter((r) => {
      const matchCategory = category === "All" || r.category === category;
      const matchDifficulty = difficulty === "All" || r.difficulty === difficulty;
      const matchSearch =
        !search ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.category.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchDifficulty && matchSearch;
    });
  }, [search, category, difficulty]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid var(--card-border)", background: "color-mix(in srgb, var(--card) 50%, transparent)" }}>
        <div className="container-px" style={{ ...container, padding: "48px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--muted)", marginBottom: 16 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <svg style={{ width: 12, height: 12 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span style={{ color: "var(--foreground)" }}>Browse</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 8 }}>Browse Roadmaps</h1>
          <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 480 }}>
            {roadmapMeta.length} career paths across {categories.length - 1} categories. Find the right path for your next move.
          </p>
        </div>
      </div>

      <div className="container-px" style={{ ...container, padding: "32px 24px 80px" }}>
        {/* Filters */}
        <div style={{ marginBottom: 24 }}>
          {/* Search */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <svg style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "var(--muted)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search roadmaps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchInput}
            />
          </div>

          {/* Category + Difficulty */}
          <div className="filter-row" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1 }}>
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className="btn-filter" style={filterBtn(category === c, true)}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {difficulties.map((d) => (
                <button key={d} onClick={() => setDifficulty(d)} className="btn-filter" style={filterBtn(difficulty === d)}>
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <p style={{ fontSize: 14, color: "var(--muted)" }}>
            {filtered.length === roadmapMeta.length
              ? `Showing all ${roadmapMeta.length} roadmaps`
              : `${filtered.length} of ${roadmapMeta.length} roadmaps`}
          </p>
          {(search || category !== "All" || difficulty !== "All") && (
            <button
              onClick={() => { setSearch(""); setCategory("All"); setDifficulty("All"); }}
              style={{ fontSize: 12, color: "var(--accent)", background: "none", border: "none", cursor: "pointer" }}
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="stagger-children grid-3" style={{ gap: 20 }}>
          {filtered.map((r) => (
            <Link key={r.id} href={`/roadmap/${r.id}`} style={card}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontSize: 36 }}>{r.icon}</span>
                <span className={`diff-${r.difficulty.toLowerCase()}`} style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "4px 10px", borderRadius: 999 }}>
                  {r.difficulty}
                </span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{r.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 20, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{r.introduction}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 12, color: "var(--muted)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" d="M12 6v6l4 2" />
                  </svg>
                  {r.estimatedTime}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {r.stepCount} steps
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {r.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>No roadmaps found</h3>
            <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24, maxWidth: 400, margin: "0 auto 24px" }}>
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); setDifficulty("All"); }}
              className="btn-cta"
              style={{ background: "var(--accent)", color: "white", border: "none", cursor: "pointer" }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ background: "var(--background)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>
            © 2026 Copyright by{" "}
            <a href="https://musab-projects.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
              Musab Projects
            </a>
          </span>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>•</span>
          <span style={{ fontSize: 12, color: "var(--muted)", fontStyle: "italic" }}>More roadmaps coming soon</span>
        </div>
      </footer>
    </div>
  );
}
