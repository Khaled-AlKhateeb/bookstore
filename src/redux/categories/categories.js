const COMPLETED = 'COMPLETED';
const INPROGRESS = 'INPROGRESS';

export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case COMPLETED:
      return 'UNDER CONSTRUCTION';
    case INPROGRESS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
}

export const statusCompleted = () => ({
  type: COMPLETED,
});

export const statusInProgress = () => ({
  type: INPROGRESS,
});
