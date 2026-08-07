"use client";

import { useState, useCallback, useEffect, use } from "react";
import Link from "next/link";
import { getRoadmap } from "@/roadmaps/index";

type Progress = Record<string, boolean>;

const container: React.CSSProperties = {
  maxWidth: 768,
  margin: "0 auto",
  paddingLeft: 24,
  paddingRight: 24,
};

export default function RoadmapPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const roadmap = getRoadmap(id);
  const [progress, setProgress] = useState<Progress>({});
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`roadmapx:${id}`);
      if (saved) setProgress(JSON.parse(saved));
    } catch {}
  }, [id]);

  useEffect(() => {
    try {
      localStorage.setItem(`roadmapx:${id}`, JSON.stringify(progress));
    } catch {}
  }, [progress, id]);

  const toggle = useCallback((stepId: string) => {
    setProgress((p) => ({ ...p, [stepId]: !p[stepId] }));
  }, []);

  if (!roadmap) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: 24 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Roadmap not found</h1>
          <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>The roadmap you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/roadmaps" className="btn-cta" style={{ background: "var(--accent)", color: "white" }}>
            Browse all roadmaps
          </Link>
        </div>
      </div>
    );
  }

  const totalSteps = roadmap.steps.length;

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid var(--card-border)", background: "color-mix(in srgb, var(--card) 50%, transparent)" }}>
        <div className="container-px" style={{ ...container, padding: "48px 24px" }}>
          <Link href="/roadmaps" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--muted)", textDecoration: "none", marginBottom: 24 }}>
            <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Roadmaps
          </Link>

          <div className="roadmap-header-meta" style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 20 }}>
            <span style={{ fontSize: 48 }}>{roadmap.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 8 }}>{roadmap.title}</h1>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                <span className={`diff-${roadmap.difficulty.toLowerCase()}`} style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "4px 10px", borderRadius: 999 }}>
                  {roadmap.difficulty}
                </span>
                <span style={{ fontSize: 14, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                  <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" d="M12 6v6l4 2" />
                  </svg>
                  {roadmap.estimatedTime}
                </span>
                <span style={{ fontSize: 14, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                  <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {totalSteps} steps
                </span>
              </div>
            </div>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>{roadmap.introduction}</p>
        </div>
      </div>

      <div className="container-px" style={{ ...container, padding: "32px 24px 80px" }}>
        {/* Steps */}
        <div>
          {roadmap.steps.map((step, i) => {
            const done = !!progress[step.id];
            const isOpen = expanded === step.id;

            return (
              <div key={step.id} style={{ display: "flex", gap: 16, position: "relative" }}>
                {/* Vertical line */}
                {i < roadmap.steps.length - 1 && (
                  <div style={{ position: "absolute", left: 15, top: 40, bottom: 0, width: 1, background: done ? "color-mix(in srgb, var(--success) 30%, transparent)" : "var(--card-border)" }} />
                )}

                {/* Step number / check */}
                <button
                  onClick={() => toggle(step.id)}
                  style={{
                    width: 32,
                    height: 32,
                    marginTop: 4,
                    borderRadius: 99,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                    border: done ? "none" : "2px solid var(--card-border)",
                    background: done ? "var(--success)" : "transparent",
                    color: done ? "white" : "var(--muted)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {done ? (
                    <svg style={{ width: 16, height: 16 }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </button>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0, paddingBottom: 24 }}>
                  <button onClick={() => setExpanded(isOpen ? null : step.id)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 0", flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: 16, fontWeight: 600, color: done ? "var(--success)" : "var(--foreground)", textDecoration: done ? "line-through" : "none", textDecorationColor: done ? "color-mix(in srgb, var(--success) 40%, transparent)" : "transparent", margin: 0, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {step.label}
                      </h3>
                      <span style={{ fontSize: 10, fontFamily: "var(--font-geist-mono)", color: "var(--muted)", background: "color-mix(in srgb, var(--card-border) 60%, transparent)", padding: "2px 8px", borderRadius: 6, flexShrink: 0 }}>
                        {step.tool}
                      </span>
                      <svg
                        style={{ width: 16, height: 16, color: "var(--muted)", flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ marginTop: 12, padding: 20, borderRadius: 12, background: "var(--card)", border: "1px solid var(--card-border)" }}>
                      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{step.description}</p>
                      {step.url && (
                        <a
                          href={step.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, fontSize: 14, color: "var(--accent)", textDecoration: "none" }}
                        >
                          Official docs
                          <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "var(--background)" }}>
        <div className="container-px" style={{ maxWidth: 768, margin: "0 auto", padding: "40px 24px", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 8 }}>
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
