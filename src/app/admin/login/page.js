"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AdminLogin.module.css"; 

export default function AdminLogin() {
  // State ko update kiya username hold karne ke liye
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  
  const router = useRouter();
  
  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
  console.log("Login Success!");
  // Pehle cookie ko browser mein register hone ka waqt dein
  setTimeout(() => {
    window.location.replace("/admin/dashboard"); // .href ki jagah .replace try karein
  }, 100);
} else {
      const data = await res.json();
      alert(data.message || "Invalid Credentials!");
    }
  } catch (err) {
    console.error("Login Error:", err);
  }
};

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin} className={styles.loginCard}>
        <h1 className={styles.title}>AREC Admin</h1>
        
        {/* Username Input Field */}
        <div>
          <label className={styles.label}>Admin Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className={styles.inputField}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>

        {/* Password Input Field */}
        <div>
          <label className={styles.label}>Admin Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className={styles.inputField}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <button type="submit" className={styles.loginBtn}>
          Sign In
        </button>
        
        <p className={styles.footerText}>
          Secure Management Portal
        </p>
      </form>
    </div>
  );
}