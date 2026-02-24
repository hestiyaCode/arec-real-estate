"use client";
import { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("blogs"); // 'blogs', 'projects', or 'leads'
  const [isUploading, setIsUploading] = useState(false);

  // --- CONTACT LEADS STATE ---
  const [leads, setLeads] = useState([]);
  const [loadingLeads, setLoadingLeads] = useState(false);

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

  // --- FETCH LEADS FUNCTION ---
  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const res = await fetch("/api/contact");
      const result = await res.json();
      if (result.success) {
        setLeads(result.data);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoadingLeads(false);
    }
  };

  // Jab bhi tab 'leads' par switch ho, data fetch karein
  useEffect(() => {
    if (activeTab === "leads") {
      fetchLeads();
    }
  }, [activeTab]);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) window.location.href = "/admin/login";
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

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

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!projectImage) return alert("Please select a project image");

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", projectImage);
      Object.keys(projectData).forEach((key) => formData.append(key, projectData[key]));

      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData,
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
            <p 
              className={`${styles.navItem} ${activeTab === "leads" ? styles.activeNav : ""}`}
              onClick={() => setActiveTab("leads")}
            >
              📇 Contact Leads
            </p>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h2 className={styles.headerTitle}>
            {activeTab === "blogs" ? "Blog Management" : 
             activeTab === "projects" ? "Premium Investment Opportunities" : 
             "Customer Contact Leads"}
          </h2>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        </header>

        <section className={styles.formSection}>
          <div className={styles.formCard}>
            
            {activeTab === "leads" ? (
              /* LEADS TABLE */
              <div className={styles.leadsContainer}>
                <h3 className={styles.formHeading}>Recent Inquiries</h3>
                {loadingLeads ? (
                  <p>Loading leads...</p>
                ) : leads.length === 0 ? (
                  <p>No leads found.</p>
                ) : (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#f8f9fa", textAlign: "left", borderBottom: "2px solid #eee" }}>
                          <th style={{ padding: "12px" }}>Name</th>
                          <th style={{ padding: "12px" }}>Phone</th>
                          <th style={{ padding: "12px" }}>Occupation</th>
                          <th style={{ padding: "12px" }}>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leads.map((lead) => (
                          <tr key={lead._id} style={{ borderBottom: "1px solid #eee" }}>
                            <td style={{ padding: "12px" }}>{lead.username}</td>
                            <td style={{ padding: "12px" }}>{lead.phoneNumber}</td>
                            <td style={{ padding: "12px" }}>{lead.occupation}</td>
                            <td style={{ padding: "12px", fontSize: "0.85rem", color: "#666" }}>
                              {new Date(lead.createdAt).toLocaleString("en-IN")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ) : activeTab === "blogs" ? (
              /* BLOG FORM */
              <>
                <h3 className={styles.formHeading}>Create a New Insight</h3>
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
              </>
            ) : (
              /* PROJECT FORM */
              <>
                <h3 className={styles.formHeading}>List New Opportunity</h3>
                <form onSubmit={handleProjectSubmit} className={styles.blogForm}>
                  <div className={styles.gridContainer}>
                    <div className={styles.inputGroup}>
                      <label>Project Title</label>
                      <input required type="text" placeholder="Primemark Mall" 
                        value={projectData.title}
                        onChange={(e) => setProjectData({...projectData, title: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Location</label>
                      <input required type="text" placeholder="Sector 94, Noida" 
                        value={projectData.location}
                        onChange={(e) => setProjectData({...projectData, location: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Category</label>
                      <input required type="text" placeholder="Commercial Retail" 
                        value={projectData.category}
                        onChange={(e) => setProjectData({...projectData, category: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Tag</label>
                      <input type="text" placeholder="Filling Fast / New Launch" 
                        value={projectData.tag}
                        onChange={(e) => setProjectData({...projectData, tag: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Target Yield (%)</label>
                      <input required type="text" placeholder="12%" 
                        value={projectData.targetYield}
                        onChange={(e) => setProjectData({...projectData, targetYield: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Token Price</label>
                      <input required type="text" placeholder="₹10 Lakhs" 
                        value={projectData.tokenPrice}
                        onChange={(e) => setProjectData({...projectData, tokenPrice: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Available Tokens</label>
                      <input required type="text" placeholder="45/100" 
                        value={projectData.availableTokens}
                        onChange={(e) => setProjectData({...projectData, availableTokens: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Total Value</label>
                      <input required type="text" placeholder="₹50 Cr" 
                        value={projectData.totalValue}
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
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}