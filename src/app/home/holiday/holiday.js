'use client';
import React, { useRef } from 'react';
import styles from './holiday.module.css';

// Mock Data for Holiday Homes (You can replace image URLs with your local imports)
const holidayProjects = [
  {
    id: 1,
    title: "Serenity Hills Villa",
    location: "Rishikesh, Uttarakhand",
    type: "Hill Station Villa",
    status: "New Launch",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1974&auto=format&fit=crop", // Replace with your image
    yield: "8.5%",
    price: "₹1.5 Cr",
    units: "12/20",
    totalVal: "₹30 Cr"
  },
  {
    id: 2,
    title: "Azure Coastal Retreat",
    location: "North Goa, Goa",
    type: "Beach Villa",
    status: "Selling Fast",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    yield: "11.2%",
    price: "₹3.2 Cr",
    units: "05/15",
    totalVal: "₹48 Cr"
  },
  {
    id: 3,
    title: "Misty Valley Cottages",
    location: "Coorg, Karnataka",
    type: "Estate Cottage",
    status: "Waitlist",
    image: "https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?q=80&w=2009&auto=format&fit=crop",
    yield: "7.8%",
    price: "₹95 Lakhs",
    units: "18/25",
    totalVal: "₹22 Cr"
  },
  {
    id: 4,
    title: "Royal Heritage Haveli",
    location: "Udaipur, Rajasthan",
    type: "Heritage Suite",
    status: "Premium",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    yield: "9.5%",
    price: "₹2.1 Cr",
    units: "08/10",
    totalVal: "₹21 Cr"
  }
];

const HolidaySlider = () => {
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
            Exclusive <span className={styles.greenText}>Holiday Homes</span>
          </h2>
          <p className={styles.subtitle}>
            Own a slice of paradise. From serene hill stations to sun-kissed beaches, 
            invest in luxury holiday homes that offer leisure and high rental yields.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className={styles.sliderWrapper}>
          
          {/* Navigation Buttons */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={slideLeft}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Scroll Container */}
          <div className={styles.scrollContainer} ref={sliderRef}>
            {holidayProjects.map((project) => (
              <div key={project.id} className={styles.card}>
                
                {/* Card Image */}
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.cardImage} />
                  <span className={styles.badge}>{project.status}</span>
                </div>

                {/* Card Content */}
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  
                  <div className={styles.locationRow}>
                    <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>{project.location}</span>
                  </div>
                  
                  <div className={styles.typeRow}>
                    <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M17 21v-8.87a2.928 2.928 0 0 0-5-1.45L9 12"/></svg>
                    <span>{project.type}</span>
                  </div>

                  <hr className={styles.divider} />

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
                      <span className={styles.statLabel}>Unit Price</span>
                      <div className={styles.statValueRow}>
                         <svg className={styles.greenIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                         <strong>{project.price}</strong>
                      </div>
                    </div>

                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Available</span>
                      <div className={styles.statValueRow}>
                         <svg className={styles.greenIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                         <strong>{project.units}</strong>
                      </div>
                    </div>

                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Total Value</span>
                      <div className={styles.statValueRow}>
                         <svg className={styles.greenIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                         <strong>{project.totalVal}</strong>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={slideRight}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HolidaySlider;