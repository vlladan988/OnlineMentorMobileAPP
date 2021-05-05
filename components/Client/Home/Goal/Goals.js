import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import background from '../../../../assets/images/LightBackground.png';
import SharedGoalDetails from '../../../shared/SharedGoalDetails';
import SharedGoalHeaderImage from '../../../shared/SharedGoalHeaderImage';
import Colors from '../../../../constants/Colors';
import { userSelector } from '../../../../store/selectors/UserSelector';
import { goalSelector } from '../../../../store/selectors/GoalSelector';
import EditGoalModal from '../../../../components/shared/modal/EditGoalModal';
import { getGoal } from '../../../../store/actions/GoalActions';

const Goals = () => {
  const dispatch = useDispatch();
  const [isEditGoalvisible, setIsEditGoalvisible] = useState(false);
  const user = useSelector(userSelector());
  const goal = useSelector(goalSelector());

  useEffect(() => {
    dispatch(getGoal(user.id));
  }, []);

  const showModal = () => setIsEditGoalvisible(prevState => !prevState);

  return (
    <View source={background} style={styles.container}>
      <EditGoalModal isVisible={isEditGoalvisible} user={user} goal={goal} closeModal={showModal} />
      <SharedGoalHeaderImage user={user} showEditModal={showModal} />
      <SharedGoalDetails goal={goal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrayBackground,
    height: '100%'
  }
});

export default Goals;
