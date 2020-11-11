import React, { useCallback, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { login } from '../../store/actions/UserActions';
import { SignInForm } from '../../components/auth/SignInForm';
import { signInErrorSelector } from '../../store/selectors/ErrorSelector';
import LoginHeader from '../../components/auth/Login/LoginHeader';
import SharedTrainerClientChooseButton from '../../components/shared/SharedTrainerClientChooseButton';
import LoginBottom from '../../components/auth/Login/LoginBottom';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);

  const handleLogin = useCallback(data =>
    dispatch(login({ credentials: data, userType: selected }))
  );

  const signInError = useSelector(signInErrorSelector());

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const goToSignInScreen = () => {
    navigation.navigate('SignUp');
  };

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
          <SignInForm
            onSubmit={handleLogin}
            signInError={signInError}
            goToForgotPassword={goToForgotPassword}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <LoginBottom goToRegister={goToSignInScreen} />
    </LinearGradient>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object
};

SignInScreen.navigationOptions = {
  header: null
};

export default SignInScreen;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
