import { createSelector } from 'reselect';

const dailyPlanStateSelector = state => state.dailyPlanReducer;

export const dailyMealListSelector = () =>
  createSelector(dailyPlanStateSelector, daily => daily.dailyMeals);
