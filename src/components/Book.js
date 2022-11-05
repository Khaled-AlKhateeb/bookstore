import React from 'react';
import progress from './Assets/progress.png';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="book-container">
        <div className="info-container">
          <h2 className="genre">Action</h2>
          <h3 className="book-name">Warcraft</h3>
          <h3 className="author-name">Richard A. Knaak</h3>
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
    );
  }
}

export default Book;
