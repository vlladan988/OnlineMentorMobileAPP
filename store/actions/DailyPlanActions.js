import {
  ADD_DAILY_MEAL,
  FETCH_DAILY_MEAL,
  SET_DAILY_MEAL_LIST,
  ADD_DAILY_MEAL_RECIPE,
  UPDATE_DAILY_MEAL_RECIPE,
  REMOVE_DAILY_MEAL,
  REMOVE_DAILY_MEAL_RECIPE
} from '../actionTypes/DailyPlanActionTypes';

export const fetchDailyMeals = payload => ({
  type: FETCH_DAILY_MEAL,
  payload
});

export const setDailyMealList = payload => ({
  type: SET_DAILY_MEAL_LIST,
  payload
});

export const addDailyMeal = payload => ({
  type: ADD_DAILY_MEAL,
  payload
});

export const removeDailyMeal = payload => ({
  type: REMOVE_DAILY_MEAL,
  payload
});

export const addDailyMealRecipe = payload => ({
  type: ADD_DAILY_MEAL_RECIPE,
  payload
});

export const updateDailyMealRecipe = payload => ({
  type: UPDATE_DAILY_MEAL_RECIPE,
  payload
});

export const removeDailyMealRecipe = payload => ({
  type: REMOVE_DAILY_MEAL_RECIPE,
  payload
});
