import {
  GET_RECIPE_TYPES,
  SET_RECIPE_TYPES,
  ADD_RECIPE,
  FETCH_RECIPE,
  SET_RECIPIES,
  DELETE_RECIPE,
  UPDATE_RECIPE,
  SET_RECIPE_MODAL
} from '../actionTypes/RecipeActionTypes';

export const getRecipeTypes = () => ({
  type: GET_RECIPE_TYPES
});

export const setRecipeTypes = payload => ({
  type: SET_RECIPE_TYPES,
  payload
});

export const addRecipe = payload => ({
  type: ADD_RECIPE,
  payload
});

export const fetchRecipes = () => ({
  type: FETCH_RECIPE
});

export const setRecipies = payload => ({
  type: SET_RECIPIES,
  payload
});

export const updateRecipe = payload => ({
  type: UPDATE_RECIPE,
  payload
});

export const deleteRecipe = payload => ({
  type: DELETE_RECIPE,
  payload
});

export const setMealTypeModal = () => ({
  type: SET_RECIPE_MODAL
});
//   export const updateGoal = payload => ({
//     type: UPDATE_GOAL,
//     payload
//   });
//   export const resetGoal = () => ({
//     type: RESET_GOAL
//   });
