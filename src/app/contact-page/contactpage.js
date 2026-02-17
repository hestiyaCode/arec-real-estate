"use client";
import React, { useState } from 'react';
import styles from './contactpage.module.css';
import { toast, Toaster } from 'react-hot-toast';

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

    const loadingToast = toast.loading("Submitting your application...");

    try {
      const response = await fetch("/api/contact", {
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
        
        toast.success("Application Submitted Successfully!", {
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
            border: '1px solid #22c55e',
          },
        });
        
      } else {
        setStatus("error");
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      setStatus("error");
      toast.error("Server Error! Check connection.");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Toaster position="top-center" reverseOrder={false} />

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
            investments, portfolio management and other interesting offers.
          </p>

          {/* --- NEW CONTACT DETAILS SECTION --- */}
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Address:</span>
              <p>B69, Ground floor Sector 63, Noida, Uttar Pradesh 201301</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone:</span>
              <p><a href="tel:+9196670 07078" className={styles.link}>+91 96670 07078</a></p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email:</span>
              <p><a href="mailto:arec.admin@gmail.com" className={styles.link}>arec.admin@gmail.com</a></p>
            </div>
          </div>
          {/* ---------------------------------- */}
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