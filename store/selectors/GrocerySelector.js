import { createSelector } from 'reselect';

const groceryStateSelector = state => state.groceriesReducer;

export const groceryListSelector = () =>
  createSelector(groceryStateSelector, grocery => grocery.groceries);
