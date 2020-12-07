import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import $t from 'i18n';
import PropTypes from 'prop-types';

import ShadowStyleHigh from '../../../../../constants/ShadowStyleHigh';
import Colors from '../../../../../constants/Colors';

const SubmitButtonEditGrocery = ({ submitForm }) => {
  return (
    <View style={ShadowStyleHigh}>
      <LinearGradient
        colors={[
          Colors.darkCloudColor,
          Colors.cloudColor,
          Colors.lightCloudColor
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonSubmitGradientWrapper}
      >
        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text style={styles.submitButtonText}>Edit Grocery</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SubmitButtonEditGrocery;

SubmitButtonEditGrocery.propTypes = {
  submitForm: PropTypes.func
};

export const styles = StyleSheet.create({
  buttonSubmitGradientWrapper: {
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 20,
    marginTop: 20,
    width: '50%'
  },
  submitButton: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%'
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
