import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../../../constants/Colors';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import IconName from '../../../../constants/IconName';

const CountAndRemoveButton = ({ choosedMeal, handleRemoveMeal }) => {
  return (
    <View style={[ShadowStyleLow, styles.countWrapper]}>
      <View style={styles.countTextWrapper}>
        <Text style={styles.countText}>
          Count: {choosedMeal && choosedMeal.daily_meal_recipes.length}
        </Text>
      </View>
      {choosedMeal && (
        <TouchableOpacity style={styles.deleteMealButtonWrapper} onPress={handleRemoveMeal}>
          <Text style={styles.deleteMealText}>{choosedMeal.name}</Text>
          <Icon.MaterialIcons name={IconName.delete} size={30} color={Colors.warningColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CountAndRemoveButton;

CountAndRemoveButton.propTypes = {
  choosedMeal: PropTypes.object,
  handleRemoveMeal: PropTypes.func
};

const styles = StyleSheet.create({
  countText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    paddingVertical: 2
  },
  countTextWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    marginLeft: 20
  },
  countWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  deleteMealButtonWrapper: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginRight: 20
  },
  deleteMealText: {
    color: Colors.warningColor,
    fontFamily: 'montserrat-regular',
    fontSize: 18
  }
});
