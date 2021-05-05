import {
  FETCH_TEMPLATES,
  SET_TEMPLATES,
  ADD_TEMPLATE,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
  ASSIGN_TEMPLATE_TO_CLIENT,
  UNASSIGN_TEMPLATE_TO_CLIENT,
  GET_TEMPLATES,
  SET_CLIENT_TEMPLATES
} from '../actionTypes/TemplateActionTypes';

export const fetchTemplates = () => ({
  type: FETCH_TEMPLATES
});

export const getTemplates = payload => ({
  type: GET_TEMPLATES,
  payload
});

export const setTemplates = payload => ({
  type: SET_TEMPLATES,
  payload
});

export const setClientTemplates = payload => ({
  type: SET_CLIENT_TEMPLATES,
  payload
});

export const addTemplate = payload => ({
  type: ADD_TEMPLATE,
  payload
});

export const updateTemplate = payload => ({
  type: UPDATE_TEMPLATE,
  payload
});

export const deleteTemplate = payload => ({
  type: DELETE_TEMPLATE,
  payload
});

export const assignTemplateToClient = payload => ({
  type: ASSIGN_TEMPLATE_TO_CLIENT,
  payload
});

export const unassignTemplateToClient = payload => ({
  type: UNASSIGN_TEMPLATE_TO_CLIENT,
  payload
});
