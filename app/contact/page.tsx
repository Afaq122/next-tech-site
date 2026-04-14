"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

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
      console.error(error);
      alert("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <p className="eyebrow">Get in touch</p>
        <h1>Contact Next Tech Solution</h1>
        <p className="contact-subtitle">
          Send a message and we will reply with lead options, pricing, and next steps.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card contact-info">
          <h2>Reach us directly</h2>
          <p>Fast response for lead buyers, agencies, and call centers.</p>

          <div className="info-item">
            <span className="info-label">Email</span>
            <span>nextgenteamsales@gmail.com</span>
          </div>

          <div className="info-item">
            <span className="info-label">WhatsApp</span>
            <span>+92 309 1003892</span>
          </div>

          <div className="info-item">
            <span className="info-label">Services</span>
            <span>Final Expense, Life Insurance, Lead IDs, Data Vendor</span>
          </div>
        </div>

        <form className="contact-card contact-form" onSubmit={sendEmail}>
          <h2>Send a message</h2>

          <label>
            Name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us what you need"
              rows={6}
              required
            />
          </label>

          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}