"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import styles from './faq.module.css';

const faqData = [
  {
    question: "What is a AREC?",
    answer: "AREC is a real Estate Investment Company which enables users to invest in the real estate sector in small ticket sizes (as small as 5 lakh INR), breaking the barriers of high investments ticket sizes and lengthy paperwork and process. We pool funds from multiple investors to acquire, manage, and monetize high-quality real estate assets, providing regular rental income and potential capital appreciation."
  },
  {
    question: "Who can invest?",
    answer: "We welcome institutional investors, HNIs, NRIs, and eligible retail investors with minimum investment thresholds. NRIs may invest through designated NRO/NRE accounts."
  },
  {
    question: "What are the minimum investments?",
    answer: "Per SEBI SM-REIT rules, minimum tickets typically start at ₹10 lakh for retail/HNI investors and higher for institutional placements."
  },
  {
    question: "How are returns paid?",
    answer: "We distribute at least 90% of net rental income to unit-holders (e.g., quarterly dividends). Past distributions have averaged X% annually."
  },
  {
    question: "Liquidity of investment?",
    answer: "Our REIT units will be listed on the stock exchange (once public) for secondary market trading. Prior to listing, investors exit via secondary placement or buyout mechanisms."
  },
  {
    question: "What are the risks?",
    answer: "Market and occupancy risks exist as with any real estate investment. However, diversified tenants and long leases mitigate volatility. Please review our full risk disclosure."
  },
  {
    question: "Tax implications?",
    answer: "Rental income distributions are taxed per SEBI/IT rules. NRIs consult tax advisors for repatriation. Consult a tax professional for specifics."
  },
  {
    question: "How to Invest?",
    answer: `• Step 1: Open an Account – Potential investors register on the platform or contact a Relationship Manager. SEBI mandate: Min. investment ₹10 lakh.
• Step 2: Complete KYC & Documentation – Submit KYC, identity proofs. NRIs can invest via NRO/NRE accounts.
• Step 3: Choose Your Investment Plan – Select from available tranche (institutional placement or upcoming public offer).
• Step 4: Fund Transfer – Invest via wire transfer or cheque into designated bank account.
• Step 5: Unit Allotment – Receive REIT units; holdings can be tracked online.
• Step 6: Earn Income – Quarterly distributions credited directly to investors; annual reports shared.`
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Artistic Left Side Header */}
        <div className={styles.headerColumn}>
          <div className={styles.iconBadge}>
            <HelpCircle size={32} />
          </div>
          <h2 className={styles.heading}>
            Frequently Asked <br />
            <span className={styles.highlight}>Questions</span>
          </h2>
          <p className={styles.description}>
            Everything you need to know about investing with AREC. 
            Can’t find the answer you’re looking for? 
            <span className={styles.link}> Contact our team.</span>
          </p>
          
          {/* Decorative Art Element */}
          <div className={styles.artisticCircle}></div>
        </div>

        {/* Right Side Accordion */}
        <div className={styles.faqColumn}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.questionHeader}>
                <h3 className={styles.questionText}>{item.question}</h3>
                <div className={styles.iconWrapper}>
                  {activeIndex === index ? (
                    <Minus size={20} className={styles.icon} />
                  ) : (
                    <Plus size={20} className={styles.icon} />
                  )}
                </div>
              </div>
              
              {/* Smooth Grid Animation Wrapper */}
              <div className={styles.answerWrapper}>
                <div className={styles.answerInner}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;