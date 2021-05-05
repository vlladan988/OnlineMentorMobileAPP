/* eslint-disable indent */
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import IconName from '../../../../constants/IconName';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import SharedLinearGradientBackgroundHorizontal from '../../../shared/SharedLinearGradientBackgroundHorizontal';
import { recipePercentValue } from '../../../../helpers/RecipePercentValue';
import SharedAnimatedDropdown from '../../../shared/SharedAnimatedDropdown';
import { formatGroceryUnit } from '../../../../helpers/FormatGroceryUnit';

const GroceryList = ({
  renderListGroceries,
  handleChooseGrocery,
  showSharedCreateEditModal,
  showDeleteModal
}) => {
  const optionValue = ['Edit', 'Delete'];
  const [choosedItem, setChoosedItem] = useState([]);

  const handleUpdateGrocery = item => {
    handleChooseGrocery(item);
    showSharedCreateEditModal();
  };

  const handleChoosedItem = item => {
    if (item.id !== choosedItem.id) setChoosedItem(item);
    else choosedItem.id ? setChoosedItem([]) : setChoosedItem(item);
  };

  const handleDropdownPicker = (value, item) => {
    switch (value) {
      case 'edit':
        handleUpdateGrocery(item);
        setChoosedItem([]);
        break;
      case 'delete':
        showDeleteModal(item);
        break;
    }
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 161,
      offset: 161 * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={ShadowStyleLow}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkBackgroundAppColor, Colors.lightBackgroundAppColor]}
          childrenStyle={styles.gradientWrapper}
        >
          <View style={styles.item}>
            <Text style={styles.nameText}>
              {item.name} {formatGroceryUnit(item.unit_type, item.unit)}
            </Text>
            <View style={styles.dotsIconWrapper}>
              {choosedItem.id === item.id && (
                <SharedAnimatedDropdown
                  menuItem={optionValue}
                  editItem={() => handleDropdownPicker('edit', item)}
                  deleteItem={() => handleDropdownPicker('delete', item)}
                />
              )}
              <TouchableOpacity onPress={() => handleChoosedItem(item)}>
                <Icon.MaterialCommunityIcons
                  name={IconName.dotsIcon}
                  color={Colors.light}
                  size={30}
                  style={styles.optionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemValWrapper}>
            <View style={styles.itemVal}>
              <Text style={styles.percentText}>
                (
                {recipePercentValue(
                  {
                    proteins: item.proteins,
                    carbons: item.default_carbons,
                    fats: item.fats
                  },
                  item.default_proteins
                )}
                %)
              </Text>
              <Text style={styles.val}>{$t('common.proteins')}</Text>
              <Text style={styles.proteinValText}>{item.default_proteins}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.percentText}>
                (
                {recipePercentValue(
                  {
                    proteins: item.proteins,
                    carbons: item.default_carbons,
                    fats: item.fats
                  },
                  item.default_carbons
                )}
                %)
              </Text>
              <Text style={styles.val}>{$t('common.carbonUh')}</Text>

              <Text style={styles.carbonsValText}>{item.default_carbons}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.percentText}>
                (
                {recipePercentValue(
                  {
                    proteins: item.proteins,
                    carbons: item.default_carbons,
                    fats: item.fats
                  },
                  item.default_fats
                )}
                %)
              </Text>
              <Text style={styles.val}>{$t('common.fats')}</Text>

              <Text style={styles.fatValText}>{item.default_fats}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.calories')}</Text>
              <Text style={styles.calorieValText}>{item.calories}</Text>
            </View>
          </View>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </View>
  );

  return (
    <FlatList
      data={renderListGroceries}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

export default GroceryList;

GroceryList.propTypes = {
  renderListGroceries: PropTypes.array,
  handleChooseGrocery: PropTypes.func,
  showSharedCreateEditModal: PropTypes.func,
  deleteGrocery: PropTypes.func,
  showDeleteModal: PropTypes.func
};

const styles = StyleSheet.create({
  calorieValText: {
    color: Colors.cloudColor,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  carbonsValText: {
    color: Colors.oker,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  container: {
    marginVertical: 5
  },
  dotsIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  fatValText: {
    color: Colors.oker,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  flatListStyle: {
    paddingTop: 15
  },
  gradientWrapper: {
    borderRadius: 10,
    padding: 15
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1
  },
  itemVal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '25%'
  },
  itemValWrapper: {
    flexDirection: 'row',
    paddingTop: 30
  },
  nameText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 21
  },
  optionIcon: {
    paddingHorizontal: 5
  },
  percentText: {
    color: Colors.lightGrayL,
    fontFamily: 'montserrat-regular',
    fontSize: 17
  },
  proteinValText: {
    color: Colors.oker,
    fontFamily: 'montserrat-regular',
    fontSize: 22
  },
  val: {
    color: Colors.light,
    fontFamily: 'montserrat-regular'
  }
});
