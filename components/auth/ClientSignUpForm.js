import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import { TextInputField } from '../shared/FormFields';
import $t from 'i18n';
import ErrorText from '../shared/Text/ErrorText';
import Colors from '../../constants/Colors';
import IconName from '../../constants/IconName';
import { signUpValidationRules } from '../../validation/auth';
import SharedLinearGradientBackgroundHorizontal from '../shared/SharedLinearGradientBackgroundHorizontal';

export const ClientSignUpForm = ({ onSubmit, signUpErrors }) => (
  <Formik
    initialValues={{
      full_name: '',
      email: '',
      password: '',
      confirm_password: ''
    }}
    onSubmit={onSubmit}
    validationSchema={signUpValidationRules}
  >
    {({ handleSubmit }) => (
      <View style={styles.container}>
        <View style={styles.inputFieldWrapper}>
          <Icon.Entypo
            name={IconName.user}
            color={Colors.lightText}
            size={22}
            style={styles.icon}
          />
          <View style={styles.input}>
            <Field
              name="full_name"
              component={TextInputField}
              placeholder={$t('auth.enterFullName')}
              style={styles.inputField}
              placeholderTextColor={Colors.lightText}
            />
          </View>
        </View>
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
              placeholder={$t('auth.enterClientEmail')}
              style={styles.inputField}
              placeholderTextColor={Colors.lightText}
              keyboardType={'email-address'}
            />
          </View>
        </View>
        <ErrorText error={!!signUpErrors.message} message={signUpErrors.message} />
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
              placeholder={$t('auth.enterClientPassword')}
              style={styles.inputField}
              placeholderTextColor={Colors.white}
            />
          </View>
        </View>
        <View style={styles.inputFieldWrapper}>
          <Icon.MaterialCommunityIcons
            name={IconName.passwordConfirm}
            color={Colors.lightText}
            size={22}
            style={styles.icon}
          />
          <View style={styles.input}>
            <Field
              name="confirm_password"
              blurOnSubmit={false}
              component={TextInputField}
              secureTextEntry
              placeholder={$t('auth.confirmClientPassword')}
              style={styles.inputField}
              placeholderTextColor={Colors.lightText}
            />
          </View>
        </View>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
          childrenStyle={styles.registerButton}
        >
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.registerButtonText}>{$t('common.submit')}</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    )}
  </Formik>
);

ClientSignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  signUpErrors: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50
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
    backgroundColor: 'transparent',
    color: Colors.white,
    fontFamily: 'montserrat-regular',
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
  registerButton: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 20
  },
  registerButtonText: {
    color: Colors.white,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  submitButton: {
    alignItems: 'center',
    height: '100%',
    paddingVertical: 15,
    width: '100%'
  }
});
