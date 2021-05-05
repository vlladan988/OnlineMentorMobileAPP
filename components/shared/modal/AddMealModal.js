import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from '../SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import ErrorText from '../Text/ErrorText';
import { useSelector, useDispatch } from 'react-redux';
import { inputFealdErrorMessage } from '../../../store/selectors/ErrorSelector';
import { setInputFealdError } from '../../../store/actions/ErrorActions';

const AddMealModal = ({ isVisible, closeModal, handleSave, setMealText, mealText }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(inputFealdErrorMessage());

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientModalWrapper}
        >
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>Add Meal</Text>
            <Icon.Fontisto
              style={styles.closeIcon}
              name={IconName.close}
              color={Colors.light}
              size={24}
              onPress={closeModal}
            />
          </View>
          <View style={styles.inputRegularWrapper}>
            <Text style={styles.inputText}>Name*</Text>
            <TextInput
              style={styles.input}
              placeholder={'Breakfest, Snack, Dinner ...'}
              autoCorrect={false}
              onEndEditing={() => dispatch(setInputFealdError(''))}
              clearButtonMode={'always'}
              placeholderTextColor={Colors.lightGrayL}
              onChangeText={text => setMealText(text)}
              value={mealText}
            />
          </View>
          <ErrorText error={!!errorMessage} message={errorMessage} />
          <SharedLinearGradientBackgroundHorizontal
            childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
            childrenStyle={styles.buttonWrapper}
          >
            <TouchableOpacity style={styles.createEditButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
          </SharedLinearGradientBackgroundHorizontal>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </Modal>
  );
};

export default AddMealModal;

AddMealModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  handleSave: PropTypes.func,
  setMealText: PropTypes.func,
  mealText: PropTypes.string
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  buttonWrapper: {
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: 5
  },
  closeIcon: {
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 0
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center'
  },
  createEditButton: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  gradientModalWrapper: {
    borderRadius: 20,
    maxHeight: '70%',
    width: '85%'
  },
  headerText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 22,
    paddingVertical: 20,
    textAlign: 'center'
  },
  headerTextWrapper: {
    borderBottomColor: Colors.borderLine,
    borderBottomWidth: 1
  },
  input: {
    color: Colors.light,
    fontFamily: 'montserrat-italic',
    minHeight: 40,
    paddingLeft: 10
  },
  inputRegularWrapper: {
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    margin: 10,
    paddingTop: 15
  },
  inputText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
