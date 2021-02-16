import {
  FETCH_TEMPLATE_MEALS,
  SET_TEMPLATE_MEALS,
  GET_TEMPLATE_MEALS,
  ADD_TEMPLATE_MEAL,
  EDIT_TEMPLATE_MEAL,
  DELETE_TEMPLATE_MEAL,
  GET_TEMPLATE_MEAL_RECIPIES,
  ADD_TEMPLATE_MEAL_RECIPE,
  DELETE_TEMPLATE_MEAL_RECIPE,
  SET_TEMPLATE_MEAL_RECIPIES,
  CLEAR_TEMPLATE_MEAL_RECIPIES,
  CHANGE_TEMPLATE_MEAL_ORDER,
  CLEAR_TEMPLATE_MEALS
} from '../actionTypes/TemplateMealActionTypes';

export const fetchTemplateMeals = () => ({
  type: FETCH_TEMPLATE_MEALS
});

export const setTemplateMeals = payload => ({
  type: SET_TEMPLATE_MEALS,
  payload
});

export const getTemplateMeals = payload => ({
  type: GET_TEMPLATE_MEALS,
  payload
});

export const addTemplateMeal = payload => ({
  type: ADD_TEMPLATE_MEAL,
  payload
});

export const editTemplateMeal = payload => ({
  type: EDIT_TEMPLATE_MEAL,
  payload
});

export const deleteTemplateMeal = payload => ({
  type: DELETE_TEMPLATE_MEAL,
  payload
});

export const getTemplateMealRecipies = payload => ({
  type: GET_TEMPLATE_MEAL_RECIPIES,
  payload
});

export const addTemplateMealRecipe = payload => ({
  type: ADD_TEMPLATE_MEAL_RECIPE,
  payload
});

export const setTemplateMealRecipies = payload => ({
  type: SET_TEMPLATE_MEAL_RECIPIES,
  payload
});

export const deleteTemplateMealRecipe = payload => ({
  type: DELETE_TEMPLATE_MEAL_RECIPE,
  payload
});

export const resetTemplateMealRecipe = () => ({
  type: CLEAR_TEMPLATE_MEAL_RECIPIES
});

export const resetTemplateMeals = () => ({
  type: CLEAR_TEMPLATE_MEALS
});

export const changeTemplateMealOrder = payload => ({
  type: CHANGE_TEMPLATE_MEAL_ORDER,
  payload
});

//   export const deleteTemplate = payload => ({
//     type: DELETE_TEMPLATE,
//     payload
//   });
