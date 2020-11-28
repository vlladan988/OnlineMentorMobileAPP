import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import $t from 'i18n';
import PropTypes from 'prop-types';

import ShadowStyle from '../../../../../constants/ShadowStyle';
import Colors from '../../../../../constants/Colors';

const SubmitButtonCreateRecipeModal = ({ closeModal }) => {
  return (
    <View style={ShadowStyle}>
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
        <TouchableOpacity style={styles.submitButton} onPress={closeModal}>
          <Text style={styles.submitButtonText}>
            {$t('trainer.createRecipe')}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SubmitButtonCreateRecipeModal;

SubmitButtonCreateRecipeModal.propTypes = {
  closeModal: PropTypes.func
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
    fontWeight: 'bold'
  }
});
