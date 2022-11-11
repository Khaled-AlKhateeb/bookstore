import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'Warcraft',
    author: 'Richard A. Kanaak',
    complete: false,
  },
  {
    id: uuidv4(),
    title: 'Starcraft',
    author: 'Khaled al-Khateeb',
    complete: false,
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { bookAdded } = booksSlice.actions;

export default booksSlice.reducer;
