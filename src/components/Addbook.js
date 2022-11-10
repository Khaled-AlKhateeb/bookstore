import React from 'react';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="addbook-container">
        <h2 className="addbook-title">add new book</h2>
        <form
          className="addbook-form"
        >
          <input
            className="addbook-input input"
            type="text"
            placeholder="Book title"
            required
          />
          <input
            className="addbook-input input"
            type="text"
            placeholder="Book Author"
            required
          />
          <select
            className="category-selection input"
            type="text"
            defaultValue="empty"
            required
          >
            <option className="category-option" value="empty" disabled hidden>Select Category</option>
            <option className="category-option" value="action">Action</option>
            <option className="category-option" value="adventure">Adventure</option>
            <option className="category-option" value="art">Art</option>
            <option className="category-option" value="development">Development</option>
            <option className="category-option" value="dystopian">Dystopian</option>
            <option className="category-option" value="fantasy">Fantasy</option>
            <option className="category-option" value="health">Health</option>
            <option className="category-option" value="historical fiction">Historical Fiction</option>
            <option className="category-option" value="history">History</option>
            <option className="category-option" value="horror">Horror</option>
            <option className="category-option" value="humor">Humor</option>
            <option className="category-option" value="mystery">Mystery</option>
            <option className="category-option" value="paranormal">Paranormal</option>
            <option className="category-option" value="science fiction">Science Fiction</option>
            <option className="category-option" value="thriller">Thriller</option>
          </select>
          <button
            id="addbookBtn"
            className="addbook-btn"
            type="submit"
            placeholder="Category"
          >
            add book
          </button>
        </form>
      </div>
    );
  }
}

export default AddBook;
