import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import AddImage from './AddImage';
import GallerySlider from './GallerySlider';
import Colors from '../../../../constants/Colors';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GallerySlider />
        <AddImage />
      </ScrollView>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrayBackground,
    flex: 1
  }
});
