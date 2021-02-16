import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';

const ImagePickAndBackButtons = ({ closeModal, setIsPickImage }) => {
  return (
    <View style={styles.container}>
      <View style={ShadowStyleHigh}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkOker, Colors.oker, Colors.lightOker]}
          childrenStyle={styles.buttonsGradientWrapper}
        >
          <TouchableOpacity style={styles.backButton} onPress={closeModal}>
            <Text style={styles.buttonBackText}>Back</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
      <View style={ShadowStyleHigh}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
          childrenStyle={styles.buttonsGradientWrapper}
        >
          <TouchableOpacity style={styles.imageButton} onPress={() => setIsPickImage(true)}>
            <Text style={styles.buttonImageText}>Choose Image</Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </View>
  );
};

export default ImagePickAndBackButtons;

ImagePickAndBackButtons.propTypes = {
  closeModal: PropTypes.func,
  setIsPickImage: PropTypes.func
};

const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonBackText: {
    color: Colors.light,
    fontWeight: 'bold'
  },
  buttonImageText: {
    color: Colors.light,
    fontWeight: 'bold'
  },
  buttonsGradientWrapper: {
    backgroundColor: Colors.oker,
    borderRadius: 25,
    marginHorizontal: 5
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 10
  },
  imageButton: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
