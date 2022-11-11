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
