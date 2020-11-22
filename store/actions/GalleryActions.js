import {
  SAVE_GALLERY,
  GET_GALLERY,
  SET_GALLERY,
  DELETE_GALLERY,
  RESET_GALLERY
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

export const deleteGallery = payload => ({
  type: DELETE_GALLERY,
  payload
});

export const resetGallery = payload => ({
  type: RESET_GALLERY,
  payload
});
