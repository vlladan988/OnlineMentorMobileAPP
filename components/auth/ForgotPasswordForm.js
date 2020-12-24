import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import $t from 'i18n';
import * as Icon from '@expo/vector-icons';

import { TextInputField } from '../shared/FormFields';
import { forgotPasswordValidationRules } from '../../validation/auth';
import ErrorText from '../shared/Text/ErrorText';
import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';
import SharedLinearGradientBackgroundHorizontal from '../shared/SharedLinearGradientBackgroundHorizontal';

export const ForgotPasswordForm = ({ onSubmit, forgotPasswordError }) => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={onSubmit}
    validationSchema={forgotPasswordValidationRules}
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
            />
          </View>
        </View>
        <ErrorText
          error={!!forgotPasswordError}
          message={$t('auth.emailDoesNotExist')}
        />
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkCloudColor,
            Colors.cloudColor,
            Colors.lightCloudColor
          ]}
          childrenStyle={styles.submitButton}
        >
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.sendEmailButton}
          >
            <Text style={styles.sendEmailText}>{$t('auth.sendEmail')}</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    )}
  </Formik>
);

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  forgotPasswordError: PropTypes.bool
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
  sendEmailButton: {
    alignItems: 'center',
    height: '100%',
    paddingVertical: 15,
    width: '100%'
  },
  sendEmailText: {
    color: Colors.white,
    fontSize: 18
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 20
  }
});
