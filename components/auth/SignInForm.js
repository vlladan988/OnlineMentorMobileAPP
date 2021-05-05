import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import { TextInputField } from '../shared/FormFields';
import { signInValidationRules } from '../../validation/auth';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import Colors from '../../constants/Colors';
import IconName from '../../constants/IconName';
import SharedLinearGradientBackgroundHorizontal from '../shared/SharedLinearGradientBackgroundHorizontal';

export const SignInForm = ({ onSubmit, signInError, goToForgotPassword }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={onSubmit}
    validationSchema={signInValidationRules}
  >
    {({ handleSubmit }) => (
      <View style={styles.container}>
        <View style={styles.inputFieldWrapper}>
          <Icon.MaterialIcons
            name={IconName.email}
            color={Colors.lightText}
            size={22}
            style={styles.icon}
          />
          <View style={styles.input}>
            <Field
              name="email"
              component={TextInputField}
              placeholder={$t('auth.enterEmail')}
              style={styles.inputField}
              placeholderTextColor={Colors.lightText}
              keyboardType={'email-address'}
            />
          </View>
        </View>
        <View style={styles.inputFieldWrapper}>
          <Icon.MaterialCommunityIcons
            name={IconName.password}
            color={Colors.lightText}
            size={22}
            style={styles.icon}
          />
          <View style={styles.input}>
            <Field
              name="password"
              component={TextInputField}
              secureTextEntry
              placeholder={$t('auth.enterPassword')}
              style={styles.inputField}
              placeholderTextColor={Colors.lightText}
            />
          </View>
        </View>
        <ErrorText error={!!signInError} message={$t('auth.invalidCredentials')} />
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
          childrenStyle={styles.gradientButton}
        >
          <TouchableOpacity onPress={handleSubmit} style={styles.logInButton}>
            <Text style={styles.loginButtonText}>{$t('auth.logIn').toUpperCase()}</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
        <TouchableOpacity style={styles.button} onPress={goToForgotPassword}>
          <Text style={styles.forgotText}>{$t('auth.forgotPass')}</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  signInError: PropTypes.bool,
  goToForgotPassword: PropTypes.func
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    color: Colors.lightGray,
    marginTop: 10
  },
  container: {
    paddingHorizontal: 50
  },
  forgotText: {
    color: Colors.lightGray,
    fontSize: 16
  },
  gradientButton: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 20
  },
  icon: {
    left: 0,
    position: 'absolute',
    zIndex: 9
  },
  input: {
    width: '100%'
  },
  inputField: {
    color: Colors.white,
    height: 50,
    textAlign: 'center'
  },
  inputFieldWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    justifyContent: 'center',
    position: 'relative'
  },
  logInButton: {
    alignItems: 'center',
    height: '100%',
    paddingVertical: 15,
    width: '100%'
  },
  loginButtonText: {
    color: Colors.white
  }
});
