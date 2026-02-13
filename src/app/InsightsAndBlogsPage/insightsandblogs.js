import React from 'react';
import Link from 'next/link'; // Import Next.js Link
import styles from './insightsandblogs.module.css';

const InsightsAndBlogs = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Insights and Blogs</h1>
          <p className={styles.subtitle}>Stay updated with the latest in Digital Real Estate</p>
        </header>

        <div className={styles.blogGrid}>
          {/* Real Estate Blog Card */}
          <div className={styles.blogCard}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" 
                alt="Real Estate Concept" 
              />
              <span className={styles.cardBadge}>Real Estate</span>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.meta}>
                <span>Jan 28, 2026</span>
                <span className={styles.dot}>•</span>
                <span>Real Estate</span>
              </div>
              <h2 className={styles.cardTitle}>REITs vs Fractional Ownership: Choosing the Right Real Estate Investment in India</h2>
              <p className={styles.cardDescription}>
                India's real estate sector is changing rapidly. Property investment has switched from sole ownership of entire buildings to new ways of investing, such as fractional ownership of real estate in India and Real Estate Investment Trusts (REITs). These allow more people, including first-time buyers, to participate in real estate without having to invest a large amount of money. 
              </p>
              
              {/* Using Next.js Link for the Read More button */}
              <Link href="/rietandfractional" className={styles.footerLink}>
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsAndBlogs;