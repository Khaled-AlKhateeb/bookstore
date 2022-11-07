const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
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
};

const addBook = () => ({
  type: ADDBOOK,
});

const removeBook = () => ({
  type: REMOVEBOOK,
});

export { booksReducer, addBook, removeBook };
