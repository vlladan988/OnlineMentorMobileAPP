import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';

import { userSelector } from '../../../../store/selectors/UserSelector';
import { updateTrainer } from '../../../../store/actions/TrainerActions';
import { UpdateTrainerForm } from '../../../../components/Trainer/TrainerProfile/UpdateTrainerForm';
import HeaderProfileImage from '../../../../components/Trainer/TrainerProfile/HeaderProfileImage';
import StandardNotificationModal from '../../../../components/shared/modal/StandardNotificationModal';
import { showStandardPopUp } from '../../../../store/selectors/ErrorSelector';

const EditProfileScreen = () => {
  const dispatch = useDispatch();
  const [photoUrl, setPhotoUrl] = useState(null);

  const trainer = useSelector(userSelector());
  const isStandardModalVisible = useSelector(showStandardPopUp());

  const handleSubmit = updateUserData => {
    updateUserData.trainerId = trainer.id;
    updateUserData.profileImage = photoUrl;
    dispatch(updateTrainer(updateUserData));
  };

  return (
    <LinearGradient
      colors={['#3f5069', '#33445d', '#202e46']}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <StandardNotificationModal visible={isStandardModalVisible} />
        <HeaderProfileImage
          trainer={trainer}
          setProfileImageUrl={image => setPhotoUrl(image)}
        />
        <KeyboardAwareScrollView enableOnAndroid>
          <UpdateTrainerForm onSubmit={handleSubmit} trainer={trainer} />
        </KeyboardAwareScrollView>
      </View>
    </LinearGradient>
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
