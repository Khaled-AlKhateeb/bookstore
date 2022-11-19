import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Addbook from './addBook';
import { loaded } from '../redux/bookReducer';

const Booklist = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(loaded());
  }, []);
  return (
    <div className="books-container">
      {Object.keys(books).map((book) => (
        <Book
          key={book}
          title={books[book][0].title}
          author={books[book][0].author}
          id={book}
          category={books[book][0].category}
        />
      ))}
      <Addbook />
    </div>
  );
};

export default Booklist;
