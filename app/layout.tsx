import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Tech Solution",
  description: "Insurance Leads & Data Vendor"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <header className="navbar">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
            <span>Next Tech Solution</span>
          </div>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main>{children}</main>

      </body>
    </html>
  );
}