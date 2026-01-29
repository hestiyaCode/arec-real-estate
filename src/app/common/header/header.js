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
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          <div className={styles.logoText}>AREC<span className={styles.dot}>.</span></div>
        </Link>

        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.menuActive : ""}`}>
          <ul>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/How-it-works-page" onClick={closeMenu}>How It Works</Link></li>
            
            {/* Projects Dropdown (Label only, no Link) */}
            <li className={styles.dropdown}>
              <div className={styles.dropLabel}>
                Projects <span className={styles.arrow}>▼</span>
              </div>
              <ul className={styles.dropdownContent}>
                <li><Link href="/holiday-properties" onClick={closeMenu}>Holiday</Link></li>
                <li><Link href="/commercialproperties" onClick={closeMenu}>Commercial Properties</Link></li>
                <li><Link href="/premiumProperties" onClick={closeMenu}>Premium Properties</Link></li>
              </ul>
            </li>

            <li><Link href="/InsightsAndBlogsPage" onClick={closeMenu}>Insights & Blogs</Link></li>
            
            <li><Link href="/aboutUs" onClick={closeMenu}>About Us</Link></li>
            <li><Link href="/contact-page" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact-page" className={styles.callBtn}>CALL NOW</Link>
          <button className={styles.mobileToggle} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}