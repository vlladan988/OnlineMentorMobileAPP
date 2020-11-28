import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NutritionPlanTrainer = () => {
  return (
    <LinearGradient
      colors={['#3f5069', '#33445d', '#202e46']}
      style={styles.gradientWrapper}
    >
      <Text>Template Meal for Clients</Text>
    </LinearGradient>
  );
};

export default NutritionPlanTrainer;

export const styles = StyleSheet.create({
  gradientWrapper: {
    height: '100%'
  }
});
