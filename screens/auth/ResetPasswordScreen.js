import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { passwordReset } from '../../store/actions/UserActions';
import { ResetPasswordForm } from '../../components/auth/ResetPasswordForm';
import { resetPasswordErrorSelector } from '../../store/selectors/ErrorSelector';
import SharedTrainerClientChooseButton from '../../components/shared/SharedTrainerClientChooseButton';

const ResetPasswordScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);
  const handlePasswordReset = data =>
    dispatch(passwordReset({ credentials: data, userType: selected }));
  const resetPasswordError = useSelector(resetPasswordErrorSelector());

  const handleSubmit = resetPasswordData => {
    handlePasswordReset({
      ...resetPasswordData,
      token: navigation.getParam('forgot_password_token')
    });
  };

  return (
    <LinearGradient
      colors={['#3f5069', '#33445d', '#202e46']}
      style={styles.gradientBackground}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView enableOnAndroid>
          <SharedTrainerClientChooseButton
            userType={value => setSelected(value)}
          />
          <ResetPasswordForm
            onSubmit={handleSubmit}
            resetPasswordError={resetPasswordError}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

ResetPasswordScreen.propTypes = {
  navigation: PropTypes.object
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  gradientBackground: {
    height: '100%'
  }
});
