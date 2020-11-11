import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import background from '../../../assets/images/LightBackground.png';

const Measurements = ({ title }) => {
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </ImageBackground>
  );
};

Measurements.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain'
  }
});

export default Measurements;
