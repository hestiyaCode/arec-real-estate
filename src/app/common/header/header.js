"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // WhatsApp Number Configuration (Bina '+' aur space ke)
  const whatsappNumber = "919911557887"; 
  
  // Pre-filled message (Optional - Jab user chat open karega to ye likha hua aayega)
  const message = "Hello, I am interested in AREC investment opportunities.";

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Branding Area */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoText}>
            AREC<span className={styles.dot}>.</span>
          </div>
          {/* <div className={styles.logoSub}>Aakash Real Estate Company</div> */}
        </Link>

        {/* Navigation Menu */}
        <nav
          className={`${styles.navMenu} ${isMenuOpen ? styles.menuActive : ""}`}
        >
          <ul>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-page" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button & Toggle */}
        <div className={styles.actions}>
          <div className={styles.headerAction}>
            {/* WhatsApp Link Wrapper */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              className={styles.callBtn}
              target="_blank"           // Naye tab me open hoga
              rel="noopener noreferrer" // Security best practice
            >
              Call Now
            </a>
          </div>

          <button
            className={`${styles.mobileToggle} ${isMenuOpen ? styles.toggleOpen : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}