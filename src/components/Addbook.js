import React from 'react';

class Addbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="addbook-container">
        <h2 className="addbook-title">add new book</h2>
        <form className="addbook-form">
          <input className="addbook-input-title input" type="text" placeholder="Book title" />
          <select className="category-selection input" type="text">
            <option className="category-option" value="" disabled selected hidden>Category</option>
            <option className="category-option" value="action">Action</option>
          </select>
          <button className="addbook-btn" type="submit" placeholder="Category">add book</button>
        </form>
      </div>
    );
  }
}

export default Addbook;
