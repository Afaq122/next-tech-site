"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <div style={{
      fontFamily: "Inter, system-ui, Arial",
      background: "#0b1220",
      margin: 0,
      color: "#e5e7eb"
    }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        background: "rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <h2 style={{ color: "white" }}>Next Tech Solution</h2>

        <a href="#contact" style={{
          background: "#22c55e",
          color: "white",
          padding: "10px 18px",
          borderRadius: "999px",
          textDecoration: "none"
        }}>
          Contact
        </a>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "120px 20px",
        animation: "fadeIn 1s ease",
        background: "radial-gradient(circle at top, #1e3a8a, #0b1220 60%)"
      }}>
        <h1 style={{
          fontSize: "58px",
          color: "white"
        }}>
          High-Quality Insurance Leads
        </h1>

        <p style={{
          maxWidth: "700px",
          margin: "20px auto",
          color: "#cbd5e1",
          lineHeight: "1.6"
        }}>
          Final Expense, Medicare Leads for USA Call Centers,
          Brokers & Insurance Agencies.
        </p>
      </div>

      {/* STATS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "-50px",
        flexWrap: "wrap",
        padding: "0 20px"
      }}>
        {[
          "Verified Leads",
          "High Conversion Rate",
          "Compliance Ready"
        ].map((item, i) => (
          <div key={i} style={{
            background: "#111827",
            border: "1px solid #1f2937",
            padding: "20px 30px",
            borderRadius: "14px",
            minWidth: "200px",
            textAlign: "center"
          }}>
            <h3 style={{ margin: 0, color: "white" }}>{item}</h3>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "34px",
          color: "white",
          marginBottom: "50px"
        }}>
          Our Services
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap"
        }}>
          {[
            {
              title: "Final Expense Leads",
              desc: "High intent insurance leads for USA agents."
            },
            {
              title: "Medicare Leads",
              desc: "Senior-focused Medicare enrollment leads."
            }
          ].map((s, i) => (
            <div key={i} style={{
              width: "300px",
              background: "#111827",
              border: "1px solid #1f2937",
              padding: "28px",
              borderRadius: "16px",
              textAlign: "left",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <h3 style={{ color: "white" }}>{s.title}</h3>
              <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div id="contact" style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#111827"
      }}>
        <h2>Contact Us</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (we’ll connect email later)");
          }}
          style={{
            maxWidth: "500px",
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />

          <input
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, height: "100px" }}
          />

          <button style={{
            background: "#22c55e",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Send Message
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        color: "#6b7280"
      }}>
        © 2026 Next Tech Solution
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #374151",
  background: "#0b1220",
  color: "white"
};