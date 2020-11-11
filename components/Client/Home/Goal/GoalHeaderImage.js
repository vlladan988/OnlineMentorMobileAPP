import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Layout from '../../../../constants/Layout';

import cover from '../../../../assets/images/goal.jpg';

const GoalHeaderImage = () => {
  return (
    <View style={styles.container}>
      <Image source={cover} style={styles.goalImage} />
    </View>
  );
};

export default GoalHeaderImage;

const styles = StyleSheet.create({
  container: {
    height: 300
  },
  goalImage: {
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    height: 300,
    width: Layout.window.width
  }
});
