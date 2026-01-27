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

// Swiper CSS imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: "Raja Ji Estates",
    location: "Mohand Range, Saharanpur, Uttar Pradesh",
    type: "Farmhouse Villas",
    yield: "8.5%",
    minInvest: "₹15 Lakhs",
    image: "/raja-ji.jpeg",
    status: "Newly Launched",
    totalPrice: "₹3 Crores",
    availableUnits: "19/20",
  },
  {
    id: 2,
    title: "Primemark Mall Noida",
    location: "Sector 34, Noida",
    type: "Commercial Retail",
    yield: "9.2%",
    minInvest: "₹50 Lakhs",
    image: "/prime-mark.jpeg",
    status: "Filling Fast",
    totalPrice: "₹50 Crores",
    availableUnits: "98/100",
  },
  {
    id: 3,
    title: "Rise Square Market",
    location: "Sector 1, Greater Noida",
    type: "Retail Shop",
    yield: "10.1%",
    minInvest: "₹10 Lakhs",
    image: "/rise-market.webp",
    status: "New Launch",
    totalPrice: "₹1.2 Crores",
    availableUnits: "11/12",
  },
  {
    id: 4,
    title: "Risa Golf Course Villas",
    location: "Sector 1, Greater Noida",
    type: "Villas",
    yield: "7.8%",
    minInvest: "₹25 Lakhs",
    image: "/rise-villas.webp",
    status: "Waitlist",
    totalPrice: "₹5 Crores",
    availableUnits: "16/20",
  }
];

const ProjectSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
            Our platform for HNIs, NRIs, and retail investors to earn steady capital appreciation and rental
            income.
          </p>
        </div>

        {/* Slider Section */}
        <div className={styles.sliderWrapper}>
          
          {/* Custom Navigation Buttons (Positioned on Borders) */}
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
              // Re-assign refs before Swiper initializes
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
            {projects.map((project) => (
              <SwiperSlide key={project.id} className={styles.slide}>
                <div className={styles.card}>
                  
                  {/* Image Container */}
                  <div className={styles.imageContainer}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className={styles.cardImage}
                    />
                    <span className={styles.statusBadge}>
                      {project.status}
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
                        <span style={{ fontWeight: '500' }}>{project.type}</span>
                      </div>
                    </div>

                    <div className={styles.statsGrid}>
                      <div className={styles.statItem}>
                        <TrendingUp size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Target Yield</span>
                          <span className={styles.statValue}>{project.yield}</span>
                        </div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <Wallet size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Unit Price</span>
                          <span className={styles.statValue}>{project.minInvest}</span>
                        </div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <Layers size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Available</span>
                          <span className={styles.statValue}>{project.availableUnits}</span>
                        </div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <Coins size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Total Value</span>
                          <span className={styles.statValue}>{project.totalPrice}</span>
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