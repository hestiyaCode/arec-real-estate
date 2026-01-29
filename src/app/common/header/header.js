"use client";
import { useState } from "react";
import Link from "next/link";
import styles from './header.module.css';
import { ChevronDown } from "lucide-react";

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

            <li className={styles.dropdownItem}>
              <div className={styles.menuTitle}>
                Projects <ChevronDown size={14} className={styles.chevron} />
              </div>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/projects/holiday-homes" onClick={closeMenu}>Holiday Homes</Link></li>
                <li><Link href="/projects/commercial" onClick={closeMenu}>Commercial Properties</Link></li>
                <li><Link href="/premiumProperties" onClick={closeMenu}>Premium Properties</Link></li>
              </ul>
            </li>

            <li><Link href="/InsightsAndBlogsPage" onClick={closeMenu}>Insights & Blogs</Link></li>
            <li><Link href="/aboutUs" onClick={closeMenu}>About Us</Link></li>
            <li><Link href="/contact-page" onClick={closeMenu}>Contact</Link></li>
            <li><Link href="/premiumProperties" onClick={closeMenu}>Premium Properties</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.headerAction}>
             <Link href="/contact-page" className={styles.callBtn}>CALL NOW</Link>
          </div>
          <button className={styles.mobileToggle} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}