import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import RadioFormEditGroceryUnit from './RadioFormEditGroceryUnit';
import ShadowStyleLow from '../../../../../../constants/ShadowStyleLow';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const GroceryAndMeasurements = ({ name, setName, unitType, unit, setUnit, choosedGrocery }) => {
  return (
    <View style={ShadowStyleLow}>
      <View style={styles.nameWrapper}>
        <Text style={styles.inputText}>Grocery {$t('common.name')}*</Text>
        <TextInput
          value={name}
          placeholder={'Chicken Breast'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
      </View>
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[
          Colors.darkBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.lightBackgroundAppColor
        ]}
        childrenStyle={styles.gradientWrapper}
      >
        <View style={styles.measurementWrapper}>
          <Text style={styles.inputText}>{$t('common.measUnit')}</Text>
          {unitType && unit && <Text style={styles.unitTypeText}>{unitType}</Text>}
        </View>
        <RadioFormEditGroceryUnit
          setSelectedUnit={selectedUnit => setUnit(selectedUnit)}
          initValue={choosedGrocery.unit}
        />
      </SharedLinearGradientBackgroundHorizontal>
    </View>
  );
};

export default GroceryAndMeasurements;

GroceryAndMeasurements.propTypes = {
  choosedGrocery: PropTypes.object,
  name: PropTypes.string,
  setName: PropTypes.func,
  unitType: PropTypes.any,
  unit: PropTypes.string,
  setUnit: PropTypes.func
};

const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 20
  },
  input: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 16,
    height: 60,
    paddingLeft: 20
  },
  inputText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  measurementWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 40
  },
  unitTypeText: {
    color: Colors.warningColor,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
