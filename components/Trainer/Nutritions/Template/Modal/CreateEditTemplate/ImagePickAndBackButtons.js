import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';

const ImagePickAndBackButtons = ({ setIsPickImage }) => {
  return (
    <View style={styles.container}>
      <View style={ShadowStyleHigh} />
      <View style={ShadowStyleHigh}>
        <TouchableOpacity style={styles.imageButton} onPress={() => setIsPickImage(true)}>
          <Text style={styles.buttonImageText}>Choose Image</Text>
        </TouchableOpacity>
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
  buttonImageText: {
    color: Colors.oker,
    fontFamily: 'montserrat-bold',
    fontSize: 16
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
