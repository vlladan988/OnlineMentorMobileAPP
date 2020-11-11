import produce from 'immer';
import { SET_GALLERY } from '../actionTypes/GalleryActionTypes';

const initialState = {
  userGallery: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_GALLERY:
        draft.userGallery = action.payload;
        break;
    }
  });
