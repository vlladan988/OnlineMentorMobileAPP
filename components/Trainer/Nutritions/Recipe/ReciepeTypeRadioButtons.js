import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import Colors from '../../../../constants/Colors';
import { getRecipeTypes } from '../../../../store/actions/RecipeActions';
import { recipeTypeSelector } from '../../../../store/selectors/RecipeSelector';
import IconName from '../../../../constants/IconName';

const ReciepeTypeRadioButtons = ({ changeMealType, mealType }) => {
  const dispatch = useDispatch();
  const recipeTypes = useSelector(recipeTypeSelector());
  const [selected, setSelected] = useState(null);
  const [customMeal, setCustomMeal] = useState('');

  const radio_props = recipeTypes;

  useEffect(() => {
    dispatch(getRecipeTypes());
  }, []);

  useEffect(
    () => {
      !mealType && setSelected(null);
    },
    [mealType]
  );

  const handleAddMealType = value => {
    radio_props.push({ label: value, value: value });
    setCustomMeal('');
    setSelected(value);
    changeMealType(value);
  };

  const handleChoose = value => {
    setSelected(value);
    changeMealType(value);
  };
  return (
    <View style={styles.buttonsWrapper}>
      <RadioForm formHorizontal={true} animation={true} style={styles.typeWrap}>
        {radio_props.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i} style={styles.buttons}>
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={obj.value === selected}
              onPress={value => handleChoose(value)}
              borderWidth={1}
              buttonInnerColor={
                obj.value == selected ? Colors.light : 'transparent'
              }
              buttonOuterColor={Colors.lightGray}
              buttonSize={15}
              buttonWrapStyle={styles.wrapStype}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={value => handleChoose(value)}
              labelStyle={styles.labels}
            />
          </RadioButton>
        ))}
        <View style={styles.addMealWrapper}>
          <TextInput
            style={styles.inputAddMeal}
            placeholder={'Add New Type'}
            placeholderTextColor={Colors.black}
            onChangeText={text => setCustomMeal(text)}
            value={customMeal}
          />
          {customMeal.length ? (
            <Icon.AntDesign
              onPress={() => handleAddMealType(customMeal)}
              name={IconName.success}
              size={22}
              color={Colors.cloudColor}
              style={styles.addMealIcon}
            />
          ) : (
            <Icon.AntDesign
              name={IconName.plus}
              size={22}
              color={Colors.cloudColor}
              style={styles.addMealIcon}
            />
          )}
        </View>
      </RadioForm>
    </View>
  );
};

export default ReciepeTypeRadioButtons;

ReciepeTypeRadioButtons.propTypes = {
  changeMealType: PropTypes.func,
  mealType: PropTypes.any
};

export const styles = StyleSheet.create({
  addMealIcon: {
    position: 'absolute',
    right: 3,
    top: 6
  },
  addMealWrapper: {
    backgroundColor: Colors.light,
    borderRadius: 15,
    marginHorizontal: 10,
    minWidth: 120,
    padding: 10
  },
  buttons: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  buttonsWrapper: {
    alignItems: 'center',
    paddingVertical: 30
  },
  inputAddMeal: {
    color: Colors.black,
    fontSize: 14,
    paddingRight: 30
  },
  labels: {
    color: Colors.lightGray,
    fontSize: 16
  },
  typeWrap: {
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  wrapStype: {
    paddingVertical: 10
  }
});
