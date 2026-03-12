"use client";
import React, { useState, useEffect } from 'react';
import styles from './contactpage.module.css';
import { toast, Toaster } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    countryCode: '+91',
    phoneNumber: '',
    occupation: ''
  });
  
  const [status, setStatus] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaRendered, setCaptchaRendered] = useState(false);

  useEffect(() => {
    const lastEntry = localStorage.getItem('arec_last_submission');
    if (lastEntry && Date.now() - parseInt(lastEntry) < 3600000) {
      setIsLocked(true);
    }

    // Captcha Callbacks
    window.onCaptchaChange = (value) => { if(value) setCaptchaVerified(true); };
    window.onCaptchaExpired = () => { setCaptchaVerified(false); };
  }, []);

  useEffect(() => {
    // Render Captcha when phone number starts being typed
    if (formData.phoneNumber.length > 0 && !captchaRendered) {
      if (window.grecaptcha && document.getElementById('recaptcha-main')) {
        try {
          window.grecaptcha.render('recaptcha-main', {
            'sitekey': '6LfuU3ksAAAAAM1RedyzZyXsScH0bZsM93qiFcEt',
            'callback': window.onCaptchaChange,
            'expired-callback': window.onCaptchaExpired,
            'theme': 'light'
          });
          setCaptchaRendered(true);
        } catch (error) { console.log("Captcha error", error); }
      }
    }
  }, [formData.phoneNumber, captchaRendered]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Single Phase Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      return toast.error("Please verify 'I am not a robot' first.");
    }

    if (formData.phoneNumber.length < 10) {
      return toast.error("Please enter a valid phone number.");
    }

    setStatus("loading");
    const loadingToast = toast.loading("Submitting your application...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          fullPhone: formData.countryCode + formData.phoneNumber
        }),
      });

      if (response.ok) {
        // ✅ GOOGLE ADS CONVERSION TRIGGER
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17841688200/x-H2CK_N9qEaEPjW9-Y-', // Is label ko apne dashboard se verify karein
          });
        }

        localStorage.setItem('arec_last_submission', Date.now().toString());
        setIsLocked(true);
        setFormData({ username: '', countryCode: '+91', phoneNumber: '', occupation: '' }); 
        toast.dismiss(loadingToast);
        toast.success("Application Submitted Successfully!");
      } else {
        const errData = await response.json();
        toast.dismiss(loadingToast);
        toast.error(errData.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setStatus(null);
    }
  };
  return (
    <div className={styles.pageWrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.bgOverlay}></div>

      <div className={styles.container}>
        {/* Left Side: Info Content */}
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            Get in <span className={styles.greenText}>Touch</span>
          </h1>
          <p className={styles.subtitle}>
            Interested in institutional-grade real estate opportunities? 
            Fill out the form and our team will reach out to you regarding 
            investments and portfolio management.
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>ADDRESS:</span>
              <p>B69, Ground floor Sector 63, Noida, Uttar Pradesh 201301</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>PHONE:</span>
              <p><a href="tel:+919667007078" className={styles.link}>+91 96670 07078</a></p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>EMAIL:</span>
              <p><a href="mailto:connect@thearec.com" className={styles.link}>connect@thearec.com</a></p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Contact Us</h2>
          <p className={styles.formSubtitle}>Provide your details to proceed.</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input 
                type="text" name="username" value={formData.username} 
                onChange={handleChange} placeholder="Full Name" 
                className={styles.inputField} required 
              />
            </div>

            <div className={styles.phoneInputGroup}>
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} className={styles.countrySelect}>
                <option value="+91">+91 IN</option>
                <option value="+971">+971 UAE</option>
              </select>
              <input 
                type="tel" name="phoneNumber" value={formData.phoneNumber} 
                onChange={handleChange} placeholder="Phone Number" 
                className={styles.phoneInputField} required 
              />
            </div>

            {/* Captcha Wrapper */}
            <div className={styles.captchaWrapper} style={{ display: formData.phoneNumber.length > 0 ? 'flex' : 'none', marginBottom: '15px' }}>
                <div id="recaptcha-main"></div> 
            </div>

            <div className={styles.inputGroup}>
              <select name="occupation" value={formData.occupation} onChange={handleChange} className={styles.inputField} required>
                <option value="" disabled>Select Occupation</option>
                <option value="High-Net-Worth Individual">High-Net-Worth Individual (HNWI)</option>
                <option value="Non-Resident Indian">Non-Resident Indian (NRI)</option>
                <option value="Business Owner">Business Owner / Entrepreneur</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={status === "loading" || isLocked}
            >
              {isLocked ? "ENTRY LIMITED (1 HR)" : (status === "loading" ? "SUBMITTING..." : "SUBMIT")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;