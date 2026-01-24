"use client";
import React, { useState } from "react";
import styles from "./hero.module.css";
import { Building2, PieChart, Percent, TrendingUp } from "lucide-react"; // Icons agar use kar rahe hain
import { toast, Toaster } from 'react-hot-toast'; // Notifications ke liye

export default function Hero() {
  // 1. State Manage kar rahe hain data aur loading status ke liye
  const [formData, setFormData] = useState({
    username: '',      // Backend schema ke hisaab se
    phoneNumber: '',   // Backend schema ke hisaab se
    occupation: ''     // Backend schema ke hisaab se
  });

  const [status, setStatus] = useState(null); // Loading state

  // 2. Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 3. Form Submit Handler (API Hit karega)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const loadingToast = toast.loading("Submitting details...");

    try {
      // API call to your existing backend route
      const response = await fetch("/api/heroform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.dismiss(loadingToast);

      if (response.ok) {
        setStatus("success");
        setFormData({ username: '', phoneNumber: '', occupation: '' }); // Form clear
        
        toast.success("Request Sent Successfully!", {
          style: {
            background: '#333',
            color: '#fff',
            border: '1px solid #22c55e',
          },
        });
      } else {
        setStatus("error");
        toast.error("Something went wrong.", {
          style: { background: '#333', color: '#fff' }
        });
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      setStatus("error");
      toast.error("Server Error! Check connection.", {
        style: { background: '#333', color: '#fff' }
      });
    }
  };

  return (
    <section className={styles.heroWrapper}>
      {/* Toast Notification Container */}
      <Toaster position="top-center" />

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
              <div className={styles.iconWrapper}>
                <Building2 size={28} className={styles.statIcon} />
              </div>
              <div>
                <h4>Grade-A</h4>
                <p>All type of Assets</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                 <PieChart size={28} className={styles.statIcon} />
              </div>
              <div>
                <h4>90%</h4>
                <p>Income Distribution</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Percent size={28} className={styles.statIcon} />
              </div>
              <div>
                <h4>Stable</h4>
                <p>Rental Yields</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <TrendingUp size={28} className={styles.statIcon} />
              </div>
              <div>
                <h4>Assured</h4>
                <p>Capital Appreciation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form (API Connected) */}
        <div className={styles.formCard}>
          <h3>Get Started</h3>
          <p>Register your interest for a private walkthrough.</p>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"           // HTML type standard rakha hai (text)
              name="username"       // Backend key match
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name"
              className={styles.inputField}
              required
            />
            <input
              type="tel"            // HTML type standard (tel for mobile)
              name="phoneNumber"    // Backend key match
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={styles.inputField}
              required
            />
            <input
              type="text"           // HTML type standard (text)
              name="occupation"     // Backend key match
              value={formData.occupation}
              onChange={handleChange}
              placeholder="Occupation"
              className={styles.inputField}
              required
            />
            
            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Request Information"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}