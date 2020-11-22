import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';

import background from '../../../../assets/images/LightBackground.png';
import SelectedClientGallerySlider from './SelectedClientGallerySlider';

const SelectedClientGallery = () => {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <ScrollView>
        <SelectedClientGallerySlider />
      </ScrollView>
    </ImageBackground>
  );
};

export default SelectedClientGallery;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  }
});
