/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import galleryService from '../../services/GalleryService';
import { setGallery } from '../actions/GalleryActions';

export function* handleGetGallery({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: gallery } = yield call(galleryService.showGallery, payload);
    yield put(setGallery(gallery));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleSaveGallery({ payload }) {
  try {
    yield put(setLoader(true));
    if (payload[0] === null || payload[2] === null || payload[3] === null) {
      yield put(
        setShowStandardPopUp(
          'You should select all images. Front, Back and Side .'
        )
      );
      return;
    } else {
      var { data: gallery } = yield call(galleryService.saveGallery, {
        photos: payload
      });
    }
    yield put(setGallery(gallery));
    yield put(setShowStandardPopUp('Gallery saved successfully.'));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteGallery({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: gallery } = yield call(galleryService.deleteGallery, payload);
    yield put(setGallery(gallery));
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
