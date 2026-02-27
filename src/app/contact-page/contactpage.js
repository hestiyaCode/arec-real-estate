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

  useEffect(() => {
    // 1. Check Entry Limit
    const checkLimit = () => {
      const lastEntry = localStorage.getItem('arec_last_submission');
      if (lastEntry) {
        const timePassed = Date.now() - parseInt(lastEntry);
        if (timePassed < 3600000) { 
          setIsLocked(true);
          const remainingMins = Math.ceil((3600000 - timePassed) / 60000);
          setTimeout(() => {
            toast.error(`Entry limit reached. Try again after ${remainingMins} mins.`);
          }, 500);
        }
      }
    };
    checkLimit();

    // 2. Window logic for Captcha
    window.onCaptchaChange = (value) => {
      if(value) setCaptchaVerified(true);
    };
    window.onCaptchaExpired = () => {
      setCaptchaVerified(false);
    };

    // 3. FORCE RENDER (Ye box dikhayega)
    const timer = setTimeout(() => {
      if (window.grecaptcha && document.getElementById('recaptcha-main')) {
        try {
          window.grecaptcha.render('recaptcha-main', {
            'sitekey': '6LfuU3ksAAAAAM1RedyzZyXsScH0bZsM93qiFcEt',
            'callback': window.onCaptchaChange,
            'expired-callback': window.onCaptchaExpired,
            'theme': 'dark'
          });
        } catch (error) {
          console.log("Captcha already rendered");
        }
      }
    }, 1000); // 1 second ka wait taaki script load ho jaye

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (isLocked) return toast.error("You can only submit once per hour.");
    if (!captchaVerified) return toast.error("Please complete the 'I am not a robot' verification.");

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
        localStorage.setItem('arec_last_submission', Date.now().toString());
        setIsLocked(true);
        setStatus("success");
        setFormData({ username: '', countryCode: '+91', phoneNumber: '', occupation: '' }); 
        toast.dismiss(loadingToast);
        toast.success("Application Submitted Successfully!");
        if (window.grecaptcha) window.grecaptcha.reset();
        setCaptchaVerified(false);
      } else {
        throw new Error("API Error");
      }
    } catch (error) {
      setStatus(null);
      toast.dismiss(loadingToast);
      toast.error("Something went wrong with the form submission.");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.bgOverlay}></div>

      <div className={styles.container}>
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
              <span className={styles.infoLabel}>Address:</span>
              <p>B69, Ground floor Sector 63, Noida, Uttar Pradesh 201301</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone:</span>
              <p><a href="tel:+919667007078" className={styles.link}>+91 96670 07078</a></p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email:</span>
              <p><a href="mailto:connect@thearec.com" className={styles.link}>connect@thearec.com</a></p>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Contact Us</h2>
          <p className={styles.formSubtitle}>Provide your details to proceed.</p>

          <form onSubmit={handleFinalSubmit} className={styles.form}>
            
            {/* GOOGLE RECAPTCHA - Manual Render Target */}
            <div className={styles.inputGroup} style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px', minHeight: '78px' }}>
               <div id="recaptcha-main"></div> 
            </div>

            <div className={styles.inputGroup}>
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Full Name" className={styles.inputField} required />
            </div>

            <div className={styles.phoneInputGroup}>
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} className={styles.countrySelect}>
                <option value="+91">+91 IN</option>
                <option value="+971">+971 UAE</option>
                <option value="+1">+1 USA</option>
                <option value="+44">+44 UK</option>
              </select>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className={styles.phoneInputField} required />
            </div>

            <div className={styles.inputGroup}>
              <select name="occupation" value={formData.occupation} onChange={handleChange} className={styles.inputField} required>
                <option value="" disabled>Select Occupation</option>
                <option value="High-Net-Worth Individual">High-Net-Worth Individual (HNWI)</option>
                <option value="Non-Resident Indian">Non-Resident Indian (NRI)</option>
                <option value="Business Owner">Business Owner / Entrepreneur</option>
                <option value="Corporate Executive">Corporate Executive (CXO/VP)</option>
                <option value="Institutional Investor">Institutional Investor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === "loading" || isLocked}>
              {isLocked ? "ENTRY LIMITED (1 HR)" : (status === "loading" ? "SUBMITTING..." : "SUBMIT")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;