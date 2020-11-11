import { call, put, select } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setSignInError, setGlobalError } from '../actions/ErrorActions';
import { setClientList } from '../actions/ClientActions';
import clientService from '../../services/ClientService';
import { userSelector } from '../selectors/UserSelector';
import { setUpdatedUser } from '../actions/UserActions';
import { AsyncStorage } from 'react-native';

export function* handleFetchClients() {
  try {
    yield put(setLoader(true));
    const user = yield select(userSelector());
    const { data: clients } = yield call(clientService.getClients, {
      params: { userType: user.user_type }
    });
    yield put(setClientList(clients));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(setGlobalError(true));
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateClient({ payload }) {
  try {
    yield put(setLoader(true));
    const client = yield call(clientService.updateUser, payload);
    yield put(setUpdatedUser(client.data));
    AsyncStorage.setItem('user', JSON.stringify(client.data));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
