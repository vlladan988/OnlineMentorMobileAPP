/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import galleryService from '../../services/GalleryService';

export function* handleGetGallery({ payload }) {
  try {
    yield put(setLoader(true));
    yield call(galleryService.getGallery, {
      params: {
        id: payload
      }
    });
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleSaveGallery({ payload }) {
  try {
    yield put(setLoader(true));
    payload[0] === null || payload[2] === null || payload[3] === null
      ? yield put(
          setShowStandardPopUp(
            'You should select all images. Front, Back and Side .'
          )
        )
      : yield call(galleryService.saveGallery, { photos: payload });
  } catch (error) {
    yield put(setGlobalError(true));
  } finally {
    yield put(setLoader(false));
  }
}
