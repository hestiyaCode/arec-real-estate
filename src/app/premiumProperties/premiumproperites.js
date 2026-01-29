"use client";
import React, { useState } from 'react';
import styles from './premiumproperties.module.css';
import { MapPin, Maximize, Building, Navigation, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
const properties = [
  {
    id: 1,
    title: "The Emerald Executive Hub",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    ],
    area: "12,500 sq.ft",
    type: "Commercial",
    landmark: "Near Cyber City",
    location: "Gurugram, HR",
    description: "Premium Grade-A office space with 10.5% projected rental yield."
  },
  {
    id: 2,
    title: "Azure Bay Resort Fragments",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    ],
    area: "5.5 Acres",
    type: "Holiday Home",
    landmark: "Vagator Beach Front",
    location: "North Goa, GA",
    description: "Fractional ownership in a 5-star luxury boutique resort."
  }
];

const PropertyCard = ({ property }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % property.images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className={styles.horizontalCard}>
      {/* Left Side: Artistic Slider */}
      <div className={styles.imageSection}>
        <img src={property.images[currentImg]} alt={property.title} className={styles.propertyImg} />
        <div className={styles.sliderOverlay}>
          <button onClick={prevImg} className={styles.sliderBtn}><ChevronLeft size={20} /></button>
          <button onClick={nextImg} className={styles.sliderBtn}><ChevronRight size={20} /></button>
        </div>
        <div className={styles.imgBadge}>{property.type}</div>
      </div>

      {/* Right Side: Details */}
      <div className={styles.infoSection}>
        <h2 className={styles.propertyTitle}>{property.title}</h2>
        <p className={styles.desc}>{property.description}</p>
        
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <Maximize size={18} className={styles.icon} />
            <div><span>Area</span><p>{property.area}</p></div>
          </div>
          <div className={styles.statItem}>
            <Building size={18} className={styles.icon} />
            <div><span>Type</span><p>{property.type}</p></div>
          </div>
          <div className={styles.statItem}>
            <Navigation size={18} className={styles.icon} />
            <div><span>Landmark</span><p>{property.landmark}</p></div>
          </div>
          <div className={styles.statItem}>
            <MapPin size={18} className={styles.icon} />
            <div><span>Location</span><p>{property.location}</p></div>
          </div>
        </div>

        <Link href="/contact-page"><button className={styles.viewBtn}>Contact Owner</button></Link>
      </div>
    </div>
  );
};

export default function PremiumProperties() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.tag}>Exclusive Listings</span>
        <h1>Premium <span className={styles.greenText}>Assets</span></h1>
      </header>
      <div className={styles.list}>
        {properties.map(p => <PropertyCard key={p.id} property={p} />)}
      </div>
    </div>
  );
}