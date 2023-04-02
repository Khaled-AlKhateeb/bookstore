const SHOW_STATUS = 'SHOW_STATUS';

export const checkStatus = () => ({
  type: SHOW_STATUS,
});

const categoryReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_STATUS:
      return alert('under construction');
    default:
      return state;
  }
};

export default categoryReducer;
