import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categoryReducer';

const Categories = () => {
  const dispatch = useDispatch();
  const showStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button
        type="button"
        onClick={showStatus}
        className="check-status-btn"
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
