export default function Home() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>
          High Quality Insurance Leads
        </h1>

        <p style={styles.subtitle}>
          Final Expense, Medicare & USA Targeted Insurance Data for Call Centers & Agencies
        </p>
      </div>

      {/* FEATURE BOXES */}
      <div style={styles.boxContainer}>

        <div style={styles.box}>
          <h2>Final Expense Leads</h2>
          <p>High intent insurance buyers ready for conversion.</p>
        </div>

        <div style={styles.box}>
          <h2>USA Targeted Data</h2>
          <p>Verified and filtered leads from USA market.</p>
        </div>

        <div style={styles.box}>
          <h2>Premium Quality</h2>
          <p>Clean, validated and high conversion data sets.</p>
        </div>

      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <h2>Grow Your Insurance Business Today</h2>
        <p>Contact us to get high quality leads instantly.</p>

        <a href="/contact" style={styles.button}>
          Get Started
        </a>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/923091003892"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp
      </a>

    </div>
  );
}

/* STYLES */
const styles: any = {
  page: {
    background: "#070b14",
    color: "white",
    minHeight: "100vh",
    fontFamily: "system-ui",
    padding: "60px 20px"
  },

  hero: {
    textAlign: "center",
    marginBottom: 60
  },

  title: {
    fontSize: 50,
    marginBottom: 10
  },

  subtitle: {
    color: "#cbd5e1",
    maxWidth: 700,
    margin: "0 auto"
  },

  boxContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
    marginTop: 50
  },

  box: {
    width: 280,
    padding: 25,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 15
  },

  cta: {
    textAlign: "center",
    marginTop: 80,
    padding: 50,
    background: "linear-gradient(135deg,#1e3a8a,#070b14)",
    borderRadius: 20
  },

  button: {
    display: "inline-block",
    marginTop: 20,
    padding: "12px 25px",
    background: "#22c55e",
    color: "white",
    borderRadius: 30,
    textDecoration: "none",
    fontWeight: "bold"
  },

  whatsapp: {
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "#25D366",
    padding: "14px 18px",
    borderRadius: 50,
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};