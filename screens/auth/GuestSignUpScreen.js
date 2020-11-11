import React, { useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { signUp } from '../../store/actions/UserActions';
import { setSignUpErrors } from '../../store/actions/ErrorActions';
import { SignUpForm } from '../../components/auth/SignUpForm';
import { signUpErrorsSelector } from '../../store/selectors/ErrorSelector';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import GuestMessage from '../../components/auth/GuestRegister/GuestMessage';
import SharedGoBackButtonAuth from '../../components/shared/SharedGoBackButtonAuth';

const GuestSignUpScreen = () => {
  const dispatch = useDispatch();

  const handleSignUp = useCallback(data =>
    dispatch(signUp({ credentials: data, userType: 2 }))
  );
  const handleSetSignUpErrors = data => dispatch(setSignUpErrors(data));

  const signUpErrors = useSelector(signUpErrorsSelector());

  useEffect(() => {
    return () => handleSetSignUpErrors({});
  }, []);

  return (
    <LinearGradient
      colors={['#3f5069', '#33445d', '#202e46']}
      style={styles.gradientBackground}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView enableOnAndroid>
          <LoginHeader />
          <SignUpForm onSubmit={handleSignUp} signUpErrors={signUpErrors} />
        </KeyboardAwareScrollView>
        <SharedGoBackButtonAuth />
      </SafeAreaView>
      <GuestMessage />
    </LinearGradient>
  );
};

GuestSignUpScreen.navigationOptions = {
  header: null
};

export default GuestSignUpScreen;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
