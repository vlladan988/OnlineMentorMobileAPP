import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Layout from '../../../../constants/Layout';
import cover from '../../../../assets/images/crossfit.jpg';
import user from '../../../../assets/images/richFroning.jpg';

const SelectedClientHeaderImage = () => {
  return (
    <View style={styles.container}>
      <Image source={cover} style={styles.coverImage} />
      <View style={styles.profilePhotoHolder}>
        <Image source={user} style={styles.profileImage} />
      </View>
    </View>
  );
};

export default SelectedClientHeaderImage;

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
