import { createSelector } from 'reselect';

const goalStateSelector = state => state.goalReducer;

export const goalSelector = () =>
  createSelector(goalStateSelector, goal => goal.goal);
