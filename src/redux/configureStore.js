import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books.js';
import categoryReducer from './categories/categories.js';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

export default store = Redux.createStore(rootReducer);