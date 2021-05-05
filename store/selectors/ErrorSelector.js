import { createSelector } from 'reselect';

const errorStateSelector = state => state.errorReducer;

export const globalErrorSelector = () =>
  createSelector(errorStateSelector, error => error.globalError);
export const globalErrorMessageSelector = () =>
  createSelector(errorStateSelector, error => error.errorMessage);
export const signInErrorSelector = () =>
  createSelector(errorStateSelector, error => error.signInError);
export const forgotPasswordErrorSelector = () =>
  createSelector(errorStateSelector, error => error.forgotPasswordError);
export const resetPasswordErrorSelector = () =>
  createSelector(errorStateSelector, error => error.resetPasswordError);
export const signUpErrorsSelector = () =>
  createSelector(errorStateSelector, error => error.signUpErrors);
export const socialLoginErrorSelector = () =>
  createSelector(errorStateSelector, error => error.socialLoginError);
export const changePasswordErrorSelector = () =>
  createSelector(errorStateSelector, error => error.changePasswordError);
export const showStandardPopUpSelector = () =>
  createSelector(errorStateSelector, popUp => popUp.standardPopUp);
export const standardPopUpMessageSelector = () =>
  createSelector(errorStateSelector, popUp => popUp.standardPopUpMessage);
export const showDeletePopUpSelector = () =>
  createSelector(errorStateSelector, popUp => popUp.deletePopUp);
export const deletePopUpMessageSelector = () =>
  createSelector(errorStateSelector, popUp => popUp.deletePopUpMessage);
export const isWarningMessage = () => createSelector(errorStateSelector, popUp => popUp.isWarning);
export const inputFealdErrorMessage = () =>
  createSelector(errorStateSelector, error => error.fieldErrorText);
