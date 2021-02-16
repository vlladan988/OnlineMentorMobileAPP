import { createSelector } from 'reselect';

const templateMealStateSelector = state => state.templateMealReducer;

export const templateMealListSelector = () =>
  createSelector(templateMealStateSelector, templateMeal => templateMeal.templateMeals);

export const templateMealRecipeListSelector = () =>
  createSelector(templateMealStateSelector, templateMeal => templateMeal.mealRecipies);
