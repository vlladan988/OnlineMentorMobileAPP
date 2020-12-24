/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError } from '../actions/ErrorActions';
import goalService from '../../services/GoalService';
import { setGoal } from '../actions/GoalActions';

export function* handleGetGoal({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: goal } = yield call(goalService.getGoal, payload);
    yield put(setGoal(goal));
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateGoal({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: goal } = yield call(goalService.updateGoal, payload);
    yield put(setGoal(goal));
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}
