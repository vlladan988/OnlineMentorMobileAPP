import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';
import { useDispatch, useSelector } from 'react-redux';

import ShadowStyleHigh from '../../../constants/ShadowStyleHigh';
import Colors from '../../../constants/Colors';
import { deletePopUpMessageSelector } from '../../../store/selectors/ErrorSelector';
import { setShowDeletePopUp } from '../../../store/actions/ErrorActions';
import Font from '../../../constants/Font';

const SharedDeleteModal = ({ isVisible, handleDelete }) => {
  const dispatch = useDispatch();
  const popUpMessage = useSelector(deletePopUpMessageSelector());

  const closeModal = () => dispatch(setShowDeletePopUp(''));

  const submit = () => {
    closeModal();
    handleDelete();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={[styles.container, ShadowStyleHigh]}>
        <View style={styles.modalWrapper}>
          <Text style={styles.mainText}>{popUpMessage}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.buttonWrapper, styles.leftButton]} onPress={submit}>
              <Text style={styles.buttonText}>{$t('common.yes')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonWrapper, styles.rightButton]}
              onPress={closeModal}
            >
              <Text style={styles.buttonText}>{$t('common.no')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SharedDeleteModal;

SharedDeleteModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  handleDelete: PropTypes.func,
  deletePopUpMessage: PropTypes.string
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.cloudColor,
    fontSize: Font.normal,
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
  leftButton: {
    borderBottomLeftRadius: 10
  },
  mainText: {
    fontSize: Font.normal,
    paddingVertical: 50
  },
  modalWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.light,
    borderRadius: 10,
    justifyContent: 'center',
    width: '90%'
  },
  rightButton: {
    borderBottomRightRadius: 10
  }
});
