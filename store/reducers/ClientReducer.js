import produce from 'immer';
import { SET_CLIENT_LIST } from '../actionTypes/ClientActionTypes';

const initialState = {
  clientList: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_CLIENT_LIST:
        draft.clientList = action.payload;
        break;
    }
  });
