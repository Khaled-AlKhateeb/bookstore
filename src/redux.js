import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const addbook = useSelector(state => state.book)
    return console.log(addbook);
};
