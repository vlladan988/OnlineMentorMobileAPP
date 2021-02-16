import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { IsNotEmptyString } from '../../../../helpers/IsNotEmptyString';
import IconName from '../../../../constants/IconName';
import Colors from '../../../../constants/Colors';
import AnimatedInfo from './AnimatedInfo';

const CountRecipe = ({ filteredList, filterBy, clearMealTypeText }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowInfo = () => setShowInfo(prevState => !prevState);
  return (
    <View style={styles.countWrapper}>
      <View style={styles.countTextWrapper}>
        <Text style={styles.countText}>
          {$t('common.count')}: {filteredList.length}
        </Text>
      </View>
      <View style={styles.rightIconsWrapper}>
        {IsNotEmptyString(filterBy) && (
          <TouchableOpacity style={styles.clearTypeWrapper} onPress={clearMealTypeText}>
            <Text style={styles.clearText}>{filterBy}</Text>
            <Icon.AntDesign
              name={IconName.close}
              size={18}
              color={Colors.light}
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.infoIconWrapper} onPress={handleShowInfo}>
          <Icon.AntDesign name={IconName.info} size={30} color={Colors.light} />
        </TouchableOpacity>
        {showInfo && <AnimatedInfo recipeExample={filteredList} />}
      </View>
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
    paddingVertical: 10,
    zIndex: 1
  },
  infoIconWrapper: {
    paddingHorizontal: 10
  },
  rightIconsWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
