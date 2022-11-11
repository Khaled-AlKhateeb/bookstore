import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    status: 'idle' || 'loading' || 'succeeded' || 'failed',
    books: [
      {
        id: uuidv4(),
        title: 'Warcraft',
        author: 'Richard A. Kanaak',
        category: 'Historical Fiction',
        complete: false,
      },
      {
        id: uuidv4(),
        title: 'Starcraft',
        author: 'Khaled al-Khateeb',
        category: 'Sience Ficiton',
        complete: false,
      },
    ],
  },
  reducers: {
    bookAdded(state, action) {
      state.books.push(action.payload);
    },
    bookRemove(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { bookAdded, bookRemove } = booksSlice.actions;

export default booksSlice.reducer;
