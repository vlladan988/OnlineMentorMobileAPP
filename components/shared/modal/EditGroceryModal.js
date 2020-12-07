import React from 'react';
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../../constants/Colors';
import EditGroceryHeaderText from '../../Trainer/Nutritions/Groceries/GroceryModal/EditGroceryHeaderText';
import EditGroceryForm from '../../Trainer/Nutritions/Groceries/GroceryModal/EditGroceryForm';

const EditGroceryModal = ({
  isEditGroceryModalVisible,
  closeModal,
  choosedGrocery
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isEditGroceryModalVisible}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[
            Colors.lightBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.darkBackgroundAppColor
          ]}
          style={styles.linearGradientWrapper}
        >
          <SafeAreaView>
            <ScrollView>
              <EditGroceryHeaderText closeModal={closeModal} />
              <EditGroceryForm
                closeModal={closeModal}
                choosedGrocery={choosedGrocery}
              />
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default EditGroceryModal;

EditGroceryModal.propTypes = {
  isEditGroceryModalVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  choosedGrocery: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'flex-end'
  },
  linearGradientWrapper: {
    height: '85%'
  }
});
