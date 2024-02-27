import { Item } from '../types/Types';
import { SET_USER_VALUE, CLEAR_USER_VALUE } from './actions';

const initialState = {
  title: "",
  price: "",
  id: null,
}

const userValueReducer = (state = initialState, action: { type: string, payload: Item }) => {
  switch (action.type) {
    case SET_USER_VALUE:
      return {
        ...state,
        ...action.payload,
      }
    case CLEAR_USER_VALUE:
      return initialState
    default:
      return state;
  }
}

export default userValueReducer;