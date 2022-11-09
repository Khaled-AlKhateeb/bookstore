import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

export default function booksReducer(state = [{
  id: uuidv4(),
  title: 'Warcraft',
  author: 'Richard A. Kanaak',
  category: 'Historical Fantasy',
  completed: false,
}], action) {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.title,
          author: action.author,
          category: action.category,
          completed: false,
        },
        console.log(action),
      ];
    case REMOVEBOOK:
      return state.map((book) => {
        if (book.id !== action.id) {
          return book;
        }
        return state;
      });
    default:
      return state;
  }
}

export const addBook = () => ({
  type: ADDBOOK,
});

export const removeBook = () => ({
  type: REMOVEBOOK,
});
