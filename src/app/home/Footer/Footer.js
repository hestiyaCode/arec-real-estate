"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Footer - 4 Columns Grid */}
        <div className={styles.topFooterGrid}>
          
          {/* Column 1: Brand Info */}
          <div className={styles.column}>
            {/* Small Logo for header */}
            <div className={styles.brandLogoSmall}>
              AREC<span className={styles.greenDot}>.</span>
            </div>
            <p className={styles.brandDesc}>
              Democratizing institutional-grade real estate investing in India. 
              Secure, transparent, and growth-oriented opportunities for everyone.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.icon} />
                <span>hello@arec.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.icon} />
                <span>+91 9911557887</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Insights & Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Invest & Learn */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>Invest</h4>
            <ul className={styles.linkList}>
              <li><Link href="/projects">Explore Projects</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              {/* FAQ Link as requested */}
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/pricing">Fees & Pricing</Link></li>
            </ul>
          </div>

          {/* Column 4: Social & Legal */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>Connect</h4>
            {/* Social Media Links */}
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>

            <h4 className={`${styles.colHeading} ${styles.legalHeading}`}>Legal</h4>
            <ul className={styles.linkList}>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Footer - Copyright & Big Logo */}
        <div className={styles.bottomFooter}>
          <div className={styles.copyrightText}>
            © {currentYear} Aakash Real Estate Company. All rights reserved.
          </div>

          {/* The Big Artistic Logo at the end */}
          <div className={styles.bigWatermarkLogo}>
            AREC
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;