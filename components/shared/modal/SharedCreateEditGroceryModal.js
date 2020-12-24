import React from 'react';
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';
import SharedHeaderWithBackButton from './SharedHeaderWithBackButton';
import { isEditRecipeOrEditGroceryScreen } from '../../../helpers/IsEditRecipeOrEditGroceryScreen';
import SharedCreateEditGroceryForm from './SharedCreateEditGroceryForm';
import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';

const SharedCreateEditGroceryModal = ({
  isVisible,
  closeModal,
  choosedGrocery,
  screen
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <SharedLinearGradientBackgroundVertical
          childrenColors={[
            Colors.lightBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.darkBackgroundAppColor
          ]}
          childrenStyle={{}}
        >
          <SafeAreaView style={styles.modalWrapper}>
            <ScrollView style={styles.scrollWrapper}>
              <SharedHeaderWithBackButton
                goBack={() => closeModal('')}
                headerText={
                  isEditRecipeOrEditGroceryScreen(screen)
                    ? 'Edit Grocery'
                    : 'Create Grocery'
                }
              />
              <SharedCreateEditGroceryForm
                closeModal={() => closeModal('')}
                choosedGrocery={choosedGrocery}
                screen={screen}
              />
            </ScrollView>
          </SafeAreaView>
        </SharedLinearGradientBackgroundVertical>
      </View>
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
  container: {
    paddingTop: 10
  },
  modalWrapper: {
    alignSelf: 'center',
    width: '100%'
  },
  scrollWrapper: {
    height: '100%',
    width: '100%'
  }
});
