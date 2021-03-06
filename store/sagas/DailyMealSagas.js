/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError } from '../actions/ErrorActions';
import dailyService from '../../services/DailyService';
import { setDailyMealList } from '../actions/DailyPlanActions';

export function* handleFetchDailyMeals({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(dailyService.fetchDailyMeals, {
      params: payload
    });
    yield put(setDailyMealList(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddDailyMeal({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(dailyService.addDailyMeal, payload);
    yield put(setDailyMealList(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleRemoveDailyMeal({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(dailyService.deleteDailyMeal, payload);
    yield put(setDailyMealList(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddDailyMealRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(dailyService.addDailyMealRecipe, payload);
    yield put(setDailyMealList(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateDailyMealRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(dailyService.updateDailyMealRecipe, payload);
    yield put(setDailyMealList(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleRemoveDailyMealRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: meals } = yield call(dailyService.deleteDailyMealRecipe, payload);
    yield put(setDailyMealList(meals));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}
