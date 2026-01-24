"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search, FileSignature, Coins, CheckCircle2, ArrowRight } from 'lucide-react';
import styles from './how-it-works.module.css';

const steps = [
  {
    id: 1,
    title: "Browse & Evaluate",
    description: "Access our curated list of Grade-A commercial assets. We filter through hundreds of properties to bring you the top 1% with high growth potential.",
    features: [
      "AI-driven location analysis",
      "Historical rental yield data",
      "Complete legal due diligence reports"
    ],
    
    icon: <Search size={24} />,
    image: "/browse and evaluate.jpeg"
  },
  {
    id: 2,
    title: "Invest & Digitize",
    description: "Experience a completely paperless onboarding. Our platform ensures your ownership data is immutable and instantly verifiable.",
    features: [
      "2-minute KYC process",
      "Digital signature integration",
      "Secure payment gateway (UPI/NetBanking)"
    ],
    
    icon: <FileSignature size={24} />,
    image: "/invest and digitise.jpeg"
  },
  {
    id: 3,
    title: "Track & Earn",
    description: "Monitor your portfolio in real-time. Receive monthly rentals directly into your bank account and watch your capital appreciate over time.",
    features: [
      "Real-time dashboard analytics",
      "Automated monthly payouts",
      "Quarterly performance reports"
    ],
    
    icon: <Coins size={24} />,
    image: "/track and earn.jpeg"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        // Root margin adjusts the "trigger zone" to the center of the screen
        rootMargin: "-45% 0px -45% 0px", 
        threshold: 0.1, 
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (stepRefs.current) {
        stepRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.headerWrapper}>
          <h4 className={styles.subHeading}>THE PROCESS</h4>
          <h2 className={styles.heading}>
            Your Journey to <span className={styles.highlight}>Passive Income</span>
          </h2>
        </div>

        <div className={styles.contentLayout}>
          
          {/* Left Side: Timeline & Text */}
          <div className={styles.stepsColumn}>
            {/* Timeline Line */}
            <div className={styles.timelineContainer}>
               <div className={styles.timelineLine}></div>
               <div 
                 className={styles.timelineProgress} 
                 style={{ height: `${(activeStep / (steps.length - 0.8)) * 100}%` }} 
               ></div>
            </div>

            {steps.map((step, index) => (
              <div 
                key={step.id} 
                ref={(el) => (stepRefs.current[index] = el)}
                data-index={index}
                className={`${styles.stepCardWrapper} ${activeStep === index ? styles.activeWrapper : ''}`}
              >
                <div className={styles.stepCardInner}>
                  <div className={styles.stepHeader}>
                    <div className={styles.stepNumber}>0{step.id}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  
                  <p className={styles.stepDesc}>{step.description}</p>
                  
                  <ul className={styles.featureList}>
                    {step.features.map((feat, i) => (
                      <li key={i} className={styles.featureItem}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className={styles.actionLink}>
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Images */}
          <div className={styles.imageColumn}>
            <div className={styles.stickyFrame}>
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`${styles.imageWrapper} ${activeStep === index ? styles.activeImage : ''}`}
                >
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    fill
                    className={styles.img}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  <div className={`${styles.floatingBadge} ${activeStep === index ? styles.popIn : ''}`}>
                    <div className={styles.badgeIcon}>{step.icon}</div>
                    <div className={styles.badgeText}>
                      <span className={styles.badgeLabel}>Status</span>
                      <span className={styles.badgeValue}>{step.stat}</span>
                    </div>
                  </div>

                  <div className={styles.overlayGradient}></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;