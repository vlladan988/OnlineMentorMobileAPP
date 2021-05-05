import React from 'react';
import { StyleSheet, Modal, ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';
import SharedHeaderWithBackButton from './SharedHeaderWithBackButton';
import { IsEditScreen } from '../../../helpers/IsEditScreen';
import SharedCreateEditGroceryForm from './SharedCreateEditGroceryForm';
import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';

const SharedCreateEditGroceryModal = ({ isVisible, closeModal, choosedGrocery, screen }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
      >
        <SafeAreaView style={styles.modalWrapper}>
          <ScrollView style={styles.scrollWrapper}>
            <SharedHeaderWithBackButton
              goBack={closeModal}
              headerText={IsEditScreen(screen) ? 'Edit Grocery' : 'Create Grocery'}
            />
            <SharedCreateEditGroceryForm
              closeModal={closeModal}
              choosedGrocery={choosedGrocery}
              screen={screen}
            />
          </ScrollView>
        </SafeAreaView>
      </SharedLinearGradientBackgroundVertical>
    </Modal>
  );
};

export default SharedCreateEditGroceryModal;

SharedCreateEditGroceryModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  choosedGrocery: PropTypes.any,
  screen: PropTypes.string
};

const styles = StyleSheet.create({
  modalWrapper: {
    alignSelf: 'center',
    width: '100%'
  },
  scrollWrapper: {
    height: '100%',
    width: '100%'
  }
});
