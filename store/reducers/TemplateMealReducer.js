import produce from 'immer';
import {
  SET_TEMPLATE_MEALS,
  SET_TEMPLATE_MEAL_RECIPIES,
  CLEAR_TEMPLATE_MEAL_RECIPIES,
  CLEAR_TEMPLATE_MEALS
} from '../actionTypes/TemplateMealActionTypes';

const initialState = {
  templateMeals: [],
  mealRecipies: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_TEMPLATE_MEALS:
        draft.templateMeals = action.payload;
        break;
    }
    switch (action.type) {
      case SET_TEMPLATE_MEAL_RECIPIES:
        draft.mealRecipies = action.payload;
        break;
    }
    switch (action.type) {
      case CLEAR_TEMPLATE_MEAL_RECIPIES:
        draft.mealRecipies = [];
        break;
    }
    switch (action.type) {
      case CLEAR_TEMPLATE_MEALS:
        draft.templateMeals = [];
        break;
    }
  });
