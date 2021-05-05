import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import clientTemplateSmall from '../../../../../../assets/images/clientTemplateSmall.jpg';
import IconName from '../../../../../../constants/IconName';
import Colors from '../../../../../../constants/Colors';

const CreateEditTemplateHeaderImage = ({
  templateImage,
  setImage,
  isPickImage,
  setIsPickImage,
  goBack
}) => {
  const [profileImage, setProfileImage] = useState(templateImage);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result);
      setProfileImage(result.uri);
      setIsPickImage(false);
    }
  };

  useEffect(
    () => {
      isPickImage && pickImage();
    },
    [isPickImage]
  );

  return (
    <TouchableOpacity style={styles.headerWrapper} onPress={pickImage} activeOpacity={0.7}>
      <Image
        source={profileImage ? { uri: profileImage } : clientTemplateSmall}
        style={styles.templateImage}
      />
      <TouchableOpacity onPress={goBack} style={styles.goBackIconWrapper}>
        <Icon.MaterialCommunityIcons name={IconName.backCircle} size={50} color={Colors.light} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CreateEditTemplateHeaderImage;

CreateEditTemplateHeaderImage.propTypes = {
  templateImage: PropTypes.string,
  setImage: PropTypes.func,
  isPickImage: PropTypes.bool,
  setIsPickImage: PropTypes.func,
  goBack: PropTypes.func
};

const styles = StyleSheet.create({
  goBackIconWrapper: {
    left: 10,
    position: 'absolute',
    top: Constants.statusBarHeight
  },
  headerWrapper: {
    height: 250
  },
  templateImage: {
    height: 250,
    resizeMode: 'cover',
    width: '100%'
  }
});
