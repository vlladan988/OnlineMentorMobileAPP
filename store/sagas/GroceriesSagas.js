/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import { setGroceries } from '../actions/GroceriesActions';
import groceryService from '../../services/GroceriesService';

export function* handleFetchGroceries() {
  try {
    yield put(setLoader(true));
    const { data: groceries } = yield call(groceryService.fetchGroceries);
    yield put(setGroceries(groceries));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddGrocery({ payload }) {
  try {
    yield put(setLoader(true));
    if (payload.name === '' || payload.description === '') {
      yield put(setShowStandardPopUp('You should enter name and description.'));
      return;
    } else {
      var { data: groceries } = yield call(groceryService.addGrocery, payload);
      yield put(setGroceries(groceries));
    }
    yield put(setShowStandardPopUp('Grocery saved successfully.'));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateGrocery({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: groceries } = yield call(
      groceryService.updateGrocery,
      payload
    );
    yield put(setGroceries(groceries));
    yield put(setShowStandardPopUp('Grocery Updated !'));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteGrocery({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: groceries } = yield call(
      groceryService.deleteGrocery,
      payload
    );
    yield put(setGroceries(groceries));
    yield put(setShowStandardPopUp('Grocery Deleted !'));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
