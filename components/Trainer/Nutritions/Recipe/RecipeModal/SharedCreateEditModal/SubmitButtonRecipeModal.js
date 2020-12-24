import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import { isEditRecipeOrEditGroceryScreen } from '../../../../../../helpers/IsEditRecipeOrEditGroceryScreen';
import SharedLinearGradientButtonWrapper from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../../../constants/Colors';

const SubmitButtonRecipeModal = ({ handleSubmitRecipe, screen }) => {
  return (
    <View style={ShadowStyleHigh}>
      <SharedLinearGradientButtonWrapper
        childrenColors={[
          Colors.darkCloudColor,
          Colors.cloudColor,
          Colors.lightCloudColor
        ]}
        childrenStyle={styles.buttonSubmitGradientWrapper}
      >
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitRecipe}
        >
          <Text style={styles.submitButtonText}>
            {isEditRecipeOrEditGroceryScreen(screen)
              ? $t('trainer.editRecipe')
              : $t('trainer.createRecipe')}
          </Text>
        </TouchableOpacity>
      </SharedLinearGradientButtonWrapper>
    </View>
  );
};

export default SubmitButtonRecipeModal;

SubmitButtonRecipeModal.propTypes = {
  handleSubmitRecipe: PropTypes.func,
  screen: PropTypes.string
};

export const styles = StyleSheet.create({
  buttonSubmitGradientWrapper: {
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 20,
    marginTop: 60,
    width: '50%'
  },
  submitButton: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%'
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
