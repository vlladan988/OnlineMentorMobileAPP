import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ShadowStyleLow from '../../../../../../constants/ShadowStyleLow';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const GroceryValues = ({ proteins, setProteins, carbons, setCarbons, fats, setFats, calories }) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={ShadowStyleLow}>
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
                keyboardType={'number-pad'}
                placeholder={'0'}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => setProteins(text)}
                style={[styles.inputGroceryValue, styles.proteinColorStyle]}
                selectionColor={Colors.light}
              />
              <Text style={styles.groceriesNameText}>{$t('common.proteins')}</Text>
            </View>
            <View style={styles.groceryInputWrapper}>
              <TextInput
                value={carbons}
                keyboardType={'number-pad'}
                placeholder={'0'}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => setCarbons(text)}
                style={[styles.inputGroceryValue, styles.carbonColorStyle]}
                selectionColor={Colors.light}
              />
              <Text style={styles.groceriesNameText}>{$t('common.carbonUh')}</Text>
            </View>
            <View style={styles.groceryInputWrapper}>
              <TextInput
                value={fats}
                keyboardType={'number-pad'}
                placeholder={'0'}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => setFats(text)}
                style={[styles.inputGroceryValue, styles.fatColorStyle]}
                selectionColor={Colors.light}
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
    color: Colors.cloudColor,
    fontFamily: 'montserrat-regular',
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
    color: Colors.oker
  },
  fatColorStyle: {
    color: Colors.oker
  },
  gradientWrapper: {
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 20
  },
  groceriesNameText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
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
    fontFamily: 'montserrat-regular',
    fontSize: 24,
    height: 50,
    textAlign: 'center'
  },
  inputText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  inputWrapper: {
    paddingTop: 10
  },
  proteinColorStyle: {
    color: Colors.oker
  }
});
