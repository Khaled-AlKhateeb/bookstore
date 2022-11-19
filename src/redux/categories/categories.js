const defaultState = [];

const CHECK_STATUS = 'Bookshlef/categories/CHECK_STATUS';

const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        action.text,
      ];
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
  text: 'Under construction',
});

export default categoriesReducer;
