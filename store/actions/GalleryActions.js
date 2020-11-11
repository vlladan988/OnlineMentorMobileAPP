import {
  SAVE_GALLERY,
  GET_GALLERY,
  SET_GALLERY
} from '../actionTypes/GalleryActionTypes';

export const getGallery = payload => ({
  type: GET_GALLERY,
  payload
});

export const setGallery = payload => ({
  type: SET_GALLERY,
  payload
});

export const saveGallery = payload => ({
  type: SAVE_GALLERY,
  payload
});
