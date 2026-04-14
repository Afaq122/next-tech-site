import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Tech Solution",
  description: "Premium insurance leads and data vendor services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="brand">
            <div className="brand-mark">N</div>
            <div>
              <div className="brand-name">Next Tech Solution</div>
              <div className="brand-tag">Insurance Leads & Data Vendor</div>
            </div>
          </div>

          <nav className="nav">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/contact" className="nav-link nav-cta">
              Contact
            </Link>
          </nav>
        </header>

        <main className="page-shell">{children}</main>
      </body>
    </html>
  );
}