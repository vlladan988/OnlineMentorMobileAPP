import { createSelector } from 'reselect';

const templateStateSelector = state => state.templateReducer;

export const templatesSelector = () =>
  createSelector(templateStateSelector, template => template.templates);
