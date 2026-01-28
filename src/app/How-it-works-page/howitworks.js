import React from 'react';
import styles from './howitworks.module.css';

const HowItWorksarec = () => {
  return (
    /* This wrapper ensures the background is white across the whole screen */
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>How It Works</h1>
          <p className={styles.subtitle}>Revolutionizing Real Estate through Digital Tokenization</p>
        </header>

        {/* Tokenization Section */}
        <section className={styles.section}>
          <div className={styles.content}>
            <div className={styles.badge}>Step 1</div>
            <h2>Understanding Property Tokenization</h2>
            <p>
              Tokenization is the process of converting a high-value real estate asset into 
              digital <strong>fragments</strong> or tokens. Instead of one person needing to 
              buy an entire building, we divide the property into <strong>X number of fragments</strong>.
            </p>
            <p>
              By breaking down the barriers to entry, you can purchase as many fragments 
              as you desire. Each fragment represents a specific share of the property, 
              allowing you to build a diversified portfolio with smaller capital outlays.
            </p>
            <ul className={styles.features}>
              <li>Low entry cost for premium properties</li>
              <li>Transparent ownership on the blockchain</li>
              <li>Easy to buy and sell fragments</li>
            </ul>
          </div>
          
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80" 
              alt="Modern Luxury Real Estate" 
              className={styles.image}
            />
          </div>
        </section>

        {/* Flow Section */}
        <section className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.content}>
            <div className={styles.badge}>Step 2</div>
            <h2>Seamless Investing</h2>
            <p>
              Once you select a property, you can view all legal documents and financial 
              projections. Choose the number of fragments you wish to acquire, and 
              complete your transaction instantly. 
            </p>
            <p>
              You receive rental income and capital appreciation proportional to the 
              number of fragments you hold.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&w=800&q=80" 
              alt="City Architecture" 
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorksarec;