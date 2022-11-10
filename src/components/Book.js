import React from 'react';
import { useSelector } from 'react-redux';
import progress from './Assets/progress.png';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const renderedBooks = books.map((book) => (
    <div className="book-container" key={book.id}>
      <div className="info-container">
        <h2 className="genre">{book.category}</h2>
        <h3 className="book-name">{book.title}</h3>
        <h3 className="author-name">{book.author}</h3>
        <div className="media-container">
          <button type="button" className="media-btns">Comments</button>
          <button type="button" className="media-btns">Remove</button>
          <button type="button" className="media-btns">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <img className="progress-img" src={progress} alt="progress img" />
        <div className="completed-text">
          <span className="percentage">64%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="progress-update">
        <span className="progress-title">current chapter</span>
        <span className="progress-name">Chapter 17</span>
        <button type="button" className="update-btn">update progress</button>
      </div>
    </div>
  ));

  return (
    <section className="books-list">
      <h2>Books</h2>
      {renderedBooks}
    </section>
  );
};

export default BooksList;
