"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.send(
      "service_ck64bdt",
      "template_cal7tuu",
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      "LIQaZ9_RMKrY_RhAq"
    );

    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{
      fontFamily: "Inter, system-ui, Arial",
      background: "#070b14",
      color: "#e5e7eb",
      minHeight: "100vh"
    }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 60px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>

        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: 42, height: 42, borderRadius: 10 }}
          />

          <h2 style={{ margin: 0, color: "white", fontWeight: 900 }}>
            Next Tech Solution
          </h2>
        </div>

        <a href="#contact" style={{
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          padding: "10px 18px",
          borderRadius: "999px",
          color: "white",
          textDecoration: "none",
          fontWeight: 700
        }}>
          Contact
        </a>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "120px 20px",
        background: "radial-gradient(circle at top, #1e3a8a, #070b14 60%)"
      }}>
        <h1 style={{ fontSize: 60, fontWeight: 900, color: "white" }}>
          Insurance Leads That Convert
        </h1>

        <p style={{
          maxWidth: 700,
          margin: "20px auto",
          color: "#cbd5e1",
          fontSize: 18
        }}>
          Final Expense & Medicare leads for USA call centers, brokers, and agencies.
          High-intent, verified, real-time data.
        </p>

        <a href="#contact" style={{
          display: "inline-block",
          marginTop: 20,
          padding: "14px 28px",
          background: "white",
          color: "#0b1220",
          borderRadius: 999,
          fontWeight: 800,
          textDecoration: "none"
        }}>
          Get Leads
        </a>
      </div>

      {/* SERVICES */}
      <div style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "white", fontSize: 34 }}>
          Our Services
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
          marginTop: 40
        }}>

          {[
            {
              title: "Final Expense Leads",
              desc: "High-intent customers ready to buy insurance."
            },
            {
              title: "Medicare Leads",
              desc: "Senior-focused enrollment opportunities."
            }
          ].map((s, i) => (
            <div key={i} style={{
              width: 300,
              background: "rgba(255,255,255,0.05)",
              padding: 25,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              <h3 style={{ color: "white" }}>{s.title}</h3>
              <p style={{ color: "#94a3b8" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div id="contact" style={{
        padding: "80px 20px",
        background: "#0b1220",
        textAlign: "center"
      }}>
        <h2 style={{ color: "white", fontSize: 34 }}>
          Contact Us
        </h2>

        <form
          onSubmit={sendEmail}
          style={{
            maxWidth: 500,
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            gap: 12
          }}
        >
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={input}
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={input}
          />

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...input, height: 120 }}
          />

          <button style={{
            padding: 12,
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
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
        padding: 20,
        color: "#64748b"
      }}>
        © 2026 Next Tech Solution
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "1px solid #334155",
  background: "#070b14",
  color: "white"
};