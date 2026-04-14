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
    <div className="contact">

      <h1>Contact Us</h1>

      <form onSubmit={sendEmail} className="form">

        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}