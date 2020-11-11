import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import background from '../../../../assets/images/LightBackground.png';
import GoalHeaderImage from './GoalHeaderImage';
import GoalDetails from './GoalDetails';

const Goals = () => {
  return (
    <View source={background} style={styles.container}>
      <GoalHeaderImage />
      <KeyboardAwareScrollView enableOnAndroid>
        <GoalDetails />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
});

export default Goals;
