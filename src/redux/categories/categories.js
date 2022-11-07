const COMPLETED = 'COMPLETED';
const INPROGRESS = 'INPROGRESS';

export default categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLETED:
      return 'UNDER CONSTRUCTION';
    case INPROGRESS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export const statusCompleted = () => {
  return {
    type: COMPLETED
  }
};

export const statusInProgress = () => {
  return {
    type: INPROGRESS
  }
};
