import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../constants/Colors';
import IconName from '../../constants/IconName';
import { dateFormat } from '../../helpers/DateFormat';

const SharedGoalDetails = ({ goal }) => {
  return (
    <ScrollView>
      <View style={styles.goalWeightWrapper}>
        <Text style={styles.itemNameAndDesc}>Goal Weight (Kg)</Text>
        <View style={styles.itemInput}>
          <Text style={styles.weightValue}>{goal.final_weight}</Text>
        </View>
      </View>
      <View style={styles.dateWrapper}>
        <View>
          <View style={styles.textAndIconWrapper}>
            <Text style={styles.startEndText}>Start</Text>
            <Icon.MaterialCommunityIcons
              name={IconName.calendar}
              color={Colors.backgroundAppColor}
              size={20}
            />
          </View>
          <Text style={styles.startEndValue}>{dateFormat(goal.start_at)}</Text>
        </View>
        <View>
          <View style={styles.textAndIconWrapper}>
            <Icon.MaterialCommunityIcons
              name={IconName.calendar}
              color={Colors.backgroundAppColor}
              size={20}
            />
            <Text style={styles.startEndText}>End</Text>
          </View>
          <Text style={styles.startEndValue}>{dateFormat(goal.end_at)}</Text>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
        <View style={styles.borderRadiusWrapper}>
          <Text style={styles.itemNameAndDesc}>Description</Text>
          <Text style={styles.inputField}>{goal.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SharedGoalDetails;

SharedGoalDetails.propTypes = {
  goal: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const styles = StyleSheet.create({
  borderRadiusWrapper: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  dateWrapper: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  descriptionWrapper: {
    backgroundColor: Colors.white,
    marginVertical: 7
  },
  goalWeightWrapper: {
    backgroundColor: Colors.white,
    marginVertical: 7
  },
  inputField: {
    fontFamily: 'montserrat-italic',
    minHeight: 70,
    textAlign: 'center'
  },
  itemInput: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 120
  },
  itemNameAndDesc: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    paddingVertical: 5,
    textAlign: 'center'
  },
  startEndText: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    paddingBottom: 20
  },
  startEndValue: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-italic',
    fontSize: 18
  },
  textAndIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weightValue: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-italic',
    fontSize: 22,
    paddingHorizontal: 20
  }
});
