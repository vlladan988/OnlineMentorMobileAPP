import { createSelector } from 'reselect';

const galleryStateSelector = state => state.galleryReducer;

export const gallerySelector = () =>
  createSelector(galleryStateSelector, gallery => gallery.userGallery);
