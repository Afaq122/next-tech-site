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
    )
    .then(
      () => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log(error);
        alert("Failed to send message");
      }
    );
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
        padding: "18px 60px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <h2 style={{ color: "white", margin: 0 }}>
          Next Tech Solution
        </h2>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{ fontSize: 52, color: "white" }}>
          Insurance Leads That Convert
        </h1>

        <p style={{
          color: "#cbd5e1",
          maxWidth: 700,
          margin: "20px auto"
        }}>
          Final Expense & Medicare leads for USA insurance agencies.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#0b1220"
      }}>
        <h2 style={{ color: "white", fontSize: 32 }}>
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
            style={inputStyle}
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, height: 120 }}
          />

          <button style={{
            padding: 12,
            borderRadius: 10,
            border: "none",
            background: "#22c55e",
            color: "white",
            fontWeight: 700,
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

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/923091003892"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          zIndex: 9999
        }}
      >
        WhatsApp
      </a>

    </div>
  );
}

const inputStyle = {
  padding: 12,
  borderRadius: 10,
  border: "1px solid #334155",
  background: "#070b14",
  color: "white",
  outline: "none"
};