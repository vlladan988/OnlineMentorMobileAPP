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
import { handleGetGallery, handleSaveGallery, handleDeleteGallery } from './GallerySagas';
import { GET_GALLERY, SAVE_GALLERY, DELETE_GALLERY } from '../actionTypes/GalleryActionTypes';
import { handleUpdateTrainer, handleGetTrainer } from './TrainerSagas';
import { UPDATE_TRAINER, GET_TRAINER } from '../actionTypes/TrainerActionTypes';
import {
  handleFetchGroceries,
  handleAddGrocery,
  handleUpdateGrocery,
  handleDeleteGrocery
} from './GrocerySagas';
import {
  FETCH_GROCERIES,
  ADD_GROCERIES,
  UPDATE_GROCERIES,
  DELETE_GROCERIES
} from '../actionTypes/GroceriesActionTypes';
import {
  handleGetRecipeTypes,
  handleAddRecipe,
  handleFetchRecipies,
  handleDeleteRecipe,
  handleUpdateRecipe
} from './RecipeSagas';
import {
  GET_RECIPE_TYPES,
  ADD_RECIPE,
  FETCH_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE
} from '../actionTypes/RecipeActionTypes';
import {
  handleFetchTemplates,
  handleAddTemplate,
  handleUpdateTemplate,
  handleDeleteTemplate,
  handleAssignTemplateToClient,
  handleGetTemplates,
  handleUnassignTemplateFromClient
} from './TemplateSagas';
import {
  FETCH_TEMPLATES,
  ADD_TEMPLATE,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
  ASSIGN_TEMPLATE_TO_CLIENT,
  UNASSIGN_TEMPLATE_TO_CLIENT,
  GET_TEMPLATES
} from '../actionTypes/TemplateActionTypes';
import {
  handleGetTemplateMeals,
  handleAddTemplateMeal,
  handleGetTemplateMealRecipies,
  handleAddTemplateMealRecipe,
  handleDeleteTemplateMealRecipe,
  handleChangeTemplateMealOrder,
  handleEditTemplateMeal,
  handleDeleteTemplateMeal
} from './TemplateMealSagas';
import {
  GET_TEMPLATE_MEALS,
  ADD_TEMPLATE_MEAL,
  EDIT_TEMPLATE_MEAL,
  DELETE_TEMPLATE_MEAL,
  GET_TEMPLATE_MEAL_RECIPIES,
  ADD_TEMPLATE_MEAL_RECIPE,
  DELETE_TEMPLATE_MEAL_RECIPE,
  CHANGE_TEMPLATE_MEAL_ORDER
} from '../actionTypes/TemplateMealActionTypes';
import {
  handleAddDailyMeal,
  handleFetchDailyMeals,
  handleAddDailyMealRecipe,
  handleRemoveDailyMeal,
  handleUpdateDailyMealRecipe,
  handleRemoveDailyMealRecipe
} from './DailyMealSagas';
import {
  ADD_DAILY_MEAL,
  FETCH_DAILY_MEAL,
  ADD_DAILY_MEAL_RECIPE,
  REMOVE_DAILY_MEAL,
  UPDATE_DAILY_MEAL_RECIPE,
  REMOVE_DAILY_MEAL_RECIPE
} from '../actionTypes/DailyPlanActionTypes';

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
    takeLatest(GET_TRAINER, handleGetTrainer),
    takeLatest(GET_RECIPE_TYPES, handleGetRecipeTypes),
    takeLatest(ADD_RECIPE, handleAddRecipe),
    takeLatest(FETCH_RECIPE, handleFetchRecipies),
    takeLatest(DELETE_RECIPE, handleDeleteRecipe),
    takeLatest(UPDATE_RECIPE, handleUpdateRecipe),
    takeLatest(FETCH_GROCERIES, handleFetchGroceries),
    takeLatest(ADD_GROCERIES, handleAddGrocery),
    takeLatest(UPDATE_GROCERIES, handleUpdateGrocery),
    takeLatest(DELETE_GROCERIES, handleDeleteGrocery),
    takeLatest(FETCH_TEMPLATES, handleFetchTemplates),
    takeLatest(GET_TEMPLATES, handleGetTemplates),
    takeLatest(ADD_TEMPLATE, handleAddTemplate),
    takeLatest(UPDATE_TEMPLATE, handleUpdateTemplate),
    takeLatest(DELETE_TEMPLATE, handleDeleteTemplate),
    takeLatest(ASSIGN_TEMPLATE_TO_CLIENT, handleAssignTemplateToClient),
    takeLatest(UNASSIGN_TEMPLATE_TO_CLIENT, handleUnassignTemplateFromClient),
    takeLatest(GET_TEMPLATE_MEALS, handleGetTemplateMeals),
    takeLatest(ADD_TEMPLATE_MEAL, handleAddTemplateMeal),
    takeLatest(EDIT_TEMPLATE_MEAL, handleEditTemplateMeal),
    takeLatest(DELETE_TEMPLATE_MEAL, handleDeleteTemplateMeal),
    takeLatest(GET_TEMPLATE_MEAL_RECIPIES, handleGetTemplateMealRecipies),
    takeLatest(ADD_TEMPLATE_MEAL_RECIPE, handleAddTemplateMealRecipe),
    takeLatest(DELETE_TEMPLATE_MEAL_RECIPE, handleDeleteTemplateMealRecipe),
    takeLatest(CHANGE_TEMPLATE_MEAL_ORDER, handleChangeTemplateMealOrder),
    takeLatest(FETCH_DAILY_MEAL, handleFetchDailyMeals),
    takeLatest(ADD_DAILY_MEAL, handleAddDailyMeal),
    takeLatest(REMOVE_DAILY_MEAL, handleRemoveDailyMeal),
    takeLatest(ADD_DAILY_MEAL_RECIPE, handleAddDailyMealRecipe),
    takeLatest(UPDATE_DAILY_MEAL_RECIPE, handleUpdateDailyMealRecipe),
    takeLatest(REMOVE_DAILY_MEAL_RECIPE, handleRemoveDailyMealRecipe)
  ]);
}
