import produce from 'immer';
import { SET_GOAL } from '../actionTypes/GoalActionTypes';

const initialState = {
  goal: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_GOAL:
        draft.goal = action.payload;
        break;
    }
  });
