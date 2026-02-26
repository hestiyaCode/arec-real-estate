"use client";
import React, { useState } from 'react';
import styles from './premiumproperties.module.css';
import { MapPin, Maximize, Building, Navigation, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
const properties = [
  {
    id: 1,
    title: "The Villa Farm House Project",
    images: [
      "https://images.unsplash.com/photo-1664718290306-8dc74f5fe511?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhJTIwbmVhciUyMGx1c2glMjBncmVlbiUyMG1hbnNpb258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1649037756233-55cf385e4df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGElMjBuZWFyJTIwbHVzaCUyMGdyZWVuJTIwbWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    area: "1000 sq.yard",
    type: "Resedential",
    landmark: "Raja Ji National Park",
    location: "Behat, Saharanpur, U.P",
    description: "A Villa township right adjacent to the shivalik mountain range with lush green forest and scenic mountain view. The project comprises of a club house with an infinity pool, Gym and a rooftop bar, vast common utilities areas and beautifull landscapes in the project. "
  },
  {
    id: 2,
    title: "Commercial Land in Noida City Centre",
    images: [
      "/noida commercial land.png",
      
    ],
    area: "1800 sq.yard",
    type: "Commercial land",
    landmark: "Noida City Centre",
    location: "Sector 35, Noida, U.P",
    description: "Vacant land suitable for Hotel, Hospital, Mall and all type of commercial activities."
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

        <Link href="/contact-page"><button className={styles.viewBtn}>Contact for details</button></Link>
      </div>
    </div>
  );
};

export default function PremiumProperties() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.tag}>Exclusive Listings</span>
        <h1>Exclusive <span className={styles.greenText}>Deals</span></h1>
      </header>
      <div className={styles.list}>
        {properties.map(p => <PropertyCard key={p.id} property={p} />)}
      </div>
    </div>
  );
}