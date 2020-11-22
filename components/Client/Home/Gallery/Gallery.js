import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';

import background from '../../../../assets/images/LightBackground.png';
import AddImage from './AddImage';
import GallerySlider from './GallerySlider';

const Gallery = () => {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <ScrollView>
        <AddImage />
        <GallerySlider />
      </ScrollView>
    </ImageBackground>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  }
});
