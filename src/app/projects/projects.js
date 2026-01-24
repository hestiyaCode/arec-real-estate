"use client";
import React from 'react';
import Image from 'next/image';
import styles from './projects.module.css';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin, 
  TrendingUp, 
  Wallet, 
  Layers, 
  Coins, 
  Building2 
} from 'lucide-react'; 

// Data Source
const projects = [
  {
    id: 1,
    title: "Raja Ji Estates",
    location: "Mohand Range, Saharanpur, UP", // Thoda short kiya fit hone ke liye
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

const ProjectsPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Page Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.mainHeading}>
            Our Exclusive <span className={styles.highlight}>Portfolio</span>
          </h1>
          <p className={styles.subText}>
            Explore our curated list of institutional-grade real estate opportunities. 
            From commercial retail to luxury villas, find the perfect asset for your portfolio.
          </p>
        </div>

        {/* Projects Grid - 2 Cards Per Row */}
        <div className={styles.gridContainer}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={styles.cardWrapper}
              // Inline style for staggered animation delay (0.1s, 0.3s, 0.5s...)
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.card}>
                
                {/* Image Section */}
                <div className={styles.imageBox}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className={styles.cardImage}
                  />
                  <div className={styles.overlay}></div>
                  <span className={`${styles.badge} ${project.status === 'Open' ? styles.open : ''}`}>
                    {project.status}
                  </span>
                </div>

                {/* Content Section */}
                <div className={styles.contentBox}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <div className={styles.typeTag}>
                        <Building2 size={14} /> {project.type}
                    </div>
                  </div>

                  <div className={styles.locationRow}>
                    <MapPin size={16} className={styles.iconBase} />
                    <span>{project.location}</span>
                  </div>

                  {/* Stats Grid */}
                  <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                      <TrendingUp size={18} className={styles.iconAccent} />
                      <div>
                        <span className={styles.label}>Yield</span>
                        <span className={styles.value}>{project.yield}</span>
                      </div>
                    </div>
                    
                    <div className={styles.stat}>
                      <Wallet size={18} className={styles.iconAccent} />
                      <div>
                        <span className={styles.label}>Min. Invest</span>
                        <span className={styles.value}>{project.minInvest}</span>
                      </div>
                    </div>

                    <div className={styles.stat}>
                      <Layers size={18} className={styles.iconAccent} />
                      <div>
                        <span className={styles.label}>Units</span>
                        <span className={styles.value}>{project.availableUnits}</span>
                      </div>
                    </div>

                    <div className={styles.stat}>
                      <Coins size={18} className={styles.iconAccent} />
                      <div>
                        <span className={styles.label}>Total Value</span>
                        <span className={styles.value}>{project.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact-page" style={{ textDecoration: 'none' }}>
                  <div className={styles.actionRow}>
                    <button className={styles.detailsBtn}>
                      Invest Now <ArrowRight size={18} />
                    </button>
                  </div>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsPage;