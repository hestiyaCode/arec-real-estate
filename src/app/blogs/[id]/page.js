"use client";
import remarkGfm from 'remark-gfm';
import { useEffect, useState, use } from "react";
import ReactMarkdown from "react-markdown"; // Import karein
import styles from "./BlogDetail.module.css";

export default function BlogDetail({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBlog(data.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className={styles.loadingWrapper}><div className={styles.spinner}></div></div>;
  if (!blog) return <p className={styles.error}>Blog not found!</p>;

  return (
    <div className={styles.pageWrapper}>
      <article className={styles.blogContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.meta}>Published on {new Date(blog.createdAt).toDateString()}</div>
        </header>

        <div className={styles.imageWrapper}>
          <img src={blog.imageUrl} alt={blog.title} className={styles.mainImage} />
        </div>

        {/* Yahan hum Markdown render kar rahe hain */}
        <div className={styles.content}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.description}
            </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}