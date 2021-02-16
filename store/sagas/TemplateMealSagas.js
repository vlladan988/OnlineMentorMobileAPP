/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError } from '../actions/ErrorActions';
import templateMealService from '../../services/TemplateMealService';
import {
  setTemplateMeals,
  setTemplateMealRecipies,
  getTemplateMeals
} from '../actions/TemplateMealActions';

export function* handleGetTemplateMeals({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(templateMealService.getTemplateMeals, {
      templateId: payload
    });
    const itemOrder = meals.map(meal => meal.sort_number);
    meals.sort((a, b) => itemOrder.indexOf(a.id) - itemOrder.indexOf(b.id));
    yield put(setTemplateMeals(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddTemplateMeal({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(templateMealService.addTemplateMeal, payload);
    yield put(setTemplateMeals(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleEditTemplateMeal({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(templateMealService.editTemplateMeal, payload);
    yield put(setTemplateMeals(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteTemplateMeal({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(templateMealService.deleteTemplateMeal, payload);
    yield put(setTemplateMeals(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleGetTemplateMealRecipies({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: recipies } = yield call(templateMealService.getTemplateMealRecipies, payload);
    yield put(setTemplateMealRecipies(recipies));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddTemplateMealRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: recipies } = yield call(templateMealService.addTemplateMealRecipe, payload);
    yield put(getTemplateMeals(payload.template));
    yield put(setTemplateMealRecipies(recipies));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteTemplateMealRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: recipies } = yield call(templateMealService.deleteTemplateMealRecipe, payload);
    yield put(getTemplateMeals(payload.template));
    yield put(setTemplateMealRecipies(recipies));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleChangeTemplateMealOrder({ payload }) {
  try {
    yield call(templateMealService.changeTemplateMealOrder, payload);
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  }
}
