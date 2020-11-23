import { call, put, select } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import { setUpdatedUser } from '../actions/UserActions';
import { AsyncStorage } from 'react-native';
import trainerService from '../../services/TrainerService';
import { userSelector } from '../selectors/UserSelector';
import { setTrainer } from '../actions/TrainerActions';

export function* handleUpdateTrainer({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: trainer } = yield call(trainerService.updateTrainer, payload);
    yield put(setUpdatedUser(trainer));
    AsyncStorage.setItem('user', JSON.stringify(trainer));
    yield put(setShowStandardPopUp('Profile saved successfully.'));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleGetTrainer() {
  try {
    yield put(setLoader(true));
    const user = yield select(userSelector());
    const { data: trainer } = yield call(trainerService.getTrainer, user.id);
    yield put(setTrainer(trainer));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
