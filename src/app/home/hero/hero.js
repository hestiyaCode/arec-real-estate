"use client";
import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        {/* Left Side: Content */}
        <div className={styles.textContent}>
          <span className={styles.badge}>SEBI Registered REIT Platform</span>
          <h1 className={styles.mainTitle}>
            Invest in India’s <br />
            Growth{" "}
            <span className={styles.greenText}>Through Real Estate.</span>
          </h1>
          <p className={styles.subTitle}>
            Institutional-grade investments across office, retail, and
            industrial sectors. A transparent and regulated platform for HNIs
            and retail investors.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <h4>Grade-A</h4>
              <p>Commercial Assets</p>
            </div>
            <div className={styles.statItem}>
              <h4>90%</h4>
              <p>Income Distribution</p>
            </div>
            <div className={styles.statItem}>
              <h4>Stable</h4>
              <p>Rental Yields</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formCard}>
          <h3>Get Started</h3>
          <p>Register your interest for a private walkthrough.</p>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.inputField}
            />
            <input
              type="email"
              placeholder="Work Email"
              className={styles.inputField}
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitBtn}>
              Request Information
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
