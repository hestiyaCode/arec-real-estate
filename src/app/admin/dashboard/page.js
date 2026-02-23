"use client";
import { useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("blogs"); // Toggle between 'blogs' and 'projects'
  const [isUploading, setIsUploading] = useState(false);

  // --- BLOG STATE ---
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "Real Estate",
  });

  // --- PROJECT STATE ---
  const [projectData, setProjectData] = useState({
    title: "",
    location: "",
    category: "",
    tag: "",
    targetYield: "",
    tokenPrice: "",
    availableTokens: "",
    totalValue: "",
  });
  const [projectImage, setProjectImage] = useState(null);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) window.location.href = "/admin/login";
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // --- BLOG SUBMIT ---
  const handleBlogSubmit = async (e) => {
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
      }
    } catch (err) {
      console.error(err);
    }
  };

  // --- PROJECT SUBMIT (Vercel Blob) ---
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!projectImage) return alert("Please select a project image");

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", projectImage);
      // Append all text fields
      Object.keys(projectData).forEach((key) => formData.append(key, projectData[key]));

      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData, // Sending FormData for File + Text
      });

      if (res.ok) {
        alert("Premium Project Listed Successfully!");
        setProjectData({
          title: "", location: "", category: "", tag: "",
          targetYield: "", tokenPrice: "", availableTokens: "", totalValue: "",
        });
        setProjectImage(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <h1 className={styles.sidebarTitle}>AREC Admin</h1>
          <nav className={styles.nav}>
            <p 
              className={`${styles.navItem} ${activeTab === "blogs" ? styles.activeNav : ""}`}
              onClick={() => setActiveTab("blogs")}
            >
              📝 Post New Blog
            </p>
            <p 
              className={`${styles.navItem} ${activeTab === "projects" ? styles.activeNav : ""}`}
              onClick={() => setActiveTab("projects")}
            >
              🏢 Premium Projects
            </p>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2 className={styles.headerTitle}>
            {activeTab === "blogs" ? "Blog Management" : "Premium Investment Opportunities"}
          </h2>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        </header>

        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <h3 className={styles.formHeading}>
              {activeTab === "blogs" ? "Create a New Insight" : "List New Opportunity"}
            </h3>

            {activeTab === "blogs" ? (
              /* BLOG FORM */
              <form onSubmit={handleBlogSubmit} className={styles.blogForm}>
                <div className={styles.inputGroup}>
                  <label>Blog Title</label>
                  <input 
                    type="text" placeholder="e.g. Best Investment in 2026"
                    value={blogData.title}
                    onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                    required 
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Image URL</label>
                  <input 
                    type="text" placeholder="Cloudinary or Unsplash link"
                    value={blogData.imageUrl}
                    onChange={(e) => setBlogData({...blogData, imageUrl: e.target.value})}
                    required 
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Description</label>
                  <textarea 
                    placeholder="Write content..." rows="6"
                    value={blogData.description}
                    onChange={(e) => setBlogData({...blogData, description: e.target.value})}
                    required 
                  ></textarea>
                </div>
                <button type="submit" className={styles.publishBtn}>Publish Blog</button>
              </form>
            ) : (
              /* PROJECT FORM */
              <form onSubmit={handleProjectSubmit} className={styles.blogForm}>
                <div className={styles.gridContainer}>
                  <div className={styles.inputGroup}>
                    <label>Project Title</label>
                    <input required type="text" placeholder="Primemark Mall" 
                      onChange={(e) => setProjectData({...projectData, title: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Location</label>
                    <input required type="text" placeholder="Sector 94, Noida" 
                      onChange={(e) => setProjectData({...projectData, location: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Category</label>
                    <input required type="text" placeholder="Commercial Retail" 
                      onChange={(e) => setProjectData({...projectData, category: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Tag</label>
                    <input type="text" placeholder="Filling Fast / New Launch" 
                      onChange={(e) => setProjectData({...projectData, tag: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Target Yield (%)</label>
                    <input required type="text" placeholder="12%" 
                      onChange={(e) => setProjectData({...projectData, targetYield: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Token Price</label>
                    <input required type="text" placeholder="₹10 Lakhs" 
                      onChange={(e) => setProjectData({...projectData, tokenPrice: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Available Tokens</label>
                    <input required type="text" placeholder="45/100" 
                      onChange={(e) => setProjectData({...projectData, availableTokens: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Total Value</label>
                    <input required type="text" placeholder="₹50 Cr" 
                      onChange={(e) => setProjectData({...projectData, totalValue: e.target.value})} />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Cover Image (Upload to Vercel Blob)</label>
                  <input required type="file" accept="image/*" 
                    onChange={(e) => setProjectImage(e.target.files[0])} />
                </div>
                <button disabled={isUploading} type="submit" className={styles.publishBtn}>
                  {isUploading ? "Uploading..." : "Publish Project Opportunity"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}