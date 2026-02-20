"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Added for smart navigation
import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToFaq = (e) => {
    // If we are already on the homepage, just scroll smoothly
    if (pathname === '/') {
      e.preventDefault();
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // If we are on another page, let the default <Link> behavior 
    // take us to "/#faq", which browser handles automatically.
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topFooterGrid}>
          
          {/* Column 1: Brand Info */}
          <div className={styles.column}>
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
                <span>connect@thearec.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.icon} />
                <span>+91 96670 07078</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/aboutUs">About Us</Link></li>
              
              <li><Link href="/InsightsAndBlogsPage">Insights & Blog</Link></li>
              <li><Link href="/contact-page">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Invest & Learn */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>Invest</h4>
            <ul className={styles.linkList}>
              <li><Link href="/projects">Explore Projects</Link></li>
              <li><Link href="/How-it-works-page">How it works?</Link></li>
              
              {/* FIXED LINK: Changed "#faq" to "/#faq" */}
              <li>
                <Link 
                  href="/#faq" 
                  onClick={handleScrollToFaq} 
                  style={{ cursor: 'pointer' }}
                >
                  FAQs
                </Link>
              </li>

              
            </ul>
          </div>

          {/* Column 4: Social & Legal */}
          <div className={styles.column}>
            <h4 className={styles.colHeading}>Connect</h4>
            <div className={styles.socialLinks}>
              <span aria-label="LinkedIn" style={{ cursor: 'default' }}>
                <Linkedin size={20} />
              </span>
              <span aria-label="Twitter" style={{ cursor: 'default' }}>
                <Twitter size={20} />
              </span>
              <span aria-label="Instagram" style={{ cursor: 'default' }}>
                <Instagram size={20} />
              </span>
            </div>

            <h4 className={`${styles.colHeading} ${styles.legalHeading}`}>Legal</h4>
            <ul className={styles.linkList}>
              <li><span>Terms of Service</span></li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomFooter}>
          <div className={styles.copyrightText}>
            © {currentYear} AREC. All rights reserved.
          </div>

          <div className={styles.bigWatermarkLogo}>
            AREC
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;