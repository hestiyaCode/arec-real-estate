"use client";
import React from 'react';
import { MousePointerClick, ShieldCheck, Award, Users } from 'lucide-react';
import styles from './why-choose-us.module.css';

const features = [
  {
    id: 1,
    title: "Simplicity of Investing",
    description: "Experience a seamless, 100% digital investment process. No paperwork headaches—just click, invest, and track your portfolio.",
    icon: <MousePointerClick size={32} />,
  },
  {
    id: 2,
    title: "Transparency & Trust",
    description: "We operate with complete clarity. Regular reports, clear fee structures, and SEBI-compliant processes ensure your peace of mind.",
    icon: <ShieldCheck size={32} />,
  },
  {
    id: 3,
    title: "Expert-Vetted Projects",
    description: "Our team of analysts rigorously screens hundreds of properties to bring you only the top 1% institutional-grade assets.",
    icon: <Award size={32} />,
  },
  {
    id: 4,
    title: "Community-Led Ownership",
    description: "Join a network of like-minded investors. Co-own premium real estate and grow your wealth alongside a thriving community.",
    icon: <Users size={32} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h4 className={styles.subHeading}>THE AREC ADVANTAGE</h4>
          <h2 className={styles.heading}>
            Why Smart Investors <span className={styles.highlight}>Choose Us</span>
          </h2>
          <p className={styles.description}>
            We combine technology with real estate expertise to provide a platform 
            built on trust, performance, and accessibility.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              
              {/* Decorative background element */}
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;