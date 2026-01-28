import React from 'react';
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
              <span className={styles.cardBadge}>Coming Soon</span>
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.meta}>
                <span>Jan 28, 2026</span>
                <span className={styles.dot}>•</span>
                <span>Real Estate</span>
              </div>
              <h2 className={styles.cardTitle}>The Future of Digital Real Estate Investment</h2>
              <p className={styles.cardDescription}>
                Explore how blockchain technology and property fragments are opening doors for 
                small-scale investors to own premium assets with minimal capital.
              </p>
              <div className={styles.footerLink}>Read More →</div>
            </div>
          </div>
        </div>

        <h2 className={styles.comingSoonText}>MORE UPDATES COMING SOON</h2>
      </div>
    </div>
  );
};

export default InsightsAndBlogs;