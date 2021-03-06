import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import { IsEditScreen } from '../../../../../../helpers/IsEditScreen';
import SharedLinearGradientButtonWrapper from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../../../constants/Colors';

const SubmitButtonDailyRecipe = ({ handleCreateRecipe, handleEditRecipe, screen }) => {
  return (
    <View style={ShadowStyleHigh}>
      <SharedLinearGradientButtonWrapper
        childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
        childrenStyle={styles.buttonSubmitGradientWrapper}
      >
        <TouchableOpacity
          style={styles.submitButton}
          onPress={IsEditScreen(screen) ? handleEditRecipe : handleCreateRecipe}
        >
          <Text style={styles.submitButtonText}>
            {IsEditScreen(screen) ? $t('trainer.editRecipe') : $t('trainer.createRecipe')}
          </Text>
        </TouchableOpacity>
      </SharedLinearGradientButtonWrapper>
    </View>
  );
};

export default SubmitButtonDailyRecipe;

SubmitButtonDailyRecipe.propTypes = {
  handleCreateRecipe: PropTypes.func,
  handleEditRecipe: PropTypes.func,
  screen: PropTypes.string
};

export const styles = StyleSheet.create({
  buttonSubmitGradientWrapper: {
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: 20,
    marginTop: 60
  },
  submitButton: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  submitButtonText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
