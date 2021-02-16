import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from '../SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import { IsEditScreen } from '../../../helpers/IsEditScreen';
import { useDispatch, useSelector } from 'react-redux';
import { addTemplateMeal, editTemplateMeal } from '../../../store/actions/TemplateMealActions';
import { templateMealListSelector } from '../../../store/selectors/TemplateMealSelector';

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
    dispatch(
      addTemplateMeal({
        templateId: template.id,
        name,
        description
      })
    );
    resetData();
    closeModal();
  };

  const handleEditMeal = () => {
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
  };

  const resetData = () => {
    setName(''), setDescription('');
  };

  const handleSave = () => (IsEditScreen(screen) ? handleEditMeal() : handleCreateMeal());

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
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
              placeholderTextColor={Colors.lightGrayL}
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputRegularWrapper}>
            <Text style={styles.inputText}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder={'...'}
              multiline={true}
              placeholderTextColor={Colors.lightGrayL}
              onChangeText={text => setDescription(text)}
              value={description}
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
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center'
  },
  createEditButton: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  headerText: {
    color: Colors.light,
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
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalWrapper: {
    borderRadius: 20,
    width: '90%'
  }
});
