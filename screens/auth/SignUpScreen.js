import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { signUp } from '../../store/actions/UserActions';
import { setSignUpErrors } from '../../store/actions/ErrorActions';
import { SignUpForm } from '../../components/auth/SignUpForm';
import { signUpErrorsSelector } from '../../store/selectors/ErrorSelector';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import NavigationService from '../../services/NavigationService';
import SharedTrainerClientChooseButton from '../../components/shared/SharedTrainerClientChooseButton';
import ClientMessageRegister from '../../components/auth/Register/ClientMessageRegister';
import GuestRegisterButton from '../../components/auth/Register/GuestRegisterButton';
import SharedGoBackButtonAuth from '../../components/shared/SharedGoBackButtonAuth';

const SignUpScreen = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);

  const handleSignUp = useCallback(data =>
    dispatch(signUp({ credentials: data, userType: selected }))
  );
  const handleSetSignUpErrors = data => dispatch(setSignUpErrors(data));

  const signUpErrors = useSelector(signUpErrorsSelector());

  const goToGuestRegister = () => NavigationService.navigate('GuestSignUp');

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
          <SharedTrainerClientChooseButton
            userType={value => setSelected(value)}
          />
          {selected === 1 ? (
            <SignUpForm onSubmit={handleSignUp} signUpErrors={signUpErrors} />
          ) : (
            <ClientMessageRegister />
          )}
        </KeyboardAwareScrollView>
        <SharedGoBackButtonAuth />
      </SafeAreaView>
      <GuestRegisterButton goToGuestRegister={() => goToGuestRegister()} />
    </LinearGradient>
  );
};

SignUpScreen.navigationOptions = {
  header: null
};

export default SignUpScreen;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
