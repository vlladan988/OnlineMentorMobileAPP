import {
  GET_GROCERIES,
  SET_GROCERIES
} from '../actionTypes/GroceriesActionTypes';

export const getGroceries = () => ({
  type: GET_GROCERIES
});

export const setGroceries = payload => ({
  type: SET_GROCERIES,
  payload
});

//   export const updateGoal = payload => ({
//     type: UPDATE_GOAL,
//     payload
//   });
//   export const resetGoal = () => ({
//     type: RESET_GOAL
//   });
