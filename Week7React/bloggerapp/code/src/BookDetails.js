import React from 'react';

const BookDetails = () => {
  const books = [
    {
      id: 1,
      title: "React in Action",
      author: "Mark Cuban",
      pages: 350,
      published: "2021",
    },
    {
      id: 2,
      title: "Learning JavaScript Design Patterns",
      author: "Sofia Rayes",
      pages: 254,
      published: "2022",
    }
  ];

  return (
    <div>
      <h2>📚 Recommended Books</h2>
      
      {books.map(book => (
        <div key={book.id} className="content-card">
          <h3>{book.title}</h3>
          <div className="content-row">
            <span className="content-label">Author:</span>
            <span className="content-value">{book.author}</span>
          </div>
          <div className="content-row">
            <span className="content-label">Pages:</span>
            <span className="content-value">{book.pages}</span>
          </div>
          <div className="content-row">
            <span className="content-label">Published:</span>
            <span className="content-value">{book.published}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
