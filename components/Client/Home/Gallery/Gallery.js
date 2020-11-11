import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import background from '../../../../assets/images/LightBackground.png';
import AddImage from './AddImage';

const Gallery = () => {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <AddImage />
    </ImageBackground>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  }
});
