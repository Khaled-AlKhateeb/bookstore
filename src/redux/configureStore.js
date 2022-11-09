import { combineReducers, legacy_createStore as createStore } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducers = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

export default createStore(
  (state, action) => reducers(state, action),
);
