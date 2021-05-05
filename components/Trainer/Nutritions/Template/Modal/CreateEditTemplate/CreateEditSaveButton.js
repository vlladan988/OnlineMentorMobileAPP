import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import { IsEditScreen } from '../../../../../../helpers/IsEditScreen';

const CreateEditSaveButton = ({ submitForm, screen }) => {
  return (
    <View style={ShadowStyleHigh}>
      <SharedLinearGradientBackgroundHorizontal
        childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
        childrenStyle={styles.buttonSubmitGradientWrapper}
      >
        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text style={styles.submitButtonText}>
            {IsEditScreen(screen) ? 'Save Template' : 'Create Template'}
          </Text>
        </TouchableOpacity>
      </SharedLinearGradientBackgroundHorizontal>
    </View>
  );
};

export default CreateEditSaveButton;

CreateEditSaveButton.propTypes = {
  submitForm: PropTypes.func,
  screen: PropTypes.string
};

const styles = StyleSheet.create({
  buttonSubmitGradientWrapper: {
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 20,
    marginTop: 30,
    width: '50%'
  },
  submitButton: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%'
  },
  submitButtonText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
