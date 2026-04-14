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
    } catch (err) {
      console.log(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Let’s Work Together</h1>
        <p>
          Get in touch for <b>insurance leads</b>, <b>data solutions</b>,
          or business partnerships.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="contact-container">

        {/* LEFT PANEL */}
        <div className="contact-info animate-left">

          <h2>Why Choose Us?</h2>

          <div className="info-item">✔ High-Quality USA Leads</div>
          <div className="info-item">✔ Final Expense & Medicare Data</div>
          <div className="info-item">✔ Fast Delivery System</div>
          <div className="info-item">✔ Trusted by Agencies</div>

          <div className="contact-box">
            <p><b>Email:</b> nextgenteamsales@gmail.com</p>
            <p><b>WhatsApp:</b> +92 309 1003892</p>
          </div>

        </div>

        {/* FORM */}
        <form className="contact-form animate-right" onSubmit={sendEmail}>

          <h2>Send Message</h2>

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