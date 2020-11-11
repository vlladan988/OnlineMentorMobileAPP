import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import LoginHeader from '../../components/auth/Login/LoginHeader';

const ResetPasswordSuccess = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#3f5069', '#33445d', '#202e46']}
      style={styles.gradientBackground}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView enableOnAndroid>
          <LoginHeader />
          <Text style={styles.successText}>
            {$t('auth.passwordResetSucces')}
          </Text>
          <LinearGradient
            colors={['#3bbdb1', '#22b9c0', '#03b5d1']}
            style={styles.successButton}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>{$t('common.ok')}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
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
