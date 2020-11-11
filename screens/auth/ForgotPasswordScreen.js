import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';

import { ForgotPasswordForm } from '../../components/auth/ForgotPasswordForm';
import { passwordForgot } from '../../store/actions/UserActions';
import { setForgotPasswordError } from '../../store/actions/ErrorActions';
import { forgotPasswordErrorSelector } from '../../store/selectors/ErrorSelector';
import SharedTrainerClientChooseButton from '../../components/shared/SharedTrainerClientChooseButton';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import SharedGoBackButtonAuth from '../../components/shared/SharedGoBackButtonAuth';

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);
  const handlePasswordForgot = useCallback(data =>
    dispatch(passwordForgot({ credentials: data, userType: selected }))
  );
  const handleSetForgotPasswordError = data =>
    dispatch(setForgotPasswordError(data));

  const forgotPasswordError = useSelector(forgotPasswordErrorSelector());

  useEffect(() => {
    return () => handleSetForgotPasswordError(false);
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
          <ForgotPasswordForm
            onSubmit={handlePasswordForgot}
            forgotPasswordError={forgotPasswordError}
          />
        </KeyboardAwareScrollView>
        <SharedGoBackButtonAuth />
      </SafeAreaView>
    </LinearGradient>
  );
};

ForgotPasswordScreen.navigationOptions = {
  header: null
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
