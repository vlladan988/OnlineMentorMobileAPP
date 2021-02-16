import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';

import templateImg from '../../../../../../assets/images/templateImg.jpg';

const CreateEditTemplateHeaderImage = ({
  templateImage,
  setImage,
  isPickImage,
  setIsPickImage
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

    // handleIsCustomImage(true, result);
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
        source={profileImage ? { uri: profileImage } : templateImg}
        style={styles.templateImage}
      />
    </TouchableOpacity>
  );
};

export default CreateEditTemplateHeaderImage;

CreateEditTemplateHeaderImage.propTypes = {
  templateImage: PropTypes.string,
  setImage: PropTypes.func,
  isPickImage: PropTypes.bool,
  setIsPickImage: PropTypes.func
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 250
  },
  templateImage: {
    height: 250,
    resizeMode: 'cover',
    width: '100%'
  }
});
