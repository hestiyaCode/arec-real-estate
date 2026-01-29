"use client";
import React from 'react';
import styles from './about-us.module.css';
import { Building2, Umbrella, Home, Users, ShieldCheck, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. Hero Artistic Header */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.revealTag}>Est. 2024</span>
          <h1 className={styles.mainTitle}>
            Redefining <span className={styles.greenText}>Ownership.</span><br />
            Architecting <span className={styles.italic}>Wealth.</span>
          </h1>
          <p className={styles.heroDesc}>
            AREC isn't just a platform; it's a movement to break the traditional barriers 
            of real estate, making luxury assets accessible to every dreamer in India.
          </p>
        </div>
        <div className={styles.heroImageFrame}>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Architecture" />
        </div>
      </section>

      {/* 2. The Vision: Overlapping Layout */}
      <section className={styles.visionSection}>
        <div className={styles.visionImage}>
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" alt="Modern Office" />
        </div>
        <div className={styles.visionText}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p>
            The Indian real estate market has long been a "playbook for the few." High entry costs 
            and legal complexities kept the common man away from high-yield assets. 
          </p>
          <p>
            <strong>AREC changes the game.</strong> By fragmenting premium assets into digital tokens, 
            we allow you to own a piece of a Grade-A commercial building or a luxury holiday home 
            with the same ease as buying a stock.
          </p>
        </div>
      </section>

      {/* 3. The Core Offerings: Interactive Cards */}
      <section className={styles.offerings}>
        <div className={styles.container}>
          <div className={styles.centeredHeader}>
            <h2 className={styles.sectionTitle}>Curated Asset Classes</h2>
            <p>Diverse opportunities. Singular transparency.</p>
          </div>
          
          <div className={styles.offeringGrid}>
  {/* Commercial Hubs Card */}
  <Link href="/commercialproperties" className={styles.cardLink}>
    <div className={styles.offeringCard}>
      <div className={styles.cardImg}>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600" alt="Commercial" />
      </div>
      <div className={styles.cardInfo}>
        <Building2 className={styles.cardIcon} />
        <h3>Commercial Hubs</h3>
        <p>Grade-A office spaces leased to MNCs with steady monthly rentals.</p>
      </div>
    </div>
  </Link>

  {/* Holiday Escapes Card */}
  <Link href="/holiday-properties" className={styles.cardLink}>
    <div className={styles.offeringCard}>
      <div className={styles.cardImg}>
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600" alt="Holiday" />
      </div>
      <div className={styles.cardInfo}>
        <Umbrella className={styles.cardIcon} />
        <h3>Holiday Escapes</h3>
        <p>Boutique villas and resort fragments in high-tourism zones.</p>
      </div>
    </div>
  </Link>

  {/* Premium Living Card */}
  <Link href="/premiumProperties" className={styles.cardLink}>
    <div className={styles.offeringCard}>
      <div className={styles.cardImg}>
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600" alt="Residential" />
      </div>
      <div className={styles.cardInfo}>
        <Home className={styles.cardIcon} />
        <h3>Premium Living</h3>
        <p>Gated communities and luxury residential projects in growing metros.</p>
      </div>
    </div>
  </Link>
</div>
        </div>
      </section>

      {/* 4. Why AREC: Artistic Feature List */}
      <section className={styles.whyArec}>
        <div className={styles.container}>
          <div className={styles.whyWrapper}>
            <div className={styles.whyTitleBox}>
              <h2 className={styles.sectionTitle}>Why Choose <br/><span>AREC?</span></h2>
            </div>
            <div className={styles.whyGrid}>
              <div className={styles.featureItem}>
                <ShieldCheck size={32} />
                <h4>Legally Vetted</h4>
                <p>Every fragment is backed by stringent legal due diligence.</p>
              </div>
              <div className={styles.featureItem}>
                <Zap size={32} />
                <h4>Instant Liquidity</h4>
                <p>Trade your property fragments on our platform anytime.</p>
              </div>
              <div className={styles.featureItem}>
                <Globe size={32} />
                <h4>End-to-End Mgmt</h4>
                <p>We handle tenants and maintenance; you just collect yields.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2>Ready to be a part of the future?</h2>
          <p>Our expert team will help you navigate your first fragment purchase.</p>
          <Link href="/contact-page" className={styles.mainCta}>
            Connect with an Advisor <Users size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;