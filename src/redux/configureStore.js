import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const root = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = configureStore({ reducer: root });

export default store;
