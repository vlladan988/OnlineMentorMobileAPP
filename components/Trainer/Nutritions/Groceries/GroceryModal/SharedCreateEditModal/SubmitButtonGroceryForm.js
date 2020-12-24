import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import { isEditRecipeOrEditGroceryScreen } from '../../../../../../helpers/IsEditRecipeOrEditGroceryScreen';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const SubmitButtonGroceryForm = ({ submitForm, screen }) => {
  return (
    <View style={ShadowStyleHigh}>
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[
          Colors.darkCloudColor,
          Colors.cloudColor,
          Colors.lightCloudColor
        ]}
        childrenStyle={styles.buttonSubmitGradientWrapper}
      >
        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text style={styles.submitButtonText}>
            {isEditRecipeOrEditGroceryScreen(screen)
              ? 'Save Grocery'
              : 'Create Grocery'}
          </Text>
        </TouchableOpacity>
      </SharedLinearGradientBackgroundHorizontal>
    </View>
  );
};

export default SubmitButtonGroceryForm;

SubmitButtonGroceryForm.propTypes = {
  submitForm: PropTypes.func,
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
