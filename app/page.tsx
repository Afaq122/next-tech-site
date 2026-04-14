"use client";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Premium Insurance Leads That Convert</h1>
        <p>
          Final Expense • Medicare • Life Insurance Leads for USA Agencies
        </p>

        <a href="/contact" className="btn">
          Get Started
        </a>
      </section>

      {/* SERVICES CARDS */}
      <section className="features">

        <div className="card">
          <h2>High-Converting Final Expense Leads</h2>
          <p>
            Reach motivated buyers actively searching for final expense insurance.
          </p>
        </div>

        <div className="card">
          <h2>Exclusive Medicare Leads</h2>
          <p>
            Connect with qualified Medicare prospects ready to enroll.
          </p>
        </div>

        <div className="card">
          <h2>Verified Life Insurance Prospects</h2>
          <p>
            High-quality data designed for agents and call centers.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Scale Your Insurance Business Today</h2>
        <p>Join agencies closing more deals with better data</p>
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