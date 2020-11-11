import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Layout from '../../../../constants/Layout';
import cover from '../../../../assets/images/crossfit.jpg';
import user from '../../../../assets/images/richFroning.jpg';

const HeaderImage = () => {
  const [profileImage, setProfileImage] = useState();
  const [coverImage, setCoverImage] = useState();

  const pickProfileImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1
    });

    if (!result.cancelled) setProfileImage(result);
  };

  const pickCoverImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1
    });

    if (!result.cancelled) setCoverImage(result);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={pickCoverImage}>
      <Image
        source={coverImage ? { uri: coverImage.uri } : cover}
        style={styles.coverImage}
      />
      <TouchableOpacity
        style={styles.profilePhotoHolder}
        onPress={pickProfileImage}
      >
        <Image
          source={profileImage ? { uri: profileImage.uri } : user}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  container: {
    height: 300
  },
  coverImage: {
    borderBottomLeftRadius: 300,
    height: 300,
    width: Layout.window.width
  },
  profileImage: {
    borderRadius: 60,
    height: 150,
    width: 150
  },
  profilePhotoHolder: {
    bottom: 10,
    left: 10,
    position: 'absolute'
  }
});
