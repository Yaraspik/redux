import { SEARCH_VALUE, CLEAR_SEARCH_VALUE } from './actions';

const initialState = "";

const searchReducer = (state = initialState, action: { type: string, payload: string }) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return action.payload;
    case CLEAR_SEARCH_VALUE:
      return initialState;
    default:
      return state;
  }
}

export default searchReducer;