import { createSelector } from 'reselect';

const recipeStateSelector = state => state.recipeReducer;

export const recipeTypeSelector = () =>
  createSelector(recipeStateSelector, recipe => recipe.recipeTypes);
