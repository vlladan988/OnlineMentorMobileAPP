import produce from 'immer';
import { SET_CLIENT_LIST, SET_CLIENT } from '../actionTypes/ClientActionTypes';

const initialState = {
  clientList: [],
  currentClient: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_CLIENT_LIST:
        draft.clientList = action.payload;
        break;
      case SET_CLIENT:
        draft.currentClient = action.payload;
        break;
    }
  });
