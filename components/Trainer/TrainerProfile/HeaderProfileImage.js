import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../../../constants/Colors';
import blancProfileImage from '../../../assets/images/avatar-blanc.jpg';

const HeaderProfileImage = ({ trainer, setProfileImageUrl }) => {
  const [profileImage, setProfileImage] = useState(trainer.photo_url);

  const pickProfileImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
      setProfileImageUrl(result.base64);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickProfileImage}>
        <Image
          source={profileImage ? { uri: profileImage } : blancProfileImage}
          style={styles.image}
        />
      </TouchableOpacity>

      <Text style={styles.headerText}>{trainer.full_name.toUpperCase()}</Text>
    </View>
  );
};

export default HeaderProfileImage;

HeaderProfileImage.propTypes = {
  trainer: PropTypes.object,
  setProfileImageUrl: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30
  },
  headerText: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-bold',
    fontSize: 18,
    paddingTop: 15
  },
  image: {
    borderColor: Colors.cloudColor,
    borderRadius: 50,
    borderWidth: 3,
    height: 140,
    resizeMode: 'cover',
    width: 140
  }
});
