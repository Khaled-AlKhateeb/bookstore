import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { bookAdded } from './booksSlice';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);
  const onSaveBookClicked = () => {
    if (title && author && category) {
      dispatch(
        bookAdded({
          id: uuidv4(),
          title,
          author,
          category,
        }),
      );
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div className="addbook-container">
      <h2 className="addbook-title">add new book</h2>
      <form
        className="addbook-form"
      >
        <input
          className="addbook-input input"
          type="text"
          id="bookTitle"
          placeholder="Book title"
          value={title}
          onChange={onTitleChange}
          required
        />
        <input
          className="addbook-input input"
          type="text"
          id="bookAuthor"
          placeholder="Book Author"
          value={author}
          onChange={onAuthorChange}
          required
        />
        <select
          className="category-selection input"
          type="text"
          id="bookCategory"
          defaultValue="select"
          value={category}
          onChange={onCategoryChange}
          required
        >
          <option className="category-option" value="select" hidden>Select Category</option>
          <option className="category-option" value="Action">Action</option>
          <option className="category-option" value="Adventure">Adventure</option>
          <option className="category-option" value="Art">Art</option>
          <option className="category-option" value="Development">Development</option>
          <option className="category-option" value="Dystopian">Dystopian</option>
          <option className="category-option" value="Fantasy">Fantasy</option>
          <option className="category-option" value="Health">Health</option>
          <option className="category-option" value="Historical fiction">Historical Fiction</option>
          <option className="category-option" value="History">History</option>
          <option className="category-option" value="Horror">Horror</option>
          <option className="category-option" value="Humor">Humor</option>
          <option className="category-option" value="Mystery">Mystery</option>
          <option className="category-option" value="Paranormal">Paranormal</option>
          <option className="category-option" value="Science fiction">Science Fiction</option>
          <option className="category-option" value="Thriller">Thriller</option>
        </select>
        <button
          id="bookContent"
          className="addbook-btn"
          type="button"
          onClick={onSaveBookClicked}
        >
          add book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
