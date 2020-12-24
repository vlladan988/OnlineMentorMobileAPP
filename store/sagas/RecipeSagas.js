/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import recipeService from '../../services/RecipeService';
import { setRecipeTypes, setRecipies } from '../actions/RecipeActions';

export function* handleFetchRecipies() {
  try {
    yield put(setLoader(true));
    const { data: recipies } = yield call(recipeService.fetchRecipe);
    yield put(setRecipies(recipies.reverse()));
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAddRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: recipies } = yield call(recipeService.addRecipe, payload);
    yield put(setRecipies(recipies.reverse()));
    yield put(
      setShowStandardPopUp({ message: 'Recipe Created !', warningIcon: false })
    );
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: recipies } = yield call(recipeService.updateRecipe, payload);
    yield put(setRecipies(recipies.reverse()));
    yield put(
      setShowStandardPopUp({ message: 'Recipe Updated !', warningIcon: false })
    );
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}

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
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteRecipe({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: recipies } = yield call(recipeService.deleteRecipe, payload);
    yield put(setRecipies(recipies.reverse()));
    yield put(
      setShowStandardPopUp({ message: 'Recipe Deleted !', warningIcon: false })
    );
  } catch (error) {
    yield put(
      setGlobalError({ bool: true, message: error.response.data.message })
    );
  } finally {
    yield put(setLoader(false));
  }
}
