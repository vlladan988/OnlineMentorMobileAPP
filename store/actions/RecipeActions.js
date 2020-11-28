import {
  GET_RECIPE_TYPES,
  SET_RECIPE_TYPES
} from '../actionTypes/RecipeActionTypes';

export const getRecipeTypes = () => ({
  type: GET_RECIPE_TYPES
});

export const setRecipeTypes = payload => ({
  type: SET_RECIPE_TYPES,
  payload
});

//   export const updateGoal = payload => ({
//     type: UPDATE_GOAL,
//     payload
//   });
//   export const resetGoal = () => ({
//     type: RESET_GOAL
//   });
