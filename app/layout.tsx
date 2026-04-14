import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#070b14", color: "white" }}>

        {/* PREMIUM NAVBAR */}
        <div style={navStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.png" style={{ height: 40 }} />
            <h3 style={{ margin: 0 }}>Next Tech Solution</h3>
          </div>

          <div style={links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div style={{ paddingTop: 80 }}>
          {children}
        </div>

      </body>
    </html>
  );
}

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 40px",
  background: "rgba(10,15,30,0.85)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  zIndex: 1000,
};

const links = {
  display: "flex",
  gap: 20,
  alignItems: "center",
};