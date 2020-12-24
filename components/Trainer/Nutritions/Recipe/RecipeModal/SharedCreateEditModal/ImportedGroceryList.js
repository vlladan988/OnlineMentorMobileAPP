import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import $t from 'i18n';

import IconName from '../../../../../../constants/IconName';
import ShadowStyleLow from '../../../../../../constants/ShadowStyleLow';
import Colors from '../../../../../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { importedGroceryListSelector } from '../../../../../../store/selectors/GrocerySelector';
import {
  clearImportedGroceries,
  updateImportedGroceries
} from '../../../../../../store/actions/GroceriesActions';
import { isIncrementGrocery } from '../../../../../../helpers/IsIncrementGrocery';
import { updateGroceryByNumber } from '../../../../../../helpers/UpdateGroceryByNumber';
import { updateGroceryByIncrementDecrement } from '../../../../../../helpers/updateGroceryByIncrementDecrement';
// import { sumRecipeGrocery } from '../../../../../../helpers/SumRecipeGrocery';
import { removeItemFromArrayById } from '../../../../../../helpers/RemoveItemFromArrayById';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const ImportedGroceryList = () => {
  const dispatch = useDispatch();
  const renderData = useSelector(importedGroceryListSelector());

  useEffect(() => {
    dispatch(clearImportedGroceries());
  }, []);

  const handleChangeValueByIncrementDecrement = (incDecValue, grocery) => {
    dispatch(
      updateImportedGroceries(
        updateGroceryByIncrementDecrement(
          renderData,
          grocery,
          isIncrementGrocery(incDecValue)
        )
      )
    );
  };

  const handleChangeValueByNumber = (number, grocery) =>
    dispatch(
      updateImportedGroceries(
        updateGroceryByNumber(renderData, grocery, number)
      )
    );

  const deleteRecipeGroceryFromImportedList = recipeGrocery => {
    dispatch(
      updateImportedGroceries(
        removeItemFromArrayById(renderData, recipeGrocery)
      )
    );
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 70,
      offset: 70 * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={ShadowStyleLow}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientWrapper}
        >
          <View style={styles.item}>
            <Text style={styles.nameText}>
              {item.name} ({item.unit_type}
              {item.unit})
            </Text>
            <View>
              <Icon.AntDesign
                onPress={() => deleteRecipeGroceryFromImportedList(item)}
                name={IconName.closeCircle}
                size={30}
                color={Colors.warningColor}
              />
            </View>
          </View>
          <View style={styles.incDecWrapper}>
            <Icon.AntDesign
              onPress={() => handleChangeValueByIncrementDecrement(false, item)}
              name={IconName.minus}
              size={30}
              color={Colors.light}
              style={styles.incDecrIcon}
            />
            <TextInput
              value={item.unit_type.toString()}
              onChangeText={number => handleChangeValueByNumber(number, item)}
              style={styles.valueText}
            />
            <Icon.AntDesign
              onPress={() => handleChangeValueByIncrementDecrement(true, item)}
              name={IconName.plus}
              size={30}
              color={Colors.light}
              style={styles.incDecrIcon}
            />
          </View>
          <View style={styles.itemValWrapper}>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.proteins')}</Text>
              <Text style={styles.proteinValText}>{item.proteins}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.carbonUh')}</Text>

              <Text style={styles.carbonsValText}>{item.carbons}g</Text>
            </View>
            <View style={styles.itemVal}>
              <Text style={styles.val}>{$t('common.fats')}</Text>

              <Text style={styles.fatValText}>{item.fats}g</Text>
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
      data={renderData}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
    />
  );
};

export default ImportedGroceryList;

ImportedGroceryList.propTypes = {
  handleChooseGrocery: PropTypes.func,
  showEditGroceryModal: PropTypes.func,
  deleteGrocery: PropTypes.func
};

const styles = StyleSheet.create({
  calorieValText: {
    color: Colors.warningColor,
    fontSize: 22
  },
  carbonsValText: {
    color: Colors.mainYellow,
    fontSize: 22
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  fatValText: {
    color: Colors.oker,
    fontSize: 22
  },
  gradientWrapper: {
    borderRadius: 10,
    padding: 20
  },
  incDecWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: 20
  },
  incDecrIcon: {
    padding: 10
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemVal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '25%'
  },
  itemValWrapper: {
    flexDirection: 'row'
  },
  nameText: {
    color: Colors.light,
    fontSize: 20
  },
  proteinValText: {
    color: Colors.cloudColor,
    fontSize: 22
  },
  val: {
    color: Colors.light
  },
  valueText: {
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    color: Colors.light,
    fontSize: 18,
    textAlign: 'center',
    width: 100
  }
});
