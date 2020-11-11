import {
  GET_GOAL,
  SET_GOAL,
  UPDATE_GOAL
} from '../actionTypes/GoalActionTypes';

export const getGoal = payload => ({
  type: GET_GOAL,
  payload
});

export const setGoal = payload => ({
  type: SET_GOAL,
  payload
});

export const updateGoal = payload => ({
  type: UPDATE_GOAL,
  payload
});
