import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/bookReducer';
import progress from './Assets/progress.png';

const Book = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  const bookRemoveBtn = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book-container">
      <div className="book-info">
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <span className="book-author">{author}</span>
        <div className="action-container">
          <button
            className="action-btn"
            type="button"
          >
            Comments
          </button>
          <hr className="divider" />
          <button
            onClick={bookRemoveBtn}
            type="button"
            className="action-btn"
          >
            Remove
          </button>
          <hr className="divider" />
          <button className="action-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <img className="progress-img" src={progress} alt="progress" />
        <div className="progress-text">
          <h3 className="progress-percentage">64%</h3>
          <p className="progress-completed">Completed</p>
        </div>
      </div>
      <hr className="div-divider" />
      <div className="progress-update">
        <span className="progress-current-chapter">current chapter</span>
        <h4 className="progress-chapter">Chapter 17</h4>
        <button className="update-btn" type="button">update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
