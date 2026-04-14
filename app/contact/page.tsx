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
    <div style={{ padding: 60, textAlign: "center" }}>

      <h1>Contact Us</h1>

      <form onSubmit={sendEmail} style={formStyle}>

        <input placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />

        <input placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />

        <textarea placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, height: 120 }}
        />

        <button style={buttonStyle}>Send</button>

      </form>

    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  maxWidth: 400,
  margin: "auto"
};

const inputStyle = {
  padding: 12,
  borderRadius: 8,
  border: "1px solid #333",
  background: "#070b14",
  color: "white"
};

const buttonStyle = {
  padding: 12,
  background: "#22c55e",
  border: "none",
  borderRadius: 8,
  color: "white",
  cursor: "pointer"
};