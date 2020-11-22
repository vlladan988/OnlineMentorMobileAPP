import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../../constants/Colors';

const DeleteGalleryModal = ({ isVisible, closeModal, handleDeleteGallery }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <Text style={styles.mainText}>{$t('client.deleteGallery')}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.buttonWrapper, styles.borderLine]}
              onPress={handleDeleteGallery}
            >
              <Text style={styles.buttonText}>{$t('common.yes')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWrapper} onPress={closeModal}>
              <Text style={styles.buttonText}>{$t('common.no')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteGalleryModal;

DeleteGalleryModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  handleDeleteGallery: PropTypes.func
};

const styles = StyleSheet.create({
  borderLine: {
    borderRightColor: Colors.light,
    borderRightWidth: 1
  },
  buttonText: {
    color: Colors.cloudColor,
    fontSize: 18,
    paddingVertical: 10
  },
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundAppColor,
    justifyContent: 'center',
    width: '50%'
  },
  buttons: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    paddingVertical: 50
  },
  modalWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.light,
    borderRadius: 10,
    justifyContent: 'center',
    width: '90%'
  }
});
