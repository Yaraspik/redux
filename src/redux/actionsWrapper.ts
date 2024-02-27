import { Item } from '../types/Types';
import { CLEAR_USER_VALUE, SET_USER_VALUE, DELETE, ADD, EDIT, SEARCH_VALUE, CLEAR_SEARCH_VALUE } from './actions';

export function clearUserValue() {
  return {
    type: CLEAR_USER_VALUE,
  }
}

export function setUserValue(item: Item) {
  return {
    type: SET_USER_VALUE,
    payload: item,
  }
}

export function editItem(item: Item) {
  return {
    type: EDIT,
    payload: item,
  }
}

export function addItem(item: Item) {
  return {
    type: ADD,
    payload: item,
  }
}

export function deleteItem(item: Item) {
  return {
    type: DELETE,
    payload: item,
  }
}

export function setSearchValue(s: string) {
  return {
    type: SEARCH_VALUE,
    payload: s,
  }
}

export function clearSearchValue() {
  return {
    type: CLEAR_SEARCH_VALUE,
  }
}