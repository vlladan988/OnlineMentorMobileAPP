import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import { IsEditScreen } from '../../../../../../helpers/IsEditScreen';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const SubmitButtonGroceryForm = ({ submitForm, screen }) => {
  return (
    <View style={ShadowStyleHigh}>
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
        childrenStyle={styles.buttonSubmitGradientWrapper}
      >
        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text style={styles.submitButtonText}>
            {IsEditScreen(screen) ? 'Save Grocery' : 'Create Grocery'}
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
    borderRadius: 40,
    marginTop: 30
  },
  submitButton: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  submitButtonText: {
    color: 'white',
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
