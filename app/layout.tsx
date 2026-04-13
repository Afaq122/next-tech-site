import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui",
          background: "#070b14",
          color: "white",
        }}
      >
        {/* NAVBAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "18px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <h2 style={{ margin: 0 }}>Next Tech Solution</h2>

          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* PAGE CONTENT (CRITICAL LINE) */}
        <main>{children}</main>
      </body>
    </html>
  );
}