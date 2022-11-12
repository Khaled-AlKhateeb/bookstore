import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../reducers/books/booksSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
