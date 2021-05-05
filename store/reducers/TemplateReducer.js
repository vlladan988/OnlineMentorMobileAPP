import produce from 'immer';
import { SET_TEMPLATES, SET_CLIENT_TEMPLATES } from '../actionTypes/TemplateActionTypes';

const initialState = {
  templates: [],
  clientTemplates: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_TEMPLATES:
        draft.templates = action.payload;
        break;
      case SET_CLIENT_TEMPLATES:
        draft.clientTemplates = action.payload;
        break;
    }
  });
