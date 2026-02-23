"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './project-slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  ArrowRight, MapPin, TrendingUp, Wallet, 
  Layers, Coins, Building2, ChevronLeft, ChevronRight 
} from 'lucide-react'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  // --- NEW: Dynamic State for Projects ---
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Fetch projects from your API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setDynamicProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (!mounted) return null;

  // Optional: Loading state
  if (loading && dynamicProjects.length === 0) {
    return <section className={styles.section}><div className={styles.container}>Loading Opportunities...</div></section>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <div className={styles.headerContent}>
          <h2 className={styles.heading}>
            Premium <span className={styles.highlight}>Investment Opportunities</span>
          </h2>
          <p className={styles.description}>
            We offer institutional-grade real estate investments across commercial, residential and holiday home sectors. 
            Our platform enables retail investors to earn steady capital appreciation and rental income.
          </p>
        </div>

        {/* Slider Section */}
        <div className={styles.sliderWrapper}>
          
          <button ref={prevRef} className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button ref={nextRef} className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Next slide">
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.swiperContainer}
          >
            {/* --- CHANGED: Mapping over dynamicProjects instead of static array --- */}
            {dynamicProjects.map((project) => (
              <SwiperSlide key={project._id} className={styles.slide}>
                <div className={styles.card}>
                  
                  {/* Image Container */}
                  <div className={styles.imageContainer}>
                    <Image 
                      src={project.imageUrl} // Now using the Vercel Blob URL from DB
                      alt={project.title} 
                      fill
                      className={styles.cardImage}
                      unoptimized={true} // Helpful for external Blob URLs
                    />
                    <span className={styles.statusBadge}>
                      {project.tag} {/* Using 'tag' field from Dashboard */}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    
                    <div className={styles.infoStack}>
                      <div className={styles.infoRow}>
                        <MapPin size={16} className={styles.icon} />
                        <span>{project.location}</span>
                      </div>

                      <div className={styles.infoRow}>
                        <Building2 size={16} className={styles.icon} />
                        <span style={{ fontWeight: '500' }}>{project.category}</span>
                      </div>
                    </div>

                    <div className={styles.statsGrid}>
                      <div className={styles.statItem}>
                        <TrendingUp size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Target Yield</span>
                          <span className={styles.statValue}>{project.targetYield}</span>
                        </div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <Wallet size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Token Price</span>
                          <span className={styles.statValue}>{project.tokenPrice}</span>
                        </div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <Layers size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Available</span>
                          <span className={styles.statValue}>{project.availableTokens}</span>
                        </div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <Coins size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Total Value</span>
                          <span className={styles.statValue}>{project.totalValue}</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.divider}></div>

                    <Link href="/contact-page" style={{ textDecoration: 'none' }}>
                      <button className={styles.investButton}>
                        Invest Now <ArrowRight size={18} />
                      </button>
                    </Link>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;