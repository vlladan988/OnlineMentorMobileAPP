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
import GroceryHeaderText from '../../Trainer/Nutritions/Groceries/GroceryModal/GroceryHeaderText';
import CreateGroceryForm from '../../Trainer/Nutritions/Groceries/GroceryModal/CreateGroceryForm';

const CreateGroceryModal = ({ isCreateGroceryModalVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isCreateGroceryModalVisible}
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
              <GroceryHeaderText closeModal={closeModal} />
              <CreateGroceryForm closeModal={closeModal} />
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default CreateGroceryModal;

CreateGroceryModal.propTypes = {
  isCreateGroceryModalVisible: PropTypes.bool,
  closeModal: PropTypes.func
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
