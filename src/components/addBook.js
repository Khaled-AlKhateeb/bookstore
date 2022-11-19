import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookReducer';

const Addbook = () => {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const dispatch = useDispatch();
  const obj = {
    item_id: uuidv4(),
    title: titleValue,
    author: authorValue,
    category: categoryValue,
  };
  const titleInput = (e) => {
    setTitleValue(e.target.value);
  };
  const authorInput = (e) => {
    setAuthorValue(e.target.value);
  };
  const categoryInput = (e) => {
    setCategoryValue(e.target.value);
  };
  const initialValue = () => {
    if ((titleValue === '') || (authorValue === '') || (categoryValue === '')) {
      alert('All fields are required');
    } else {
      dispatch(addBook(obj));
    }
  };

  return (
    <div className="addbook-container">
      <h2 className="addbook-title">add new book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
        }}
        className="addbook-input-container"
      >
        <input
          className="addbook-input input"
          type="text"
          placeholder="Book title"
          onChange={titleInput}
          required
        />
        <input
          className="addbook-input input"
          type="text"
          placeholder="Author name"
          onChange={authorInput}
          required
        />
        <select
          className="addbook-input"
          name="category"
          onChange={categoryInput}
          required
        >
          <option value="empty" hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Sience Fiction">Sience Fiction</option>
        </select>
        <button
          className="addbook-btn"
          type="submit"
          onClick={() => { initialValue(); }}
        >
          add book
        </button>
      </form>
    </div>
  );
};

export default Addbook;
