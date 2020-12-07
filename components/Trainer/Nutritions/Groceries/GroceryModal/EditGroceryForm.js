import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../../../../constants/Colors';
import { countCalories } from '../../../../../helpers/CountCalories';
import { handleUnitType } from '../../../../../helpers/HandleUnitType';
import { useDispatch } from 'react-redux';
import { updateGroceries } from '../../../../../store/actions/GroceriesActions';
import SubmitButtonEditGrocery from './SubmitButtonEditGrocery';
import RadioFormEditGroceryUnit from './RadioFormEditGroceryUnit';

const EditGroceryForm = ({ closeModal, choosedGrocery }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(choosedGrocery.name);
  const [unit, setUnit] = useState(choosedGrocery.unit);
  const [unitType, setUnitType] = useState(choosedGrocery.unit_type);
  const [proteins, setProteins] = useState(choosedGrocery.proteins);
  const [carbons, setCarbons] = useState(choosedGrocery.carbons);
  const [fats, setFats] = useState(choosedGrocery.fats);
  const [calories, setCalories] = useState(choosedGrocery.calories);
  const [description, setDescription] = useState(choosedGrocery.description);

  useEffect(
    () => {
      setCalories(countCalories(proteins, carbons, fats));
    },
    [proteins, carbons, fats]
  );

  useEffect(
    () => {
      setUnitType(handleUnitType(unit));
    },
    [unit]
  );

  const handleEditGrocery = () => {
    dispatch(
      updateGroceries({
        id: choosedGrocery.id,
        name,
        unit,
        unitType,
        proteins,
        carbons,
        fats,
        calories,
        description
      })
    );
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={[styles.inputText, styles.nameDescInputText]}>
          {' '}
          {$t('common.name')}*
        </Text>
        <TextInput
          value={name}
          placeholder={'Chicken Breast'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.measurementWrapper}>
          <Text style={styles.inputText}>{$t('common.measUnit')}</Text>
          {unitType &&
            unit && <Text style={styles.unitTypeText}>{unitType}</Text>}
        </View>
        <RadioFormEditGroceryUnit
          setSelectedUnit={selectedUnit => setUnit(selectedUnit)}
          initValue={choosedGrocery.unit}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>{$t('common.groceryVal')}</Text>
        <View style={styles.groceryValueWrapper}>
          <View style={styles.groceryInputWrapper}>
            <TextInput
              value={String(proteins)}
              placeholder={'0'}
              placeholderTextColor={Colors.lightGray}
              onChangeText={text => setProteins(text)}
              style={[styles.inputGroceryValue, styles.proteinColorStyle]}
            />
            <Text style={styles.groceriesNameText}>
              {$t('common.proteins')}
            </Text>
          </View>
          <View style={styles.groceryInputWrapper}>
            <TextInput
              value={String(carbons)}
              placeholder={'0'}
              placeholderTextColor={Colors.lightGray}
              onChangeText={text => setCarbons(text)}
              style={[styles.inputGroceryValue, styles.carbonColorStyle]}
            />
            <Text style={styles.groceriesNameText}>
              {$t('common.carbonUh')}
            </Text>
          </View>
          <View style={styles.groceryInputWrapper}>
            <TextInput
              value={String(fats)}
              placeholder={'0'}
              placeholderTextColor={Colors.lightGray}
              onChangeText={text => setFats(text)}
              style={[styles.inputGroceryValue, styles.fatColorStyle]}
            />
            <Text style={styles.groceriesNameText}>{$t('common.fats')}</Text>
          </View>
        </View>
        <View style={styles.caloriesWrapper}>
          <Text style={styles.caloriesValue}>{calories}</Text>
        </View>
        <Text style={styles.groceriesNameText}>{$t('common.calories')}</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={[styles.inputText, styles.nameDescInputText]}>
          {$t('common.desc')}*
        </Text>
        <TextInput
          value={description}
          numberOfLines={5}
          multiline={true}
          placeholder={'Type description...'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => setDescription(text)}
          style={styles.input}
        />
      </View>
      <SubmitButtonEditGrocery submitForm={handleEditGrocery} />
    </View>
  );
};

export default EditGroceryForm;

EditGroceryForm.propTypes = {
  closeModal: PropTypes.func,
  choosedGrocery: PropTypes.func
};

const styles = StyleSheet.create({
  caloriesValue: {
    color: Colors.warningColor,
    fontSize: 24
  },
  caloriesWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'flex-end',
    marginHorizontal: 30
  },
  carbonColorStyle: {
    color: Colors.mainYellow
  },
  container: {
    marginVertical: 30
  },
  fatColorStyle: {
    color: Colors.oker
  },
  groceriesNameText: {
    color: Colors.light,
    textAlign: 'center'
  },
  groceryInputWrapper: {
    width: '30%'
  },
  groceryValueWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  input: {
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.light,
    fontSize: 16,
    height: 50,
    paddingLeft: 20
  },
  inputGroceryValue: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    fontSize: 24,
    height: 50,
    textAlign: 'center'
  },
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputWrapper: {
    padding: 20
  },
  measurementWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameDescInputText: {
    paddingBottom: 10,
    paddingLeft: 10
  },
  proteinColorStyle: {
    color: Colors.cloudColor
  },
  unitTypeText: {
    color: Colors.warningColor,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
