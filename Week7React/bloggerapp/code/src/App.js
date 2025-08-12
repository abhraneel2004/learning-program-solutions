import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [active, setActive] = useState("book");

  const renderComponent = () => {
    if (active === "book") return <BookDetails />;
    if (active === "blog") return <BlogDetails />;
    if (active === "course") return <CourseDetails />;
    return <p>Please select an option above.</p>;
  };

  return (
    <div className="app-container">
      <h1 className="app-title">📚 Digital Nurture Blog</h1>

      <div className="nav-buttons">
        <button 
          className={active === "book" ? 'active' : ''} 
          onClick={() => setActive("book")}
        >
          📖 Books
        </button>
        <button 
          className={active === "blog" ? 'active' : ''} 
          onClick={() => setActive("blog")}
        >
          ✍️ Blogs
        </button>
        <button 
          className={active === "course" ? 'active' : ''} 
          onClick={() => setActive("course")}
        >
          🎓 Courses
        </button>
      </div>

      <div className="component-box">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
