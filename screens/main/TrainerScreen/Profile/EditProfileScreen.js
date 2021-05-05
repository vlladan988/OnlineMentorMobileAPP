import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { userSelector } from '../../../../store/selectors/UserSelector';
import { updateTrainer } from '../../../../store/actions/TrainerActions';
import { UpdateTrainerForm } from '../../../../components/Trainer/TrainerProfile/UpdateTrainerForm';
import HeaderProfileImage from '../../../../components/Trainer/TrainerProfile/HeaderProfileImage';
import StandardNotificationModal from '../../../../components/shared/modal/StandardNotificationModal';
import { showStandardPopUpSelector } from '../../../../store/selectors/ErrorSelector';
import SharedLinearGradientBackgroundHorizontal from '../../../../components/shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../constants/Colors';

const EditProfileScreen = () => {
  const dispatch = useDispatch();
  const [photoUrl, setPhotoUrl] = useState(null);

  const trainer = useSelector(userSelector());
  const isStandardModalVisible = useSelector(showStandardPopUpSelector());

  const handleSubmit = updateUserData => {
    updateUserData.trainerId = trainer.id;
    updateUserData.profileImage = photoUrl;
    dispatch(updateTrainer(updateUserData));
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
      <View style={styles.container}>
        <StandardNotificationModal visible={isStandardModalVisible} />
        <KeyboardAwareScrollView enableOnAndroid>
          <HeaderProfileImage trainer={trainer} setProfileImageUrl={image => setPhotoUrl(image)} />
          <UpdateTrainerForm onSubmit={handleSubmit} trainer={trainer} />
        </KeyboardAwareScrollView>
      </View>
    </SharedLinearGradientBackgroundHorizontal>
  );
};

EditProfileScreen.propTypes = {
  navigation: PropTypes.object
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20
  },
  gradientBackground: {
    flex: 1
  }
});
