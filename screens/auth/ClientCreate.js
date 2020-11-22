import React, { useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { setSignUpErrors } from '../../store/actions/ErrorActions';
import { signUpErrorsSelector } from '../../store/selectors/ErrorSelector';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import SharedGoBackButtonAuth from '../../components/shared/SharedGoBackButtonAuth';
import { addClient } from '../../store/actions/ClientActions';
import { ClientSignUpForm } from '../../components/auth/ClientSignUpForm';

const ClientCreate = () => {
  const dispatch = useDispatch();

  const handleSignUp = useCallback(data => dispatch(addClient(data)));
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
          <LoginHeader screen={'addClient'} />
          <ClientSignUpForm
            onSubmit={handleSignUp}
            signUpErrors={signUpErrors}
          />
        </KeyboardAwareScrollView>
        <SharedGoBackButtonAuth />
      </SafeAreaView>
    </LinearGradient>
  );
};

ClientCreate.navigationOptions = {
  header: null
};

export default ClientCreate;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
