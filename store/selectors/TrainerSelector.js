import { createSelector } from 'reselect';

const trainerStateSelector = state => state.trainerReducer;

export const trainerSelector = () =>
  createSelector(trainerStateSelector, trainer => trainer.trainer);
