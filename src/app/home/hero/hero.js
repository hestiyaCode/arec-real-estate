// "use client";
// import React, { useState } from "react";
// import styles from "./hero.module.css";
// import { Building2, PieChart, Percent, TrendingUp } from "lucide-react"; 
// import { toast, Toaster } from 'react-hot-toast'; 

// export default function Hero() {
//   const [formData, setFormData] = useState({
//     username: '',      
//     phoneNumber: '',   
//     occupation: ''     
//   });

//   const [status, setStatus] = useState(null); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");
//     const loadingToast = toast.loading("Submitting details...");

//     try {
//       const response = await fetch("/api/heroform", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       toast.dismiss(loadingToast);

//       if (response.ok) {
//         setStatus("success");
//         setFormData({ username: '', phoneNumber: '', occupation: '' }); 
        
//         toast.success("Request Sent Successfully!", {
//           style: {
//             background: '#333',
//             color: '#fff',
//             border: '1px solid #22c55e',
//           },
//         });
//       } else {
//         setStatus("error");
//         toast.error("Something went wrong.", {
//           style: { background: '#333', color: '#fff' }
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.dismiss(loadingToast);
//       setStatus("error");
//       toast.error("Server Error! Check connection.", {
//         style: { background: '#333', color: '#fff' }
//       });
//     }
//   };

//   return (
//     <section className={styles.heroWrapper}>
//       <Toaster position="top-center" />

//       <div className={styles.container}>
//         {/* Left Side: Content */}
//         <div className={styles.textContent}>
         
//           <h1 className={styles.mainTitle}>
//             Invest in India’s <br />
//             Growth{" "}
//             <span className={styles.greenText}>Through Real Estate.</span>
//           </h1>
//           <p className={styles.subTitle}>
//             Making real estate accessable and seamless to every Indian.
//           </p>

//           <div className={styles.statsRow}>
//             <div className={styles.statItem}>
//               <div className={styles.iconWrapper}>
//                 <Building2 size={24} />
//               </div>
//               <div>
//                 <h4>Grade-A</h4>
//                 <p>All type of Assets</p>
//               </div>
//             </div>
//             <div className={styles.statItem}>
//               <div className={styles.iconWrapper}>
//                  <PieChart size={24} />
//               </div>
//               <div>
//                 <h4>90%</h4>
//                 <p>Income Distribution</p>
//               </div>
//             </div>
//             <div className={styles.statItem}>
//               <div className={styles.iconWrapper}>
//                 <Percent size={24} />
//               </div>
//               <div>
//                 <h4>Stable</h4>
//                 <p>Rental Yields</p>
//               </div>
//             </div>
//             <div className={styles.statItem}>
//               <div className={styles.iconWrapper}>
//                 <TrendingUp size={24} />
//               </div>
//               <div>
//                 <h4>Assured</h4>
//                 <p>Capital Appreciation</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form */}
//         <div className={styles.formCard}>
//           <h3>Get Started</h3>
//           <p>Register your interest for a private walkthrough.</p>
          
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className={styles.inputField}
//               required
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className={styles.inputField}
//               required
//             />
//             <input
//               type="text"
//               name="occupation"
//               value={formData.occupation}
//               onChange={handleChange}
//               placeholder="Occupation"
//               className={styles.inputField}
//               required
//             />
            
//             <button 
//               type="submit" 
//               className={styles.submitBtn} 
//               disabled={status === "loading"}
//             >
//               {status === "loading" ? "Sending..." : "Request Information"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Link from "next/link";
import styles from "./hero.module.css";
import { Building2, PieChart, Percent, TrendingUp, ArrowUpRight } from "lucide-react"; 

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        
        <div className={styles.heroMain}>
          
          {/* Left Side: Content */}
          <div className={styles.textContent}>
            <span className={styles.badge}>Real Estate Investment</span>
            <h1 className={styles.mainTitle}>
              Invest in India’s <br />
              Growth <span className={styles.greenText}>Through <br /> Real Estate.</span>
            </h1>
            <p className={styles.subTitle}>
              Making premium commercial real estate accessible, transparent, and seamless for every Indian investor.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/contact-page" className={styles.primaryBtn}>
                Get in Touch &rarr;
              </Link>
              <Link href="/projects" className={styles.outlineBtn}>
                <Building2 size={18} /> Explore Projects
              </Link>
            </div>

            <div className={styles.socialProof}>
              <div className={styles.avatarGroup}>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={`${styles.avatar} ${styles.more}`}>+100</div>
              </div>
              <p>Trusted by 100+ Investors</p>
            </div>
          </div>

          {/* Right Side: Featured Property Card (Linked to Contact) */}
          <div className={styles.cardContainer}>
            <Link href="/contact-page" className={styles.cardLink}>
              <div className={styles.featuredCard}>
                <div className={styles.imageWrapper}>
                  <span className={styles.cardBadge}>FEATURED PROPERTY</span>
                  <img 
                    src="/raja-ji.jpeg" 
                    alt="Raja Ji Estates" 
                    className={styles.cardImage}
                  />
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.cardTitle}>Raja Ji Estates</h3>
                      <p className={styles.cardLocation}>📍 Saharanpur, Uttar Pradesh</p>
                    </div>
                    <div className={styles.irrBadge}>10% IRR</div>
                  </div>

                  <div className={styles.cardStats}>
                    <div className={styles.cardStatItem}>
                      <p>MIN INV.</p>
                      <strong>₹15L</strong>
                    </div>
                    <div className={styles.cardStatItem}>
                      <p>YIELD</p>
                      <strong>8.5%</strong>
                    </div>
                    <div className={styles.cardStatItem}>
                      <p>Total Value</p>
                      <strong>3 Crore</strong>
                    </div>
                  </div>
                  
                  <div className={styles.cardArrow}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Stats */}
        <div className={styles.bottomStatsBar}>
          <div className={styles.statItem}>
            <div className={styles.iconBox}><Building2 size={20} /></div>
            <div className={styles.statText}>
              <h4>Grade-A</h4>
              <p>ALL TYPE OF ASSETS</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.iconBox}><PieChart size={20} /></div>
            <div className={styles.statText}>
              <h4>90%</h4>
              <p>INCOME DISTRIBUTION</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.iconBox}><Percent size={20} /></div>
            <div className={styles.statText}>
              <h4>Stable</h4>
              <p>RENTAL YIELDS</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.iconBox}><TrendingUp size={20} /></div>
            <div className={styles.statText}>
              <h4>Assured</h4>
              <p>CAPITAL APPRECIATION</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}