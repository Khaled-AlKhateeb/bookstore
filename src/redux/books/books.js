import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const defaultState = [];

// API data

const APIURLPATH = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j5lJCfJOKlFz5y9NieEJ/books';

// Actions

const FULLFILED = 'Bookshelf/books/FULLFILED';
const ADD_BOOK = 'Bookshlef/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookshlef/books/REMOVE_BOOK';

// Action creators

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const addBook = (obj) => ({
  type: ADD_BOOK,
  id: obj.id,
  title: obj.title,
  author: obj.author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// Thunks

const processBooks = (data, dispatch) => {
  data.then((res) => res.json());
  data.then((data) => {
    const dataArray = [];
    Object.values(data).forEach((value) => {
      dataArray.push(value[0]);
    });
    Object.keys(data).forEach((key, i) => {
      dataArray[i].id = key;
    });
    dispatch(fullfiled(dataArray));
  });
};

export const fetchBooks = createAsyncThunk(
  FULLFILED,
  async (dispatch) => {
    const response = await axios.get(APIURLPATH);
    processBooks(response.data, dispatch);
  },
);

export const postBookItem = (obj) => async (dispatch) => {
  fetch(APIURLPATH, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => dispatch(addBook(obj)));
};

export const deleteBookItem = (id) => async (dispatch) => {
  fetch(`${APIURLPATH}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(id),
  }).then(() => dispatch(removeBook(id)));
};

// Reducer

const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FULLFILED:
      return [...state, ...action.payload.obj];
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state
        .filter((book) => (book.id !== action.id));
    default:
      return state;
  }
};

export default bookReducer;
