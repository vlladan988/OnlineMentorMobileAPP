import { createSelector } from 'reselect';

const clientStateSelector = state => state.clientReducer;

export const clientListSelector = () =>
  createSelector(clientStateSelector, client => client.clientList);

export const currentClientSelector = () =>
  createSelector(clientStateSelector, client => client.currentClient);
