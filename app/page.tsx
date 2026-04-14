"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premium Insurance Leads That Convert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Final Expense • Medicare • Life Insurance • Verified Data Vendor
        </motion.p>

        <motion.a
          href="/contact"
          className="btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          Get Leads Now
        </motion.a>

      </section>

      {/* SERVICES */}
      <section className="section">

        <h2 className="title">Our Services</h2>

        <div className="grid">

          {[
            {
              title: "Final Expense Leads",
              desc: "High intent insurance buyers ready to convert"
            },
            {
              title: "Life Insurance Leads",
              desc: "Verified USA targeted insurance prospects"
            },
            {
              title: "Data Vendor Services",
              desc: "Real-time lead IDs for call centers"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        className="cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Scale Your Insurance Business?</h2>
        <p>Join agencies already closing more deals with our data</p>
        <a href="/contact" className="btn">Contact Us</a>
      </motion.section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/923091003892"
        className="whatsapp"
        target="_blank"
      >
        WhatsApp
      </a>

    </div>
  );
}