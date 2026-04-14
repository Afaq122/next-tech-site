"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_ck64bdt",
        "template_cal7tuu",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "LIQaZ9_RMKrY_RhAq"
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch for <b>insurance leads</b>, <b>data vendor services</b>, or business inquiries.
        </p>
      </div>

      {/* CONTAINER */}
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Why Contact Us?</h2>

          <p>✔ High-quality USA insurance leads</p>
          <p>✔ Final Expense & Life Insurance data</p>
          <p>✔ Fast response for agencies & call centers</p>

          <div className="contact-box">
            <p><b>Email:</b> nextgenteamsales@gmail.com</p>
            <p><b>WhatsApp:</b> +92 309 1003892</p>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={sendEmail}>

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </div>
  );
}