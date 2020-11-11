import React from 'react';
import { View, Modal, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import { standardPopUpMessage } from '../../../store/selectors/ErrorSelector';
import { setShowStandardPopUp } from '../../../store/actions/ErrorActions';

const StandardNotificationModal = ({ visible }) => {
  const dispatch = useDispatch();
  const popUpMessage = useSelector(standardPopUpMessage());
  const closeModal = () => dispatch(setShowStandardPopUp(''));

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <Text style={styles.messageText}>{popUpMessage}</Text>
          <Icon.Fontisto
            style={styles.closeIcon}
            name={IconName.close}
            size={26}
            color={Colors.warningColor}
            onPress={closeModal}
          />
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
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center'
  },
  messageText: {
    textAlign: 'center'
  },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 50,
    width: '85%'
  }
});
