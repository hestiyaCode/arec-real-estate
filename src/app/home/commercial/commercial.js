'use client';
import React, { useRef } from 'react';
import Link from 'next/link'; // Import Link for navigation
import styles from './commercial.module.css';

// Updated Mock Data with high-quality, relevant images
const commercialProjects = [
  {
    id: 1,
    title: "Moradabad Retail Plaza",
    location: "Moradabad City, Uttar Pradesh",
    type: "Retail Plaza- Income Starts from Day 1",
    status: "New Launch",
    // Relevant high-quality retail/shopping mall image
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?q=80&w=2070&auto=format&fit=crop", 
    yield: "12.1%",
    price: "₹25 Lakhs",
    units: "20/20",
    totalVal: "₹5 Cr"
  },
  {
    id: 2,
    title: "The Grand High Street",
    location: "Sector 18, Noida",
    type: "Premium Retail Shop",
    status: "Selling Fast",
    // Modern High-street architecture image
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=2070&auto=format&fit=crop",
    yield: "10.5%",
    price: "₹1.2 Cr",
    units: "15/50",
    totalVal: "₹120 Cr"
  },
  {
    id: 3,
    title: "TechHub Co-Working",
    location: "Whitefield, Bangalore",
    type: "Managed Workspace",
    status: "New Launch",
    // Modern co-working/office interior
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2070&auto=format&fit=crop",
    yield: "9.2%",
    price: "₹65 Lakhs",
    units: "22/40",
    totalVal: "₹28 Cr"
  },
  {
    id: 4,
    title: "Logistics One Warehousing",
    location: "Bhiwandi, Mumbai",
    type: "Industrial Warehouse",
    status: "High Demand",
    // Modern industrial warehouse image
    image: "/logistics.jpg",
    yield: "7.5%",
    price: "₹2.5 Cr",
    units: "02/08",
    totalVal: "₹15 Cr"
  }
];

const CommercialSlider = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Prime <span className={styles.greenText}>Commercial Leased Assets</span>
          </h2>
          <p className={styles.subtitle}>
            Secure steady rental income and capital appreciation with A-grade 
            commercial real estate. Invest in offices, retail spaces, high street markets and malls.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className={styles.sliderWrapper}>
          
          {/* Navigation Buttons */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={slideLeft} aria-label="Previous Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Scroll Container */}
          <div className={styles.scrollContainer} ref={sliderRef}>
            {commercialProjects.map((project) => (
              <div key={project.id} className={styles.card}>
                
                {/* Card Image */}
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.cardImage} />
                  <span className={styles.badge}>{project.status}</span>
                </div>

                {/* Card Content */}
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  
                  <div className={styles.infoRow}>
                    <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>{project.location}</span>
                  </div>
                  
                  <div className={styles.infoRow}>
                    <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
                    <span>{project.type}</span>
                  </div>

                  <div className={styles.divider}></div>

                  {/* Stats Grid */}
                  <div className={styles.statsGrid}>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Target Yield</span>
                      <div className={styles.statValueRow}>
                         <svg className={styles.greenIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                         <strong>{project.yield}</strong>
                      </div>
                    </div>
                    
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Min Investment</span>
                      <div className={styles.statValueRow}>
                         <svg className={styles.greenIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                         <strong>{project.price}</strong>
                      </div>
                    </div>

                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Available Units</span>
                      <div className={styles.statValueRow}>
                         <svg className={styles.greenIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                         <strong>{project.units}</strong>
                      </div>
                    </div>

                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Asset Value</span>
                      <div className={styles.statValueRow}>
                         <svg className={styles.greenIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                         <strong>{project.totalVal}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Invest Now Button */}
                  <div className={styles.buttonWrapper}>
                    <Link href="/contact-page" className={styles.investButton}>
                      Invest Now
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={slideRight} aria-label="Next Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CommercialSlider;