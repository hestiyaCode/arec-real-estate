import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";

export default async function SingleBlog({ params }) {
  await dbConnect();
  const { slug } = params; // URL se slug milega (e.g. 'my-first-blog')
  
  const post = await Blog.findOne({ slug });

  if (!post) return notFound();

  return (
    <article className="container" style={{ padding: "120px 0", maxWidth: "800px", textAlign: "left" }}>
      <h1 className="mainTitle">{post.title}</h1>
      <hr />
      {/* Rich Text Editor ka HTML yahan render hoga */}
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }} 
        style={{ marginTop: "30px", lineHeight: "1.8" }}
      />
    </article>
  );
}