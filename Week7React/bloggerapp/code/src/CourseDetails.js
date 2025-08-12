
import React from 'react';

const CourseDetails = () => {
  const courses = [
    {
      id: 1,
      title: "Advanced React",
      instructor: "Jaden Smith",
      duration: "8 weeks",
      level: "Advanced",
      description: "Master React hooks, context API, and performance optimization techniques."
    },
    {
      id: 2,
      title: "Full Stack Development",
      instructor: "Sarah Williams",
      duration: "12 weeks",
      level: "Intermediate",
      description: "Learn to build complete applications using React, Node.js, and MongoDB."
    }
  ];

  return (
    <div>
      <h2>🎓 Popular Courses</h2>
      
      {courses.map(course => (
        <div key={course.id} className="content-card">
          <h3>{course.title}</h3>
          <div className="content-row">
            <span className="content-label">Instructor:</span>
            <span className="content-value">{course.instructor}</span>
          </div>
          <div className="content-row">
            <span className="content-label">Duration:</span>
            <span className="content-value">{course.duration}</span>
          </div>
          <div className="content-row">
            <span className="content-label">Level:</span>
            <span className="content-value">{course.level}</span>
          </div>
          <div className="content-row">
            <p>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
