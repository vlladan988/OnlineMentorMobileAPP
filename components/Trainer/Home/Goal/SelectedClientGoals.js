import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import background from '../../../../assets/images/LightBackground.png';
import SharedGoalHeaderImage from '../../../shared/SharedGoalHeaderImage';
import Colors from '../../../../constants/Colors';
import { userSelector } from '../../../../store/selectors/UserSelector';
import { goalSelector } from '../../../../store/selectors/GoalSelector';
import SharedGoalDetails from '../../../shared/SharedGoalDetails';
import { getGoal } from '../../../../store/actions/GoalActions';
import { currentClientSelector } from '../../../../store/selectors/ClientSelector';

const SelectedClientGoals = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelector());
  const goal = useSelector(goalSelector());
  const client = useSelector(currentClientSelector());

  useEffect(() => {
    dispatch(getGoal(client.id));
  }, []);

  return (
    <View source={background} style={styles.container}>
      <SharedGoalHeaderImage user={user} />
      <KeyboardAwareScrollView enableOnAndroid>
        <SharedGoalDetails goal={goal} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrayBackground,
    height: '100%'
  }
});

export default SelectedClientGoals;
