import BlogEditor from "../components/BlogEditor";

export default function AdminPage() {
  return (
    // Inline styles se background ko white aur text ko black force kiya hai
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      width: '100%',
      padding: '120px 0', 
      color: '#000000' 
    }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <h1 className="mainTitle" style={{ color: '#000000', fontSize: '3rem', marginBottom: '10px' }}>
          Create New <span className="greenText"> Blog Post</span>
        </h1>
        <p style={{ color: '#666', marginBottom: '40px', fontSize: '1.1rem' }}>
          Use the editor below to write and format your blog.
        </p>
        
        {/* Editor Component */}
        <BlogEditor />

        <button className="primaryBtn" style={{ marginTop: '30px', padding: '15px 40px' }}>
          Publish Blog
        </button>
      </div>
    </div>
  );
}