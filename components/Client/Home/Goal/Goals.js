import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import background from '../../../../assets/images/LightBackground.png';
import GoalDetails from './GoalDetails';
import SharedGoalHeaderImage from '../../../shared/SharedGoalHeaderImage';

const Goals = () => {
  return (
    <View source={background} style={styles.container}>
      <SharedGoalHeaderImage />
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
