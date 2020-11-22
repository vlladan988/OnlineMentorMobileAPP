import {
  FETCH_CLIENTS,
  SET_CLIENT_LIST,
  UPDATE_CLIENT,
  GET_CLIENT,
  SET_CLIENT,
  ADD_CLIENT,
  DELETE_CLIENT
} from '../actionTypes/ClientActionTypes';

export const fetchClients = () => ({
  type: FETCH_CLIENTS
});

export const setClientList = payload => ({
  type: SET_CLIENT_LIST,
  payload
});

export const updateClient = payload => ({
  type: UPDATE_CLIENT,
  payload
});

export const getClient = payload => ({
  type: GET_CLIENT,
  payload
});

export const setClient = payload => ({
  type: SET_CLIENT,
  payload
});

export const addClient = payload => ({
  type: ADD_CLIENT,
  payload
});

export const deleteClient = payload => ({
  type: DELETE_CLIENT,
  payload
});
