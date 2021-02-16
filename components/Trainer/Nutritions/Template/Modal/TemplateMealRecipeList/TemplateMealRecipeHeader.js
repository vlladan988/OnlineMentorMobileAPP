/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';

import templateImg from '../../../../../../assets/images/templateImg.jpg';
import IconName from '../../../../../../constants/IconName';
import Colors from '../../../../../../constants/Colors';
import { templateMealListSelector } from '../../../../../../store/selectors/TemplateMealSelector';
import { deleteTemplateMeal } from '../../../../../../store/actions/TemplateMealActions';

const TemplateMealRecipeHeader = ({ closeModal, choosedMeal, showEditMealModal }) => {
  const dispatch = useDispatch();

  const optionValue = ['Edit', 'Delete'];

  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');

  const templateMeals = useSelector(templateMealListSelector());

  useEffect(
    () => {
      const meal = templateMeals.find(meal => meal.id === choosedMeal.id);
      setMealName(meal.name);
      setMealDescription(meal.description);
    },
    [templateMeals]
  );

  const handleDropdownPicker = value => {
    switch (value) {
      case '0':
        showEditMealModal();
        break;
      case '1':
        closeModal();
        dispatch(
          deleteTemplateMeal({
            templateMealId: choosedMeal.id
          })
        );
        break;
    }
  };

  return (
    <View style={styles.headerWrapper}>
      <ImageBackground source={templateImg} style={styles.templateImage}>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity style={styles.goBackIconWrapper} onPress={closeModal}>
            <Icon.Ionicons name={IconName.goBack} size={30} color={Colors.light} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerDotsIconWrapper}>
            <ModalDropdown
              defaultIndex={0}
              options={optionValue}
              onSelect={text => handleDropdownPicker(text)}
              dropdownTextStyle={styles.dropdownTextStyle}
              dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
              dropdownStyle={styles.dropdownStyle}
            >
              <Icon.MaterialCommunityIcons
                name={IconName.dotsIcon}
                color={Colors.light}
                size={30}
                style={styles.optionIcon}
              />
            </ModalDropdown>
          </TouchableOpacity>
          <View style={styles.detailWrapper}>
            <Text style={styles.nameText}>{mealName}</Text>
            <ScrollView style={styles.descWrapper}>
              <Text style={styles.descText}>{mealDescription}</Text>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TemplateMealRecipeHeader;

TemplateMealRecipeHeader.propTypes = {
  closeModal: PropTypes.func,
  showEditMealModal: PropTypes.func,
  choosedMeal: PropTypes.object
};

const styles = StyleSheet.create({
  bottomWrapper: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  descText: {
    color: Colors.light,
    fontSize: 16
  },
  descWrapper: {
    marginVertical: 10,
    paddingHorizontal: 5
  },
  detailWrapper: {
    bottom: 0,
    maxHeight: 150,
    padding: 10,
    position: 'absolute',
    width: '100%'
  },
  dropdownStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width: 140
  },
  dropdownTextHighlightStyle: {
    backgroundColor: Colors.light,
    color: Colors.backgroundAppColor
  },
  dropdownTextStyle: {
    backgroundColor: Colors.light,
    color: Colors.backgroundAppColor,
    fontSize: 15,
    fontWeight: 'bold'
  },
  goBackIconWrapper: {
    left: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    top: Constants.statusBarHeight
  },
  headerDotsIconWrapper: {
    paddingHorizontal: 10,
    position: 'absolute',
    right: 10,
    top: Constants.statusBarHeight
  },
  headerWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 250,
    justifyContent: 'center'
  },
  nameText: {
    color: Colors.light,
    fontSize: 20
  },
  templateImage: {
    height: 250,
    resizeMode: 'cover',
    width: '100%'
  }
});
