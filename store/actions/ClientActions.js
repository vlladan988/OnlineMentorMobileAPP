import {
  FETCH_CLIENTS,
  SET_CLIENT_LIST,
  UPDATE_CLIENT
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
