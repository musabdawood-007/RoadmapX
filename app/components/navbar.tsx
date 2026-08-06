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
  background: "color-mix(in srgb, var(--background) 80%, transparent)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
};

const inner: React.CSSProperties = {
  maxWidth: 1152,
  margin: "0 auto",
  paddingLeft: 24,
  paddingRight: 24,
  height: 56,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const navLink = (active: boolean): React.CSSProperties => ({
  padding: "8px 16px",
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 500,
  color: active ? "var(--accent)" : "var(--muted)",
  background: active ? "var(--accent-light)" : "transparent",
  textDecoration: "none",
  transition: "all 0.2s",
});

const themeBtn: React.CSSProperties = {
  width: 36,
  height: 36,
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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em", textDecoration: "none", color: "var(--foreground)" }}>
          <span style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 900, boxShadow: "0 4px 12px color-mix(in srgb, var(--accent) 20%, transparent)" }}>
            R
          </span>
          <span>RoadmapX</span>
        </Link>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Link href="/" style={navLink(isHome)}>Home</Link>
          <Link href="/roadmaps" style={navLink(isBrowse)}>Browse</Link>
          <button onClick={toggle} style={{ ...themeBtn, marginLeft: 8 }} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? (
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ ...themeBtn, display: "none" }} aria-label="Toggle menu">
            <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
