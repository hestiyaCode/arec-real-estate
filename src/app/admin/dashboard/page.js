"use client";
import { useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "Real Estate"
  });

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", {
        method: "POST",
      });

      if (res.ok) {
        // Once cookie is cleared via API, redirect to login
        window.location.href = "/admin/login";
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (res.ok) {
        alert("Blog Published Successfully!");
        setBlogData({ title: "", description: "", imageUrl: "", category: "Real Estate" });
      } else {
        alert("Failed to publish blog");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar - Navigation Only */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <h1 className={styles.sidebarTitle}>AREC Admin</h1>
          <nav className={styles.nav}>
            <p className={`${styles.navItem} ${styles.activeNav}`}>
              📝 Post New Blog
            </p>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2 className={styles.headerTitle}>Blog Management</h2>
          
          {/* Logout Button positioned on the right side of the header */}
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </header>

        {/* Blog Upload Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <h3 className={styles.formHeading}>Create a New Insight</h3>
            <form onSubmit={handleSubmit} className={styles.blogForm}>
              <div className={styles.inputGroup}>
                <label>Blog Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Best Investment in 2026"
                  value={blogData.title}
                  onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Image URL</label>
                <input 
                  type="text" 
                  placeholder="Paste image link from Cloudinary or Unsplash"
                  value={blogData.imageUrl}
                  onChange={(e) => setBlogData({...blogData, imageUrl: e.target.value})}
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Description</label>
                <textarea 
                  placeholder="Write your blog content here..."
                  rows="6"
                  value={blogData.description}
                  onChange={(e) => setBlogData({...blogData, description: e.target.value})}
                  required 
                ></textarea>
              </div>

              <button type="submit" className={styles.publishBtn}>
                Publish to Website
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}