"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Added Link Import
import styles from './project-slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  ArrowRight, 
  MapPin, 
  TrendingUp, 
  Wallet, 
  Layers,    
  Coins,     
  Building2  
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
    image: "/raja-ji.jpeg" ,
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
    image:   "/rise-villas.webp",
    status: "Waitlist",
     totalPrice: "₹5 Crores",
     availableUnits: "16/20",
  }
];

const ProjectSlider = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <div className={styles.headerContent}>
          <h2 className={styles.heading}>
            Premium <span className={styles.highlight}>Investment Opportunities</span>
          </h2>
          <p className={styles.description}>
            We offer institutional-grade real estate investments across commercial, residential and holiday home sectors. Our platform for HNIs, NRIs, and retail investors to earn steady capital appreciation and rental
            income. Invest confidently 
            through our managed portfolio of high-quality assets.
          </p>
        </div>

        {/* Slider Section */}
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
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
                    <span className={`${styles.statusBadge} ${project.status === 'Open' ? styles.statusOpen : ''}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    
                    <div className={styles.infoStack}>
                      {/* Location Row */}
                      <div className={styles.infoRow} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <MapPin size={16} className={styles.icon} color="#666" />
                        <span style={{ fontSize: '14px', color: '#555' }}>{project.location}</span>
                      </div>

                      {/* Project Type Row */}
                      <div className={styles.infoRow} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <Building2 size={16} className={styles.icon} color="#666" />
                        <span style={{ fontSize: '14px', color: '#555', fontWeight: '500' }}>{project.type}</span>
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
                          <span className={styles.statLabel}>Available Units</span>
                          <span className={styles.statValue}>{project.availableUnits}</span>
                        </div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <Coins size={18} className={styles.accentIcon} />
                        <div>
                          <span className={styles.statLabel}>Total Price</span>
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