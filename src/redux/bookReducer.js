import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const LOADED = 'LOADED';
const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j5lJCfJOKlFz5y9NieEJ/books';

export const loaded = createAsyncThunk(LOADED, async () => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (obj, thunkAPI) => {
  await fetch(
    APIURL, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  thunkAPI.dispatch(loaded());
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, thunkAPI) => {
  await fetch(
    `${APIURL}/${id}`, {
      method: 'DELETE',
    },
  );
  thunkAPI.dispatch(loaded());
});

const bookSlice = createSlice({
  name: 'bookStore',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loaded.fulfilled, (state, action) => action.payload,
    );
  },
});

export default bookSlice.reducer;
