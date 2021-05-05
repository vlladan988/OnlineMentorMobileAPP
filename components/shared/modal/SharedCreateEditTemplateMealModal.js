import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SharedLinearGradientBackgroundHorizontal from '../SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import { IsEditScreen } from '../../../helpers/IsEditScreen';
import { useDispatch, useSelector } from 'react-redux';
import { addTemplateMeal, editTemplateMeal } from '../../../store/actions/TemplateMealActions';
import { templateMealListSelector } from '../../../store/selectors/TemplateMealSelector';
import ErrorText from '../Text/ErrorText';
import { inputFealdErrorMessage } from '../../../store/selectors/ErrorSelector';
import { requiredFieldsValidation } from '../../../helpers/RequiredFieldsValidation';
import { setInputFealdError } from '../../../store/actions/ErrorActions';
import Layout from '../../../constants/Layout';

const SharedCreateEditTemplateMealModal = ({
  isVisible,
  screen,
  closeModal,
  template,
  choosedMeal
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(IsEditScreen(screen) ? choosedMeal.name : '');
  const [description, setDescription] = useState(
    IsEditScreen(screen) ? choosedMeal.description : ''
  );

  const templateMeals = useSelector(templateMealListSelector());
  const errorMessage = useSelector(inputFealdErrorMessage());

  useEffect(
    () => {
      const meal = templateMeals.find(meal => meal.id === choosedMeal.id);
      if (meal) {
        setName(meal.name);
        setDescription(meal.description);
      }
    },
    [templateMeals]
  );

  const handleCreateMeal = () => {
    if (requiredFieldsValidation(new Array(name))) {
      dispatch(setInputFealdError('The Name field is required.'));
    } else {
      dispatch(
        addTemplateMeal({
          templateId: template.id,
          name,
          description
        })
      );
      resetData();
      closeModal();
    }
  };

  const handleEditMeal = () => {
    if (requiredFieldsValidation(new Array(name))) {
      dispatch(setInputFealdError('The Name field is required.'));
    } else {
      dispatch(
        editTemplateMeal({
          templateMealId: choosedMeal.id,
          templateId: template.id,
          name,
          description
        })
      );
      resetData();
      closeModal();
    }
  };

  const resetData = () => {
    setName(''), setDescription('');
  };

  const handleSave = () => (IsEditScreen(screen) ? handleEditMeal() : handleCreateMeal());

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <View style={styles.scrollContainer}>
            <SharedLinearGradientBackgroundHorizontal
              childrenColors={[
                Colors.darkBackgroundAppColor,
                Colors.backgroundAppColor,
                Colors.lightBackgroundAppColor
              ]}
              childrenStyle={styles.modalWrapper}
            >
              <View style={styles.headerTextWrapper}>
                <Text style={styles.headerText}>
                  {' '}
                  {IsEditScreen(screen) ? 'Edit Meal' : 'Create Meal'}
                </Text>
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
                  onChangeText={text => setName(text)}
                  value={name}
                  selectionColor={Colors.light}
                />
              </View>
              <ErrorText error={!!errorMessage} message={errorMessage} />
              <View style={styles.inputRegularWrapper}>
                <Text style={styles.inputText}>Description</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'...'}
                  autoCorrect={false}
                  clearButtonMode={'always'}
                  multiline={true}
                  placeholderTextColor={Colors.lightGrayL}
                  onChangeText={text => setDescription(text)}
                  value={description}
                  selectionColor={Colors.light}
                />
              </View>
              <SharedLinearGradientBackgroundHorizontal
                childrenColors={[Colors.darkCloudColor, Colors.cloudColor, Colors.lightCloudColor]}
                childrenStyle={styles.buttonWrapper}
              >
                <TouchableOpacity style={styles.createEditButton} onPress={handleSave}>
                  <Text style={styles.buttonText}>{IsEditScreen(screen) ? 'Edit' : 'Create'}</Text>
                </TouchableOpacity>
              </SharedLinearGradientBackgroundHorizontal>
            </SharedLinearGradientBackgroundHorizontal>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

export default SharedCreateEditTemplateMealModal;

SharedCreateEditTemplateMealModal.propTypes = {
  isVisible: PropTypes.bool,
  screen: PropTypes.string,
  closeModal: PropTypes.func,
  template: PropTypes.object,
  choosedMeal: PropTypes.object
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
    // alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1
    // justifyContent: 'center'
  },
  createEditButton: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10
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
  },
  modalWrapper: {
    borderRadius: 5,
    width: '100%'
  },
  scrollContainer: {
    alignItems: 'center',
    height: Layout.window.height,
    justifyContent: 'center'
  }
});
