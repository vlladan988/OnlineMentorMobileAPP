import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import { setUpdatedUser } from '../actions/UserActions';
import { AsyncStorage } from 'react-native';
import trainerService from '../../services/TrainerService';

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
