import produce from 'immer';
import { SET_TEMPLATES } from '../actionTypes/TemplateActionTypes';

const initialState = {
  templates: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_TEMPLATES:
        draft.templates = action.payload;
        break;
    }
  });
