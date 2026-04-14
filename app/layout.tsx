import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Tech Solution",
  description: "Insurance Leads & Data Vendor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <header className="navbar">

          {/* LOGO SECTION */}
          <div className="logo">
            <img src="/logo.png" alt="Logo" className="logo-img" />

            <div className="logo-text">
              <div className="brand-name">Next Tech Solution</div>
              <div className="brand-tag">Insurance Leads & Data Vendor</div>
            </div>
          </div>

          {/* MENU */}
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>

        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}