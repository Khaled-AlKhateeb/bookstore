const COMPLETED = 'COMPLETED';
const INPROGRESS = 'INPROGRESS';

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLETED:
      return 'UNDER CONSTRUCTION';
    case INPROGRESS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

const statusCompleted = () => ({
  type: COMPLETED,
});

const statusInProgress = () => ({
  type: INPROGRESS,
});

export { categoryReducer, statusCompleted, statusInProgress };
