import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import RadioFormEditGroceryUnit from './RadioFormEditGroceryUnit';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const GroceryAndMeasurements = ({
  name,
  setName,
  unitType,
  unit,
  setUnit,
  choosedGrocery
}) => {
  return (
    <View style={ShadowStyleHigh}>
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[
          Colors.darkBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.lightBackgroundAppColor
        ]}
        childrenStyle={styles.gradientWrapper}
      >
        <View>
          <Text style={styles.inputText}>Grocery {$t('common.name')}*</Text>
          <TextInput
            value={name}
            placeholder={'Chicken Breast'}
            placeholderTextColor={Colors.lightGray}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.measurementWrapper}>
            <Text style={styles.inputText}>{$t('common.measUnit')}</Text>
            {unitType &&
              unit && <Text style={styles.unitTypeText}>{unitType}</Text>}
          </View>
          <RadioFormEditGroceryUnit
            setSelectedUnit={selectedUnit => setUnit(selectedUnit)}
            initValue={choosedGrocery.unit}
          />
        </View>
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
    marginHorizontal: 10,
    padding: 20
  },
  input: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    color: Colors.light,
    fontSize: 16,
    height: 60,
    paddingLeft: 20
  },
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputWrapper: {
    paddingTop: 50
  },
  measurementWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  unitTypeText: {
    color: Colors.warningColor,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
