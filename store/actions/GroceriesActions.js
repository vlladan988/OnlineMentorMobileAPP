import {
  FETCH_GROCERIES,
  SET_GROCERIES,
  ADD_GROCERIES,
  UPDATE_GROCERIES,
  DELETE_GROCERIES
} from '../actionTypes/GroceriesActionTypes';

export const fetchGroceries = () => ({
  type: FETCH_GROCERIES
});

export const setGroceries = payload => ({
  type: SET_GROCERIES,
  payload
});

export const addGroceries = payload => ({
  type: ADD_GROCERIES,
  payload
});

export const updateGroceries = payload => ({
  type: UPDATE_GROCERIES,
  payload
});

export const deleteGroceries = payload => ({
  type: DELETE_GROCERIES,
  payload
});
