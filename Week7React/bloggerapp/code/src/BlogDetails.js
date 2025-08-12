import React from 'react';

const BlogDetails = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "Mathew Perry",
      date: "August 5, 2025",
      excerpt: "A comprehensive guide to using React Hooks effectively in your applications.",
    },
    {
      id: 2,
      title: "Building Responsive UIs with Modern CSS",
      author: "Boris Johnson",
      date: "July 28, 2025",
      excerpt: "Learn how to create beautiful, responsive interfaces using the latest CSS techniques.",
    }
  ];

  return (
    <div>
      <h2>✍️ Latest Blog Posts</h2>
      
      {blogs.map(blog => (
        <div key={blog.id} className="content-card">
          <h3>{blog.title}</h3>
          <div className="content-row">
            <span className="content-label">Author:</span>
            <span className="content-value">{blog.author}</span>
          </div>
          <div className="content-row">
            <span className="content-label">Published:</span>
            <span className="content-value">{blog.date}</span>
          </div>
          <div className="content-row">
            <p>{blog.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
