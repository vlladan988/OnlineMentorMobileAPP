import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const GroceryValues = ({
  proteins,
  setProteins,
  carbons,
  setCarbons,
  fats,
  setFats,
  calories
}) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={ShadowStyleHigh}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientWrapper}
        >
          <Text style={styles.inputText}>{$t('common.groceryVal')}</Text>
          <View style={styles.groceryValueWrapper}>
            <View style={styles.groceryInputWrapper}>
              <TextInput
                value={proteins}
                placeholder={'0'}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => setProteins(text)}
                style={[styles.inputGroceryValue, styles.proteinColorStyle]}
              />
              <Text style={styles.groceriesNameText}>
                {$t('common.proteins')}
              </Text>
            </View>
            <View style={styles.groceryInputWrapper}>
              <TextInput
                value={carbons}
                placeholder={'0'}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => setCarbons(text)}
                style={[styles.inputGroceryValue, styles.carbonColorStyle]}
              />
              <Text style={styles.groceriesNameText}>
                {$t('common.carbonUh')}
              </Text>
            </View>
            <View style={styles.groceryInputWrapper}>
              <TextInput
                value={fats}
                placeholder={'0'}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => setFats(text)}
                style={[styles.inputGroceryValue, styles.fatColorStyle]}
              />
              <Text style={styles.groceriesNameText}>{$t('common.fats')}</Text>
            </View>
          </View>
          <View style={styles.caloriesWrapper}>
            <Text style={styles.caloriesValue}>{calories}</Text>
          </View>
          <Text style={styles.groceriesNameText}>{$t('common.calories')}</Text>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </View>
  );
};

export default GroceryValues;

GroceryValues.propTypes = {
  proteins: PropTypes.any,
  setProteins: PropTypes.func,
  carbons: PropTypes.any,
  setCarbons: PropTypes.func,
  fats: PropTypes.any,
  setFats: PropTypes.func,
  calories: PropTypes.any
};

const styles = StyleSheet.create({
  caloriesValue: {
    color: Colors.warningColor,
    fontSize: 24
  },
  caloriesWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'flex-end',
    marginHorizontal: 30
  },
  carbonColorStyle: {
    color: Colors.mainYellow
  },
  fatColorStyle: {
    color: Colors.oker
  },
  gradientWrapper: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20
  },
  groceriesNameText: {
    color: Colors.light,
    textAlign: 'center'
  },
  groceryInputWrapper: {
    width: '30%'
  },
  groceryValueWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  inputGroceryValue: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    fontSize: 24,
    height: 50,
    textAlign: 'center'
  },
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputWrapper: {
    // padding: 20,
    paddingTop: 30
  },
  proteinColorStyle: {
    color: Colors.cloudColor
  }
});
