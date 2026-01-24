"use client";
import React, { useState } from "react";
import styles from "./hero.module.css";
import { Building2, PieChart, Percent, TrendingUp } from "lucide-react"; 
import { toast, Toaster } from 'react-hot-toast'; 

export default function Hero() {
  const [formData, setFormData] = useState({
    username: '',      
    phoneNumber: '',   
    occupation: ''     
  });

  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const loadingToast = toast.loading("Submitting details...");

    try {
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
        setFormData({ username: '', phoneNumber: '', occupation: '' }); 
        
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
                <Building2 size={24} />
              </div>
              <div>
                <h4>Grade-A</h4>
                <p>All type of Assets</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                 <PieChart size={24} />
              </div>
              <div>
                <h4>90%</h4>
                <p>Income Distribution</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Percent size={24} />
              </div>
              <div>
                <h4>Stable</h4>
                <p>Rental Yields</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <TrendingUp size={24} />
              </div>
              <div>
                <h4>Assured</h4>
                <p>Capital Appreciation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formCard}>
          <h3>Get Started</h3>
          <p>Register your interest for a private walkthrough.</p>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Full Name"
              className={styles.inputField}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="occupation"
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