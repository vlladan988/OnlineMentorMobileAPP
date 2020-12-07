import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import { getGoal } from '../../../../store/actions/GoalActions';
import { goalSelector } from '../../../../store/selectors/GoalSelector';
import { currentClientSelector } from '../../../../store/selectors/ClientSelector';
import { dateFormat } from '../../../../helpers/DateFormat';

const SelectedClientGoalDetails = () => {
  const dispatch = useDispatch();

  const client = useSelector(currentClientSelector());
  const goal = useSelector(goalSelector());

  useEffect(() => {
    dispatch(getGoal(client.id));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.goalTextWrapper}>
        <Text style={styles.itemValue}>{$t('client.clientGoalText')}</Text>
      </View>
      <View style={styles.itemGoalsWrapper}>
        <View style={styles.itemsWrapper}>
          <View style={styles.itemFields}>
            <Text>{$t('client.current')}</Text>
            <View style={styles.itemWrapper}>
              <Text>{goal.current_weight} </Text>
              <Text>{$t('client.kg')}</Text>
            </View>
          </View>
          <View style={styles.itemFields}>
            <Text>{$t('client.goal')}</Text>
            <View style={styles.itemWrapper}>
              <Text>{goal.final_weight} </Text>
              <Text>{$t('client.kg')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemsWrapper}>
          <View style={styles.itemFields}>
            <Text>{$t('client.start')}</Text>
            <Text>{dateFormat(goal.start_at)}</Text>
          </View>
          <View style={styles.itemFields}>
            <Text>{$t('client.end')}</Text>
            <Text>{dateFormat(goal.end_at)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.descriptionText}>{$t('common.desc')}</Text>
        <Text style={styles.description}>{goal.description}</Text>
      </View>
    </View>
  );
};

export default SelectedClientGoalDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  },
  descWrapper: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingTop: 30
  },
  description: {
    alignSelf: 'center'
  },
  descriptionText: {
    alignSelf: 'center',
    paddingBottom: 10
  },
  goalTextWrapper: {
    borderBottomColor: Colors.cloudColor,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingVertical: 10
  },
  itemFields: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  itemGoalsWrapper: {
    elevation: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95
  },
  itemValue: {
    alignSelf: 'center',
    color: Colors.cloudColor,
    fontSize: 22,
    fontWeight: 'bold'
  },
  itemWrapper: {
    flexDirection: 'row'
  },
  itemsWrapper: {
    width: '45%'
  }
});
