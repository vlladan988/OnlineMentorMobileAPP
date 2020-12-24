import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import ImportedGroceryList from './ImportedGroceryList';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const ImportAddGrocery = ({ handleImportGroceryModalVisible }) => {
  return (
    <View style={styles.inputGroceriesWrapper}>
      <Text style={styles.inputText}>
        {$t('trainer.groceries').toUpperCase()}
      </Text>
      <ImportedGroceryList />
      <View style={[ShadowStyleHigh, styles.groceriesButtonWrapper]}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkOker, Colors.oker, Colors.lightOker]}
          childrenStyle={styles.gradientGroceriesButtonWrapper}
        >
          <TouchableOpacity
            style={styles.groceryButton}
            onPress={handleImportGroceryModalVisible}
          >
            <Text style={styles.submitButtonText}>{$t('common.import')}</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </View>
  );
};

export default ImportAddGrocery;

ImportAddGrocery.propTypes = {
  handleImportGroceryModalVisible: PropTypes.func
};

export const styles = StyleSheet.create({
  gradientGroceriesButtonWrapper: {
    borderRadius: 15
  },
  groceriesButtonWrapper: {
    alignSelf: 'center',
    marginVertical: 20,
    width: '35%'
  },
  groceryButton: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  inputGroceriesWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    borderTopColor: Colors.light,
    borderTopWidth: 1,
    marginTop: 40,
    paddingVertical: 50
  },
  inputText: {
    color: Colors.light,
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
