"use client";

export default function Home() {
  return (
    <div style={{ padding: 60 }}>

      {/* HERO */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h1 style={{ fontSize: 50 }}>
          Premium Insurance Leads & Data Vendor
        </h1>

        <p style={{ color: "#cbd5e1", maxWidth: 700, margin: "20px auto" }}>
          Final Expense, Life Insurance, Medicare Leads & Verified Lead IDs for USA Call Centers
        </p>
      </div>

      {/* SERVICES */}
      <h2 style={{ marginTop: 80, textAlign: "center" }}>Our Services</h2>

      <div style={boxContainer}>

        <div style={box}>
          <h3>Final Expense Leads</h3>
          <p>High intent insurance buyers ready to convert.</p>
        </div>

        <div style={box}>
          <h3>Life Insurance Leads</h3>
          <p>Quality leads for life insurance agencies.</p>
        </div>

        <div style={box}>
          <h3>Data Vendor / Lead IDs</h3>
          <p>Verified lead IDs and real-time data delivery.</p>
        </div>

      </div>

      {/* CTA */}
      <div style={cta}>
        <h2>Grow Your Insurance Business Today</h2>
        <a href="/contact" style={button}>Contact Us</a>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/923091003892" style={whatsapp}>
        WhatsApp
      </a>

    </div>
  );
}

const boxContainer = {
  display: "flex",
  justifyContent: "center",
  gap: 20,
  flexWrap: "wrap",
  marginTop: 40
};

const box = {
  width: 280,
  padding: 25,
  background: "rgba(255,255,255,0.05)",
  borderRadius: 15,
  border: "1px solid rgba(255,255,255,0.08)"
};

const cta = {
  textAlign: "center",
  marginTop: 80,
  padding: 50,
  background: "linear-gradient(135deg,#1e3a8a,#070b14)",
  borderRadius: 20
};

const button = {
  display: "inline-block",
  marginTop: 20,
  padding: "12px 25px",
  background: "#22c55e",
  color: "white",
  borderRadius: 30,
  textDecoration: "none"
};

const whatsapp = {
  position: "fixed",
  bottom: 20,
  right: 20,
  background: "#25D366",
  padding: "14px 18px",
  borderRadius: 50,
  color: "white",
  textDecoration: "none"
};