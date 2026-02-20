export default async function sitemap() {
  const baseUrl = "https://thearec.com";

  // 1. Fetch Blogs from your API
  const response = await fetch(`${baseUrl}/api/blogs`);
  const { data: blogs } = await response.json();

  // 2. Map Blogs to sitemap format
  const blogEntries = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog._id}`,
    lastModified: new Date(blog.updatedAt),
  }));

  // 3. Static Pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/InsightsAndBlogsPage`, lastModified: new Date() },
  ];

  return [...staticPages, ...blogEntries];
}