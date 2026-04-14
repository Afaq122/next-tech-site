export default function Home() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Premium Insurance Leads</h1>
        <p>Final Expense • Medicare • Life Insurance • Data Vendor</p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="card">
          <h3>Final Expense Leads</h3>
          <p>High intent buyers ready to convert.</p>
        </div>

        <div className="card">
          <h3>Life Insurance Leads</h3>
          <p>Verified USA insurance prospects.</p>
        </div>

        <div className="card">
          <h3>Lead Data Vendor</h3>
          <p>Real-time lead IDs for call centers.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Grow Your Insurance Business</h2>
        <a href="/contact" className="btn">Contact Us</a>
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