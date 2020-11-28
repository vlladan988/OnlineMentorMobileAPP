/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError } from '../actions/ErrorActions';
import recipeService from '../../services/RecipeService';
import { setRecipeTypes } from '../actions/RecipeActions';

export function* handleGetRecipeTypes() {
  try {
    yield put(setLoader(true));
    const { data: recipeTypes } = yield call(recipeService.getRecipeTypes);
    let radioFormArray = [];
    recipeTypes.forEach(type => {
      radioFormArray.push({ label: type.name, value: type.name });
    });
    yield put(setRecipeTypes(radioFormArray));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

// export function* handleUpdateGoal({ payload }) {
//   try {
//     yield put(setLoader(true));
//     const { data: goal } = yield call(goalService.updateGoal, payload);
//     yield put(setGoal(goal));
//   } catch (error) {
//     yield put(setGlobalError(true));
//   } finally {
//     yield put(setLoader(false));
//   }
// }
