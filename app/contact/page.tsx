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
    <div style={styles.page}>

      <h1>Contact Us</h1>

      <form onSubmit={sendEmail} style={styles.form}>

        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={styles.input}
        />

        <textarea
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={styles.textarea}
        />

        <button style={styles.button}>Send Message</button>

      </form>

    </div>
  );
}

/* ✅ NO TYPESCRIPT STYLING AT ALL (100% SAFE) */
const styles = {
  page: {
    padding: 60,
    textAlign: "center",
    background: "#070b14",
    color: "white",
    minHeight: "100vh"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: 400,
    margin: "auto"
  },

  input: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #333",
    background: "#070b14",
    color: "white"
  },

  textarea: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #333",
    background: "#070b14",
    color: "white",
    height: 120
  },

  button: {
    padding: 12,
    background: "#22c55e",
    border: "none",
    borderRadius: 8,
    color: "white",
    cursor: "pointer"
  }
};