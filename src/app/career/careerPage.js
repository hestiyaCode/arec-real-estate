"use client";

import React, { useState } from 'react';
import styles from './careerPage.module.css';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    resume: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, resume: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('reason', formData.reason);
    data.append('resume', formData.resume);

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        body: data,
      });
console.log(response)
      if (response.ok) {
         
        setSubmitted(true);
       
      } else {
        const err = await response.json();
        alert(`Error: ${err.error}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Join the <span className={styles.greenHighlight}>The AREC</span> Team</h1>
          <p>Innovation meets the stage. Explore our open positions below.</p>
        </header>

        {/* Current Openings Section */}
        <section className={styles.openingsSection}>
          <h2 className={styles.sectionTitle}>Current Openings</h2>
          
          {/* Job 1: Sales Executive */}
          <div className={styles.jobCard}>
            <div className={styles.jobInfo}>
              <h3>Sales Executive</h3>
              <p className={styles.jobDescription}>
                Drive TheaRec's growth by identifying new business opportunities and managing corporate 
                partnerships. We're looking for a persuasive communicator with a passion for the arts.
              </p>
              <div className={styles.jobTags}>
                <span>Full-time</span>
                <span>Remote/Hybrid</span>
                <span>2+ Years Exp</span>
              </div>
            </div>
            <a href="#apply-form" className={styles.applyBtn}>Apply Now</a>
          </div>

          {/* Job 2: Assistant Executive */}
          <div className={styles.jobCard}>
            <div className={styles.jobInfo}>
              <h3>Assistant Executive</h3>
              <p className={styles.jobDescription}>
                Support our executive leadership in streamlining operations and project coordination. 
                Ideal for a highly organized individual looking to break into theater management.
              </p>
              <div className={styles.jobTags}>
                <span>Full-time</span>
                <span>On-site</span>
                <span>Junior Level</span>
              </div>
            </div>
            <a href="#apply-form" className={styles.applyBtn}>Apply Now</a>
          </div>
        </section>

        {/* Application Form Section */}
        <main id="apply-form" className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2>Application Form</h2>
            <p>Fill out the details below to start your journey with us.</p>
          </div>

          {submitted ? (
            <div className={styles.successMsg}>
              <h3 className={styles.greenHighlight}>Bravo! Your application has been received.</h3>
              <p>Our team will reach out if it's a match.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" id="name" name="name" 
                    placeholder="e.g. Alex Green"
                    className={styles.inputField} 
                    onChange={handleChange} required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" id="email" name="email" 
                    placeholder="alex@example.com"
                    className={styles.inputField} 
                    onChange={handleChange} required 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="reason">Why do you want to join TheaRec?</label>
                <textarea 
                  id="reason" name="reason" 
                  placeholder="Tell us about your passion..."
                  className={styles.textField} 
                  onChange={handleChange} required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="resume" className={styles.fileLabel}>
                  Resume Upload (PDF/Doc)
                </label>
                <input 
                  type="file" 
                  id="resume" 
                  name="resume" 
                  accept=".pdf,.doc,.docx"
                  className={styles.fileInput}
                  onChange={handleChange}
                  required 
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isUploading}>
                {isUploading ? "Uploading..." : "Submit Application"}
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}