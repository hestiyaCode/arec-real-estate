import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import Link from "next/link";

export default async function BlogPage() {
  await dbConnect();
  // Database se saare blogs mangwaye
  const blogs = await Blog.find({}).sort({ date: -1 });

  return (
    <div className="container" style={{ padding: "100px 0" }}>
      <h1 className="mainTitle">Hamare <span className="greenText">Blogs</span></h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "25px" }}>
        {blogs.map((post) => (
          <div key={post._id} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px" }}>
            <h3>{post.title}</h3>
            {/* Read More button slug ke base par redirect karega */}
            <Link href={`/blog/${post.slug}`} className="greenText">Pura Padhein →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}