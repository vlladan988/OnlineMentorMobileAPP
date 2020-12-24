import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { passwordReset } from '../../store/actions/UserActions';
import { ResetPasswordForm } from '../../components/auth/ResetPasswordForm';
import { resetPasswordErrorSelector } from '../../store/selectors/ErrorSelector';
import SharedTrainerClientChooseButton from '../../components/shared/SharedTrainerClientChooseButton';
import SharedLinearGradientBackgroundHorizontal from '../../components/shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../constants/Colors';

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
    <SharedLinearGradientBackgroundHorizontal
      childrenColors={[
        Colors.darkBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.lightBackgroundAppColor
      ]}
      childrenStyle={styles.gradientBackground}
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
    </SharedLinearGradientBackgroundHorizontal>
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
