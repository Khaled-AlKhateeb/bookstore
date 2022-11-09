import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Addbook = () => {
  const book = useSelector((state) => state.book);
  console.log(book);
  const dispatch = useDispatch();
  const newBook = {
    id: null,
    title: null,
    author: null,
    category: null,
    completed: false,
  };
  const onChangeTitle = (e) => {
    newBook.title = e.target.value;
    return newBook;
  };
  const onChangeAuthor = (e) => {
    newBook.author = e.target.value;
    return newBook;
  };
  const onChangeCategory = (e) => {
    newBook.category = e.target.value;
    return newBook;
  };
  return (
    <div className="addbook-container">
      <h2 className="addbook-title">add new book</h2>
      <form
        className="addbook-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook());
        }}
      >
        <input
          onChange={onChangeTitle}
          className="addbook-input input"
          type="text"
          placeholder="Book title"
          required
        />
        <input
          onChange={onChangeAuthor}
          className="addbook-input input"
          type="text"
          placeholder="Book Author"
          required
        />
        <select
          onChange={onChangeCategory}
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
};

export default Addbook;
