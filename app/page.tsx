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
      background: "#070b14",
      color: "#e5e7eb",
      minHeight: "100vh"
    }}>

      {/* NAVBAR */}
      <div style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 60px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        zIndex: 10
      }}>

        {/* LOGO + NAME */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.png"
            alt="Next Tech Solution Logo"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />

          <h2 style={{
            margin: 0,
            fontWeight: 900,
            letterSpacing: "0.5px",
            color: "white"
          }}>
            Next Tech Solution
          </h2>
        </div>

        <a href="#contact" style={{
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          color: "white",
          padding: "10px 18px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 600
        }}>
          Contact Us
        </a>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "130px 20px",
        background: "radial-gradient(circle at top, #1e3a8a, #070b14 60%)"
      }}>
        <h1 style={{
          fontSize: "62px",
          fontWeight: 900,
          marginBottom: "18px",
          color: "white"
        }}>
          High-Quality Insurance Leads
        </h1>

        <p style={{
          maxWidth: "750px",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: 1.7,
          color: "#cbd5e1"
        }}>
          Final Expense & Medicare leads for USA call centers, brokers and insurance agencies.
          High-intent verified data that converts.
        </p>

        <div style={{ marginTop: "35px" }}>
          <a href="#contact" style={{
            background: "white",
            color: "#0b1220",
            padding: "14px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 800,
            marginRight: "10px"
          }}>
            Get Started
          </a>

          <a href="https://wa.me/923000000000" style={{
            border: "1px solid #334155",
            color: "white",
            padding: "14px 28px",
            borderRadius: "999px",
            textDecoration: "none"
          }}>
            WhatsApp
          </a>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "-40px",
        padding: "0 20px"
      }}>
        {[
          "Verified High-Intent Leads",
          "USA Targeted Data",
          "Compliance Focused"
        ].map((item, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "22px 30px",
            borderRadius: "16px",
            minWidth: "220px",
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
          fontSize: "38px",
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
              desc: "High-intent insurance buyers ready to convert."
            },
            {
              title: "Medicare Leads",
              desc: "Senior-focused Medicare enrollment opportunities."
            }
          ].map((s, i) => (
            <div key={i} style={{
              width: "320px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "28px",
              borderRadius: "18px",
              textAlign: "left"
            }}>
              <h3 style={{ color: "white" }}>{s.title}</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div id="contact" style={{
        padding: "90px 20px",
        background: "#0b1220",
        textAlign: "center"
      }}>
        <h2 style={{ color: "white", fontSize: "34px" }}>
          Contact Us
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
          style={{
            maxWidth: "520px",
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px"
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
            style={{ ...inputStyle, height: "120px" }}
          />

          <button style={{
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            color: "white",
            fontWeight: 800,
            cursor: "pointer"
          }}>
            Send Message
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "25px",
        color: "#64748b",
        fontSize: "14px"
      }}>
        © 2026 Next Tech Solution. All rights reserved.
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0b1220",
  color: "white"
};