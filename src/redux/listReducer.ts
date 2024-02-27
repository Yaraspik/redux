import { ADD, DELETE, EDIT } from './actions';
import { nanoid } from 'nanoid';
import { Item } from '../types/Types';

const initialState = [
  { title: "Замена стекла", price: "21000", id: nanoid() },
  { title: "Замена дисплея", price: "25000", id: nanoid() },
];

const listReducer = (state = initialState, action: { type: string, payload: Item }) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          ...action.payload,
          id: nanoid(),
        }
      ]
    case DELETE:
      return state.filter((el: Item) => el.id !== action.payload.id);
    case EDIT:
      const { title, price, id } = action.payload;
      const _state = state.map((item) => {
        if (item.id === id) {
          item.title = title;
          item.price = price;
        }
        return item;
      })
      return _state;
    default:
      return state;
  }
}

export default listReducer;