"use client";
import React, { useState } from 'react';
import styles from './contactpage.module.css';
import { toast, Toaster } from 'react-hot-toast'; // 1. Import Toast

const ContactPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    occupation: ''
  });
  
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Loading toast start kar sakte hain (Optional)
    const loadingToast = toast.loading("Submitting your application...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Loading toast ko hata dein response aane par
      toast.dismiss(loadingToast);

      if (response.ok) {
        setStatus("success");
        setFormData({ username: '', phoneNumber: '', occupation: '' }); // Form clear
        
        // 2. Success Toast
        toast.success("Application Submitted Successfully!", {
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
            border: '1px solid #22c55e', // Green border matching your theme
          },
        });
        
      } else {
        setStatus("error");
        // 3. Error Toast
        toast.error("Something went wrong. Please try again.", {
          style: {
            background: '#333',
            color: '#fff',
          }
        });
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      setStatus("error");
      toast.error("Server Error! Check connection.", {
          style: {
            background: '#333',
            color: '#fff',
          }
      });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 4. Toaster Component Add Karein */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Background Overlay */}
      <div className={styles.bgOverlay}></div>

      <div className={styles.container}>
        {/* Left Side: Header Content */}
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            Get in <span className={styles.greenText}>Touch</span>
          </h1>
          <p className={styles.subtitle}>
            Interested in institutional-grade real estate opportunities? 
            Fill out the form and our team will reach out to you regarding 
            investments, portfolio management, and upcoming SM-REIT offers.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Contact Us</h2>
          <p className={styles.formSubtitle}>Provide your details to proceed.</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Full Name"
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Occupation"
                className={styles.inputField}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
              {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;