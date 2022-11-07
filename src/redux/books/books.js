const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

export default booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case REMOVEBOOK:
      return state.map(book => {
        if (book.id !== action.id) {
          return book;
        }
      });
    default:
      return state;
  };
};

export const addBook = () => {
  return {
    type: ADDBOOK
  }
}

export const removeBook = () => {
  return {
    type: REMOVEBOOK
  }
}
