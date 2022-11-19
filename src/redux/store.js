import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookReducer';
import categoryReducer from './categoryReducer';

const root = {
  book: bookSlice,
  category: categoryReducer,
};
const store = configureStore({ reducer: root });

export default store;
