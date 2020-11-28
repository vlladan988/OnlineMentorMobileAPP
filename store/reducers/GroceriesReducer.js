import produce from 'immer';
import { SET_GROCERIES } from '../actionTypes/GroceriesActionTypes';

const initialState = {
  groceries: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_GROCERIES:
        draft.groceries = action.payload;
        break;
    }
  });
