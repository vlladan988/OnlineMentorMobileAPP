import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import background from '../../../assets/images/LightBackground.png';

const NutritionPlan = ({ title }) => {
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </ImageBackground>
  );
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

export default NutritionPlan;
