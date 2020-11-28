import produce from 'immer';
import { SET_RECIPE_TYPES } from '../actionTypes/RecipeActionTypes';

const initialState = {
  recipeTypes: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_RECIPE_TYPES:
        draft.recipeTypes = action.payload;
        break;
    }
  });
