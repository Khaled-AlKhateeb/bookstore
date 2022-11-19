import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookItem } from '../redux/books/books';
import progress from './Assets/progress.png';

const Books = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="info-container">
        <p className="genre">{category}</p>
        <h1 className="book-name">{title}</h1>
        <p className="author-name">{author}</p>
        <div className="media-container">
          <button
            type="button"
            id="comment"
            name="comment"
            className="media-btns"
          >
            Comments
          </button>
          <button
            type="button"
            id="remove"
            name="remove"
            className="media-btns"
            onClick={() => dispatch(deleteBookItem(id))}
          >
            Remove
          </button>
          <button
            type="button"
            id="edit"
            name="edit"
            className="media-btns"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <img src={progress} alt="progression circle" className="progress-img" />
        <div className="completed-text">
          <span className="percentage">0%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="progress-update">
        <span className="progress-title">CURRENT CHAPTER</span>
        <span className="progress-name">Chapter 1</span>
        <button className="update-btn" type="button" name="update" id="update">UPDATE PREGRESS</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
