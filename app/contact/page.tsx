"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    <div style={pageStyle}>

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
          style={textAreaStyle}
        />

        <button style={buttonStyle}>Send Message</button>

      </form>

    </div>
  );
}

/* 🔥 FINAL SAFE STYLES (NO TYPESCRIPT AT ALL) */

const pageStyle = {
  padding: "60px",
  textAlign: "center",
  background: "#070b14",
  color: "white",
  minHeight: "100vh"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "400px",
  margin: "auto"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#070b14",
  color: "white"
};

const textAreaStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#070b14",
  color: "white",
  height: "120px"
};

const buttonStyle = {
  padding: "12px",
  background: "#22c55e",
  border: "none",
  borderRadius: "8px",
  color: "white",
  cursor: "pointer"
};