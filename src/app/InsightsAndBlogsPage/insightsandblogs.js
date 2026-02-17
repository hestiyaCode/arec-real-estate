"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './insightsandblogs.module.css';

const InsightsAndBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Database se blogs fetch karna
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div className={styles.container}>Loading Insights...</div>;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Insights and Blogs</h1>
          <p className={styles.subtitle}>Stay updated with the latest in Digital Real Estate</p>
        </header>

        <div className={styles.blogGrid}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog._id} className={styles.blogCard}>
                <div className={styles.imagePlaceholder}>
                  <img src={blog.imageUrl} alt={blog.title} />
                  <span className={styles.cardBadge}>{blog.category || "Real Estate"}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric'
                    })}</span>
                    <span className={styles.dot}>•</span>
                    <span>{blog.category || "Insight"}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{blog.title}</h2>
                  <p className={styles.cardDescription}>
                    {blog.description.substring(0, 180)}...
                  </p>
                  
                  {/* Dynamic ID ke sath Link */}
                  <Link href={`/blogs/${blog._id}`} className={styles.footerLink}>
                    Read More →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs published yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightsAndBlogs;