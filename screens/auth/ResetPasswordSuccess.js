import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Colors from '../../constants/Colors';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import SharedLinearGradientBackgroundHorizontal from '../../components/shared/SharedLinearGradientBackgroundHorizontal';

const ResetPasswordSuccess = ({ navigation }) => {
  return (
    <SharedLinearGradientBackgroundHorizontal
      childrenColors={[
        Colors.darkCloudColor,
        Colors.cloudColor,
        Colors.lightCloudColor
      ]}
      childrenStyle={styles.gradientBackground}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView enableOnAndroid>
          <LoginHeader />
          <Text style={styles.successText}>
            {$t('auth.passwordResetSucces')}
          </Text>
          <SharedLinearGradientBackgroundHorizontal
            childrenColors={[
              Colors.darkCloudColor,
              Colors.cloudColor,
              Colors.lightCloudColor
            ]}
            childrenStyle={styles.successButton}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>{$t('common.ok')}</Text>
            </TouchableOpacity>
          </SharedLinearGradientBackgroundHorizontal>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SharedLinearGradientBackgroundHorizontal>
  );
};

ResetPasswordSuccess.propTypes = {
  navigation: PropTypes.object
};

ResetPasswordSuccess.navigationOptions = {
  header: null
};

export default ResetPasswordSuccess;

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white
  },
  gradientBackground: {
    height: '100%',
    paddingHorizontal: 50
  },
  submitButton: {
    alignItems: 'center',
    height: '100%',
    paddingVertical: 15,
    width: '100%'
  },
  successButton: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 20
  },
  successText: {
    alignSelf: 'center',
    color: Colors.light,
    textAlign: 'center'
  }
});
