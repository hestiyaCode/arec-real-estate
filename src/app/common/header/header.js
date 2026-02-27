"use client";
import { useState } from "react";
import Link from "next/link";
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          <div className={styles.logoText}>AREC<span className={styles.dot}>.</span></div>
        </Link>

        {/* Navigation Menu */}
        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.menuActive : ""}`}>
          <ul>
            <li><Link href="/aboutUs" onClick={closeMenu}>About Us</Link></li>
            <li><Link href="/How-it-works-page" onClick={closeMenu}>How It Works</Link></li>
            <li><Link href="/holiday-properties" onClick={closeMenu}>Holiday Properties</Link></li>
            <li><Link href="/commercialproperties" onClick={closeMenu}>Commercial Buildings</Link></li>
            <li><Link href="/premiumProperites" onClick={closeMenu}>Exclusive Property</Link></li>
            <li><Link href="/InsightsAndBlogsPage" onClick={closeMenu}>Insights & Blogs</Link></li>
            <li><Link href="/contact-page" onClick={closeMenu}>Contact</Link></li>
            <li><Link href="/career" onClick={closeMenu}>Career</Link></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* UPDATED: Calling link added here */}
          <a href="tel:+919667007078" className={styles.callBtn}>CALL NOW</a>
          
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}