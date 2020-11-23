import { all, takeLatest } from 'redux-saga/effects';
import {
  USER_LOGIN,
  USER_SIGN_UP,
  USER_LOGOUT,
  USER_GOOGLE_LOGIN,
  USER_FACEBOOK_LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  USER_GET,
  PASSWORD_CHANGE,
  USER_UPDATE
} from '../actionTypes/UserActionTypes';
import {
  userLogin,
  userSignUp,
  userLogout,
  userFacebookLogin,
  userGoogleLogin,
  forgotPassword,
  resetPassword,
  userGet,
  passwordChange,
  updateUser
} from '../sagas/ActiveUserSagas';
import {
  FETCH_CLIENTS,
  UPDATE_CLIENT,
  GET_CLIENT,
  ADD_CLIENT,
  DELETE_CLIENT
} from '../actionTypes/ClientActionTypes';
import {
  handleFetchClients,
  handleUpdateClient,
  handleGetClient,
  handleAddClient,
  handleDeleteClient
} from './ClientSagas';
import { GET_GOAL, UPDATE_GOAL } from '../actionTypes/GoalActionTypes';
import { handleGetGoal, handleUpdateGoal } from './GoalSagas';
import {
  handleGetGallery,
  handleSaveGallery,
  handleDeleteGallery
} from './GallerySagas';
import {
  GET_GALLERY,
  SAVE_GALLERY,
  DELETE_GALLERY
} from '../actionTypes/GalleryActionTypes';
import { handleUpdateTrainer, handleGetTrainer } from './TrainerSagas';
import { UPDATE_TRAINER, GET_TRAINER } from '../actionTypes/TrainerActionTypes';

export default function* rootSaga() {
  yield all([
    takeLatest(USER_LOGIN, userLogin),
    takeLatest(USER_SIGN_UP, userSignUp),
    takeLatest(USER_LOGOUT, userLogout),
    takeLatest(USER_FACEBOOK_LOGIN, userFacebookLogin),
    takeLatest(USER_GOOGLE_LOGIN, userGoogleLogin),
    takeLatest(FORGOT_PASSWORD, forgotPassword),
    takeLatest(RESET_PASSWORD, resetPassword),
    takeLatest(USER_GET, userGet),
    takeLatest(PASSWORD_CHANGE, passwordChange),
    takeLatest(USER_UPDATE, updateUser),
    takeLatest(FETCH_CLIENTS, handleFetchClients),
    takeLatest(UPDATE_CLIENT, handleUpdateClient),
    takeLatest(GET_GOAL, handleGetGoal),
    takeLatest(UPDATE_GOAL, handleUpdateGoal),
    takeLatest(GET_GALLERY, handleGetGallery),
    takeLatest(SAVE_GALLERY, handleSaveGallery),
    takeLatest(DELETE_GALLERY, handleDeleteGallery),
    takeLatest(GET_CLIENT, handleGetClient),
    takeLatest(ADD_CLIENT, handleAddClient),
    takeLatest(UPDATE_TRAINER, handleUpdateTrainer),
    takeLatest(DELETE_CLIENT, handleDeleteClient),
    takeLatest(GET_TRAINER, handleGetTrainer)
  ]);
}
