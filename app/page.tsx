"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { CSSProperties } from "react";

export default function Contact() {
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

    alert("Message sent!");
  };

  return (
    <div style={page}>

      <h1>Contact Us</h1>

      <form onSubmit={sendEmail} style={formStyle}>

        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />

        <textarea
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={textareaStyle}
        />

        <button style={buttonStyle}>Send Message</button>

      </form>

    </div>
  );
}

/* ✅ PROPER TYPE SAFE STYLES */
const page: CSSProperties = {
  padding: 60,
  textAlign: "center"
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  maxWidth: 400,
  margin: "auto"
};

const inputStyle: CSSProperties = {
  padding: 12,
  borderRadius: 8,
  border: "1px solid #333",
  background: "#070b14",
  color: "white"
};

const textareaStyle: CSSProperties = {
  padding: 12,
  borderRadius: 8,
  border: "1px solid #333",
  background: "#070b14",
  color: "white",
  height: 120
};

const buttonStyle: CSSProperties = {
  padding: 12,
  background: "#22c55e",
  border: "none",
  borderRadius: 8,
  color: "white",
  cursor: "pointer"
};