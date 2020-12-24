import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { IsNotEmptyString } from '../../../../helpers/IsNotEmptyString';
import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';

const CountRecipe = ({ filteredList, filterBy, clearMealTypeText }) => {
  return (
    <View style={styles.countWrapper}>
      <Text style={styles.countText}>
        {$t('common.count')}: {filteredList.length}
      </Text>
      {IsNotEmptyString(filterBy) && (
        <TouchableOpacity
          style={styles.clearTypeWrapper}
          onPress={clearMealTypeText}
        >
          <Text style={styles.clearText}>{filterBy}</Text>
          <Icon.AntDesign
            name={IconName.close}
            size={18}
            color={Colors.light}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CountRecipe;

CountRecipe.propTypes = {
  handleEditRecipeModalVisible: PropTypes.func,
  filteredList: PropTypes.array,
  filterBy: PropTypes.string,
  clearMealTypeText: PropTypes.func
};

const styles = StyleSheet.create({
  clearIcon: {
    paddingLeft: 5
  },
  clearText: {
    color: Colors.light,
    fontSize: 20,
    paddingVertical: 2
  },
  clearTypeWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.warningColor,
    borderRadius: 20,
    flexDirection: 'row',
    marginRight: 20,
    paddingHorizontal: 10
  },
  countText: {
    color: Colors.light,
    fontSize: 20,
    paddingLeft: 20,
    paddingVertical: 2
  },
  countWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  }
});
