import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../reducers/books/booksSlice';

const CheckStatus = () => {
  const { books } = useSelector((state) => ({ ...state.books }));
  const dispatch = useDispatch();
  const onCheckStatusClicked = (status) => {
    dispatch(checkStatus(status));
  };
  const renderedStatus = books.map((status) => (
    <button
      key={status.id}
      type="button"
      className="checkstatus-btn"
      onClick={onCheckStatusClicked}
    >
      check status for
      `
      {status.title}
      `
    </button>
  ));

  return (
    <section>
      <h2>Status</h2>
      <div className="status-container">
        {renderedStatus}
      </div>
    </section>
  );
};

export default CheckStatus;
