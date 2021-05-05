import {
  GET_RECIPE_TYPES,
  SET_RECIPE_TYPES,
  ADD_RECIPE,
  FETCH_RECIPE,
  SET_RECIPIES,
  DELETE_RECIPE,
  UPDATE_RECIPE
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
