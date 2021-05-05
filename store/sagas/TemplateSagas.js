/* eslint-disable indent */
import { call, put } from 'redux-saga/effects';
import { setLoader } from '../actions/LoaderAction';
import { setGlobalError, setShowStandardPopUp } from '../actions/ErrorActions';
import templateService from '../../services/TemplateService';
import { setTemplates, setClientTemplates } from '../actions/TemplateActions';

export function* handleFetchTemplates() {
  try {
    yield put(setLoader(true));
    const { data: templates } = yield call(templateService.fetchTemplates);
    yield put(setTemplates(templates));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleGetTemplates(payload) {
  try {
    const { data: templates } = yield call(templateService.getTemplates, payload);
    yield put(setClientTemplates(templates));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  }
}

export function* handleAddTemplate({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: templates } = yield call(templateService.addTemplate, payload);
    yield put(setTemplates(templates));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUpdateTemplate({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: templates } = yield call(templateService.updateTemplate, payload);
    yield put(setTemplates(templates));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleDeleteTemplate({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: templates } = yield call(templateService.deleteTemplate, payload);
    yield put(setTemplates(templates));

    yield put(
      setShowStandardPopUp({
        message: 'Template Deleted !',
        warningIcon: false
      })
    );
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleAssignTemplateToClient({ payload }) {
  try {
    yield put(setLoader(true));
    const { data: message } = yield call(templateService.assignTemplateToClient, payload);
    yield put(
      setShowStandardPopUp({
        message: 'Template ' + message.template + ' assigned to ' + message.client,
        warningIcon: false
      })
    );
  } catch (error) {
    if (error.response.status === 500) {
      yield put(
        setShowStandardPopUp({
          message: 'Client already have one Template',
          warningIcon: true
        })
      );
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* handleUnassignTemplateFromClient({ payload }) {
  try {
    yield put(setLoader(true));
    yield call(templateService.unassignTemplateToClient, payload);
    yield put(setClientTemplates([]));
  } catch (error) {
    yield put(setGlobalError({ bool: true, message: error.response.data.message }));
  } finally {
    yield put(setLoader(false));
  }
}
