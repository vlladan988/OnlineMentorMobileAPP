import { call, put, select } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import {
  setSignInError,
  setGlobalError,
  setSignUpErrors
} from '../actions/ErrorActions';
import {
  setClientList,
  setClient,
  fetchClients
} from '../actions/ClientActions';
import clientService from '../../services/ClientService';
import { userSelector } from '../selectors/UserSelector';
import { setUpdatedUser } from '../actions/UserActions';
import { AsyncStorage } from 'react-native';
import NavigationService from '../../services/NavigationService';

export function* handleFetchClients() {
  try {
    yield put(setLoader(true));
    const user = yield select(userSelector());
    const { data: clients } = yield call(clientService.getClients, {
      params: { userType: user.user_type }
    });
    yield put(setClientList(clients.reverse()));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(
        setGlobalError({ bool: true, message: error.response.data.message })
      );
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateClient({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: client } = yield call(clientService.updateClient, payload);
    yield put(setUpdatedUser(client));
    AsyncStorage.setItem('user', JSON.stringify(client));
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleGetClient({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: client } = yield call(clientService.showClient, payload);
    yield put(setClient(client));
    NavigationService.navigate('Home');
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddClient({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: clients } = yield call(clientService.addClient, payload);
    yield put(setClientList(clients.reverse()));
    NavigationService.navigate('Welcome');
  } catch (error) {
    if (error.response.status === 422) {
      yield put(
        setSignUpErrors(
          error.response.data.error.email
            ? { message: error.response.data.error.email }
            : { message: error.response.data.error.confirm_password }
        )
      );
    } else if (error.response.status === 401) {
      yield put(setSignInError(true));
    } else {
      yield put(
        setGlobalError({ bool: true, message: error.response.data.message })
      );
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteClient({ payload }) {
  try {
    yield put(setLoader(true));
    yield call(clientService.deleteClient, payload);
    yield put(fetchClients());
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}
