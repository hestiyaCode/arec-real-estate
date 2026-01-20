"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Branding Area */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoText}>
            AREC<span className={styles.dot}>.</span>
          </div>
          <div className={styles.logoSub}>Aakash Real Estate Company</div>
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
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button & Toggle */}
        <div className={styles.actions}>
          <div className={styles.headerAction}>
            <a href="tel:+91XXXXXXXXXX" className={styles.callBtn}>
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
