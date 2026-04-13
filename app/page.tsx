"use client";

import type { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <h1 style={styles.title}>High Quality Insurance Leads</h1>
        <p style={styles.subtitle}>
          Final Expense, Medicare & USA Targeted Insurance Data
        </p>
      </div>

      <div style={styles.boxContainer}>

        <div style={styles.box}>
          <h2>Final Expense Leads</h2>
          <p>High intent insurance buyers ready to convert.</p>
        </div>

        <div style={styles.box}>
          <h2>USA Targeted Data</h2>
          <p>Verified and filtered insurance leads.</p>
        </div>

        <div style={styles.box}>
          <h2>Premium Quality</h2>
          <p>High conversion data for agencies & call centers.</p>
        </div>

      </div>

      <div style={styles.cta}>
        <h2>Grow Your Business Today</h2>
        <p>Contact us for premium leads.</p>

        <a href="/contact" style={styles.button}>
          Get Started
        </a>
      </div>

      <a
        href="https://wa.me/923091003892"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp
      </a>

    </div>
  );
}

/* ✅ PROPER TYPE FIX */
const styles: Record<string, CSSProperties> = {
  page: {
    background: "#070b14",
    color: "white",
    minHeight: "100vh",
    fontFamily: "system-ui",
    padding: "60px 20px"
  },

  hero: {
    textAlign: "center",
    marginBottom: 60
  },

  title: {
    fontSize: 50
  },

  subtitle: {
    color: "#cbd5e1",
    maxWidth: 700,
    margin: "10px auto"
  },

  boxContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
    marginTop: 50
  },

  box: {
    width: 280,
    padding: 25,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 15
  },

  cta: {
    textAlign: "center",
    marginTop: 80,
    padding: 50,
    background: "linear-gradient(135deg,#1e3a8a,#070b14)",
    borderRadius: 20
  },

  button: {
    display: "inline-block",
    marginTop: 20,
    padding: "12px 25px",
    background: "#22c55e",
    color: "white",
    borderRadius: 30,
    textDecoration: "none",
    fontWeight: "bold"
  },

  whatsapp: {
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "#25D366",
    padding: "14px 18px",
    borderRadius: 50,
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    zIndex: 999
  }
};