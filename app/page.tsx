"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Premium Insurance Leads That Convert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Final Expense • Life Insurance • Medicare • Verified Data Vendor
        </motion.p>

        <motion.a
          href="/contact"
          className="btn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Get Started
        </motion.a>

      </section>

      {/* FEATURES */}
      <section className="features">

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Final Expense Leads</h3>
          <p>High intent insurance buyers ready to close.</p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Life Insurance Leads</h3>
          <p>Verified USA targeted insurance prospects.</p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Data Vendor</h3>
          <p>Real-time lead IDs for call centers.</p>
        </motion.div>

      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Scale Your Insurance Business Today</h2>
        <p>Join agencies already closing more deals</p>
      </section>

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