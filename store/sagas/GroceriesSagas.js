/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError } from '../actions/ErrorActions';
import groceriesService from '../../services/GroceriesService';

export function* handleGetGroceries() {
  try {
    yield put(setLoader(true));
    const { data: groceries } = yield call(groceriesService.getGroceries);
    console.log('grrr', groceries);
    // yield put(setGoal(goal));
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
