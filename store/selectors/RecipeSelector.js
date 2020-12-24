import { createSelector } from 'reselect';

const recipeStateSelector = state => state.recipeReducer;

export const recipeTypeSelector = () =>
  createSelector(recipeStateSelector, recipe => recipe.recipeTypes);

export const recipeListSelector = () =>
  createSelector(recipeStateSelector, recipe => recipe.recipeList);

export const isMealTypeModalSelector = () =>
  createSelector(recipeStateSelector, recipe => recipe.isMealTypeModal);
