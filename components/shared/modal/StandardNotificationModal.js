import React from 'react';
import { View, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';

import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import {
  standardPopUpMessageSelector,
  isWarningMessage
} from '../../../store/selectors/ErrorSelector';
import { setShowStandardPopUp } from '../../../store/actions/ErrorActions';

const StandardNotificationModal = ({ visible }) => {
  const dispatch = useDispatch();
  const popUpMessage = useSelector(standardPopUpMessageSelector());
  const warningIcon = useSelector(isWarningMessage());
  const closeModal = () =>
    dispatch(
      setShowStandardPopUp({
        message: '',
        warningIcon: false
      })
    );

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <Text style={styles.messageText}>{popUpMessage}</Text>
          <Icon.MaterialCommunityIcons
            style={styles.closeIcon}
            name={warningIcon ? IconName.sadIcon : IconName.happyIcon}
            size={50}
            color={warningIcon ? Colors.warningColor : Colors.cloudColor}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonWrapper} onPress={closeModal} activeOpacity={1}>
              <Text style={styles.buttonText}>{$t('common.ok')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default StandardNotificationModal;

StandardNotificationModal.propTypes = {
  visible: PropTypes.bool,
  closeModal: PropTypes.func
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18,
    paddingVertical: 10
  },
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundAppColor
  },
  buttons: {
    width: '100%'
  },
  closeIcon: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center'
  },
  messageText: {
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    paddingHorizontal: 40,
    textAlign: 'center'
  },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 10,
    paddingTop: 20,
    width: '85%'
  }
});
