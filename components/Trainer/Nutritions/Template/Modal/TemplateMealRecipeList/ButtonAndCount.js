import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';

const ButtonAndCount = ({ showImportRecipeModal, countRecipe }) => {
  return (
    <View style={[ShadowStyleHigh, styles.container]}>
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[Colors.light, Colors.light, Colors.light]}
        childrenStyle={styles.gradientButtonWrapper}
      >
        <TouchableOpacity style={styles.importButton} onPress={showImportRecipeModal}>
          <Text style={styles.importButtonText}>{$t('common.import')}</Text>
        </TouchableOpacity>
      </SharedLinearGradientBackgroundHorizontal>
      <Text style={styles.countText}>Recipes: {countRecipe}</Text>
    </View>
  );
};

export default ButtonAndCount;

ButtonAndCount.propTypes = {
  showImportRecipeModal: PropTypes.func,
  countRecipe: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  countText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  gradientButtonWrapper: {
    borderRadius: 15
  },
  importButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7
  },
  importButtonText: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
