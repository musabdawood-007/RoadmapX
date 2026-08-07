import Link from "next/link";
import { featuredMeta, roadmapMeta } from "@/roadmaps/index";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Structured Paths",
    desc: "Every roadmap is hand-authored with the right tools and skills in the order you actually need them.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.996.176-1.888.583-2.632 1.165A4.5 4.5 0 003.75 7.5v10.5a4.5 4.5 0 004.5 4.5h10.5a4.5 4.5 0 004.5-4.5V7.5a4.5 4.5 0 00-.618-2.102 4.5 4.5 0 00-2.632-1.165" />
      </svg>
    ),
    title: "Track Progress",
    desc: "Mark steps complete as you go. Your progress saves locally — no account needed.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "59 Career Paths",
    desc: "From Web Dev to Marine Biology — discover the exact roadmap for the role you want.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Always Free",
    desc: "Open source, no paywalls, no sign-ups. Everything is free and stays free.",
  },
];

const categories = [
  { name: "Engineering", count: roadmapMeta.filter((r) => ["Engineering", "Tech"].includes(r.category)).length || 30, color: "bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400" },
  { name: "Data & AI", count: roadmapMeta.filter((r) => r.category === "Data").length || 8, color: "bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400" },
  { name: "Design", count: roadmapMeta.filter((r) => r.category === "Design").length || 4, color: "bg-pink-500/10 text-pink-500 dark:bg-pink-400/10 dark:text-pink-400" },
  { name: "Business", count: roadmapMeta.filter((r) => r.category === "Business").length || 6, color: "bg-amber-500/10 text-amber-500 dark:bg-amber-400/10 dark:text-amber-400" },
  { name: "Science", count: roadmapMeta.filter((r) => r.category === "Science").length || 5, color: "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400" },
];

const container: React.CSSProperties = {
  maxWidth: 1024,
  margin: "0 auto",
  paddingLeft: 24,
  paddingRight: 24,
};

const containerWide: React.CSSProperties = {
  maxWidth: 1152,
  margin: "0 auto",
  paddingLeft: 24,
  paddingRight: 24,
};

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section className="hero-mesh" style={{ position: "relative", overflow: "hidden" }}>
        <div className="noise-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="hero-section container-px" style={{ ...containerWide, position: "relative", zIndex: 10, paddingTop: 112, paddingBottom: 96 }}>
          {/* Badge */}
          <div className="badge-shimmer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, background: "var(--accent-light)", border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)", marginBottom: 32 }}>
            <span className="animate-pulse-soft" style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} />
            <span style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>{roadmapMeta.length} Career Paths Available</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: "clamp(32px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 24, maxWidth: 700 }}>
            Your next role.
            <br />
            <span className="gradient-text">Mapped out.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" style={{ fontSize: 18, color: "var(--muted)", maxWidth: 520, marginBottom: 40, lineHeight: 1.7 }}>
            Concise roadmaps for {roadmapMeta.length} roles. Tools, frameworks, and skills — in the order you actually need them.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <Link
              href="/roadmaps"
              className="btn-cta"
              style={{ background: "var(--accent)", color: "white", boxShadow: "0 10px 30px color-mix(in srgb, var(--accent) 25%, transparent)" }}
            >
              Browse Roadmaps
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/roadmaps"
              className="btn-cta-secondary"
              style={{ border: "1px solid var(--card-border)", color: "var(--foreground)" }}
            >
              View All {roadmapMeta.length}
            </Link>
          </div>

          {/* Category pills */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
            {categories.map((cat) => (
              <span key={cat.name} className={cat.color} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 12, fontSize: 12, fontWeight: 500 }}>
                {cat.name}
                <span style={{ opacity: 0.5 }}>{cat.count}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="bg-gradient-to-t from-background to-transparent" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 128, background: "linear-gradient(to top, var(--background), transparent)" }} />
      </section>

      {/* Features */}
      <section className="section-padding" style={{ ...containerWide, paddingTop: 80, paddingBottom: 112 }}>
        <div className="stagger-children grid-4" style={{ gap: 20 }}>
          {features.map((f) => (
            <div key={f.title} className="group" style={{ padding: 24, borderRadius: 16, border: "1px solid var(--card-border)", background: "var(--card)", transition: "all 0.3s" }}>
              <div className="group-hover:bg-accent group-hover:text-white" style={{ width: 40, height: 40, borderRadius: 12, background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16, transition: "all 0.3s" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Roadmaps */}
      <section className="section-padding" style={{ ...containerWide, paddingBottom: 112 }}>
        <div className="featured-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
          <div>
            <h2 style={{ fontSize: 30, fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 4 }}>Start Here</h2>
            <p style={{ fontSize: 14, color: "var(--muted)" }}>Popular paths to get you going</p>
          </div>
          <Link
            href="/roadmaps"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}
          >
            View all
            <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
        <div className="stagger-children grid-featured" style={{ gap: 20 }}>
          {featuredMeta.map((r) => (
            <Link
              key={r.id}
              href={`/roadmap/${r.id}`}
              className="group"
              style={{ display: "block", position: "relative", padding: 24, borderRadius: 16, border: "1px solid var(--card-border)", background: "var(--card)", textDecoration: "none", color: "var(--foreground)", transition: "all 0.3s" }}
            >
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
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--card-border)", borderBottom: "1px solid var(--card-border)", background: "color-mix(in srgb, var(--card) 50%, transparent)" }}>
        <div className="stats-section" style={{ ...containerWide, padding: "64px 24px" }}>
          <div className="grid-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}>
            <div style={{ textAlign: "center" }}>
              <div className="gradient-text" style={{ fontSize: 48, fontWeight: 900, marginBottom: 8 }}>{roadmapMeta.length}</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>Career Paths</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="gradient-text" style={{ fontSize: 48, fontWeight: 900, marginBottom: 8 }}>4</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>Difficulty Levels</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="gradient-text" style={{ fontSize: 48, fontWeight: 900, marginBottom: 8 }}>100%</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>Free & Open</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="gradient-text" style={{ fontSize: 48, fontWeight: 900, marginBottom: 8 }}>0</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>Sign-ups Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ ...containerWide, padding: "80px 24px" }}>
        <div className="cta-banner" style={{ position: "relative", overflow: "hidden", borderRadius: 24, background: "linear-gradient(135deg, var(--accent), #2563eb, #4f46e5)", padding: "64px 40px", textAlign: "center" }}>
          <div className="noise-overlay" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
          <div style={{ position: "relative", zIndex: 10 }}>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 900, color: "white", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Ready to start learning?
            </h2>
            <p style={{ color: "#bfdbfe", fontSize: 18, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6, padding: "0 16px" }}>
              Pick a roadmap and start building your skills today. No accounts, no paywalls — just clear paths forward.
            </p>
            <Link
              href="/roadmaps"
              className="btn-cta"
              style={{ background: "white", color: "var(--accent)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", fontWeight: 700 }}
            >
              Browse All Roadmaps
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--background)" }}>
        <div className="container-px" style={{ ...containerWide, padding: "40px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>
              © 2026 Copyright by{" "}
              <a href="https://musab-projects.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                Musab Projects
              </a>
            </span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>•</span>
            <span style={{ fontSize: 12, color: "var(--muted)", fontStyle: "italic" }}>More roadmaps coming soon</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
