/* eslint-disable indent */
import { call, put, select } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import { setGroceries } from '../actions/GroceriesActions';
import groceryService from '../../services/GroceriesService';
import { groceryListSelector } from '../selectors/GrocerySelector';
import { IsGroceryNameUniqueValidation } from '../../helpers/IsGroceryNameUniqueValidation';
import { fetchRecipes } from '../actions/RecipeActions';

export function* handleFetchGroceries() {
  try {
    yield put(setLoader(true));
    const { data: groceries } = yield call(groceryService.fetchGroceries);
    yield put(setGroceries(groceries.reverse()));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddGrocery({ payload }) {
  try {
    yield put(setLoader(true));
    const groceryList = yield select(groceryListSelector());
    const isNameUnique = IsGroceryNameUniqueValidation(groceryList, payload);
    if (isNameUnique) {
      yield put(
        setShowStandardPopUp({
          message: 'Grocery name already in use.',
          warningIcon: true
        })
      );
      return;
    } else {
      const { data: groceries } = yield call(groceryService.addGrocery, payload);
      yield put(setGroceries(groceries.reverse()));
    }
    yield put(
      setShowStandardPopUp({
        message: 'Grocery created.',
        warningIcon: false
      })
    );
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateGrocery({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: groceries } = yield call(groceryService.updateGrocery, payload);
    yield put(setGroceries(groceries.reverse()));

    yield put(setShowStandardPopUp({ message: 'Grocery Updated !', warningIcon: false }));
    yield put(fetchRecipes());
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteGrocery({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: groceries } = yield call(groceryService.deleteGrocery, payload);
    yield put(setGroceries(groceries.reverse()));
    yield put(fetchRecipes());
    yield put(setShowStandardPopUp({ message: 'Grocery Deleted !', warningIcon: false }));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}
