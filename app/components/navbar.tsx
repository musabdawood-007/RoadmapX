"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/theme-provider";
import { useState, useEffect } from "react";

const nav: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  borderBottom: "1px solid var(--card-border)",
  background: "color-mix(in srgb, var(--background) 85%, transparent)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const inner: React.CSSProperties = {
  maxWidth: 1152,
  margin: "0 auto",
  paddingLeft: 24,
  paddingRight: 24,
  height: 52,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const navLink = (active: boolean): React.CSSProperties => ({
  padding: "6px 14px",
  borderRadius: 8,
  fontSize: 14,
  fontWeight: active ? 600 : 400,
  color: active ? "var(--accent)" : "var(--muted)",
  background: active ? "var(--accent-light)" : "transparent",
  textDecoration: "none",
  transition: "all 0.2s",
});

const themeBtn: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--muted)",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s",
};

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";
  const isBrowse = pathname === "/roadmaps";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav style={nav}>
      <div style={inner}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", textDecoration: "none", color: "var(--foreground)" }}>
          <span style={{ width: 30, height: 30, borderRadius: 8, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-.75a2.4 2.4 0 01-2.884 2.436l-.503-.145a2.4 2.4 0 00-1.242.145l-.503.145a2.4 2.4 0 01-2.884-2.436l.503-3.014a2.4 2.4 0 00-.145-1.242l-.145-.503a2.4 2.4 0 012.436-2.884l3.014.503a2.4 2.4 0 001.242.145l.503-.145a2.4 2.4 0 012.884 2.436l-.503 3.014a2.4 2.4 0 00.145 1.242l.145.503a2.4 2.4 0 01-2.436 2.884l-3.014-.503a2.4 2.4 0 00-1.242-.145" />
            </svg>
          </span>
          <span>RoadmapX</span>
        </Link>

        {/* Desktop */}
        <div className="desktop-nav" style={{ alignItems: "center", gap: 4 }}>
          <Link href="/" style={navLink(isHome)}>Home</Link>
          <Link href="/roadmaps" style={navLink(isBrowse)}>Browse</Link>
          <button onClick={toggle} style={{ ...themeBtn, marginLeft: 8 }} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? (
              <svg style={{ width: 15, height: 15 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg style={{ width: 15, height: 15 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mobile-controls" style={{ alignItems: "center", gap: 4 }}>
          <button onClick={toggle} style={themeBtn} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? (
              <svg style={{ width: 15, height: 15 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg style={{ width: 15, height: 15 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={themeBtn} aria-label="Toggle menu">
            <svg style={{ width: 18, height: 18 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <Link href="/" style={{ display: "block", width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 15, fontWeight: isHome ? 600 : 400, color: isHome ? "var(--accent)" : "var(--foreground)", background: isHome ? "var(--accent-light)" : "transparent", textDecoration: "none", transition: "all 0.2s" }}>
          Home
        </Link>
        <Link href="/roadmaps" style={{ display: "block", width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 15, fontWeight: isBrowse ? 600 : 400, color: isBrowse ? "var(--accent)" : "var(--foreground)", background: isBrowse ? "var(--accent-light)" : "transparent", textDecoration: "none", transition: "all 0.2s" }}>
          Browse
        </Link>
      </div>
    </nav>
  );
}
