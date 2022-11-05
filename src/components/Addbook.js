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
        <form>
          <input type="text" placeholder="Book title" />
          <select type="text" placeholder="Category">
            <option value="action">Action</option>
          </select>
          <button type="submit" placeholder="Category">add book</button>
        </form>
      </div>
    );
  }
}

export default Addbook;
