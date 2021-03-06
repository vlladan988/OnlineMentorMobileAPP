import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { countCalories } from '../../../helpers/CountCalories';
import { handleUnitType } from '../../../helpers/HandleUnitType';
import { updateGroceries, addGroceries } from '../../../store/actions/GroceriesActions';
import { IsEditScreen } from '../../../helpers/IsEditScreen';
import GroceryAndMeasurements from '../../Trainer/Nutritions/Groceries/GroceryModal/SharedCreateEditModal/GroceryAndMeasurements';
import GroceryValues from '../../Trainer/Nutritions/Groceries/GroceryModal/SharedCreateEditModal/GroceryValues';
import SubmitButtonGroceryForm from '../../Trainer/Nutritions/Groceries/GroceryModal/SharedCreateEditModal/SubmitButtonGroceryForm';
import { requiredFieldsValidation } from '../../../helpers/RequiredFieldsValidation';
import { setShowStandardPopUp } from '../../../store/actions/ErrorActions';
import { showStandardPopUpSelector } from '../../../store/selectors/ErrorSelector';
import StandardNotificationModal from './StandardNotificationModal';

const SharedCreateEditGroceryForm = ({ closeModal, choosedGrocery, screen }) => {
  const dispatch = useDispatch();

  const isStandardModalVisible = useSelector(showStandardPopUpSelector());

  const [name, setName] = useState('');
  const [unit, setUnit] = useState(null);
  const [unitType, setUnitType] = useState(false);
  const [proteins, setProteins] = useState('');
  const [carbons, setCarbons] = useState('');
  const [fats, setFats] = useState('');
  const [calories, setCalories] = useState(null);

  useEffect(
    () => {
      if (IsEditScreen(screen)) {
        setName(choosedGrocery.name);
        setUnit(choosedGrocery.unit);
        setUnitType(choosedGrocery.unit_type);
        setProteins(String(choosedGrocery.proteins));
        setCarbons(String(choosedGrocery.carbons));
        setFats(String(choosedGrocery.fats));
        setCalories(choosedGrocery.calories);
      }
    },
    [choosedGrocery]
  );

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

  const handleSubmitForm = () => {
    if (requiredFieldsValidation(new Array(name))) {
      dispatch(
        setShowStandardPopUp({
          message: 'Name field is Required !',
          warningIcon: true
        })
      );
    } else {
      IsEditScreen(screen) ? handleUpdateGrocery() : handleAddGrocery();
    }
  };

  const handleAddGrocery = () => {
    closeModal();
    dispatch(
      addGroceries({
        name,
        unit,
        unitType,
        proteins,
        carbons,
        fats,
        calories
      })
    );
  };

  const handleUpdateGrocery = () => {
    closeModal();
    dispatch(
      updateGroceries({
        id: choosedGrocery.id,
        name,
        unit,
        unitType,
        proteins,
        carbons,
        fats,
        calories
      })
    );
  };

  return (
    <View style={styles.container}>
      <StandardNotificationModal visible={isStandardModalVisible} />
      <GroceryAndMeasurements
        name={name}
        setName={setName}
        unitType={unitType}
        unit={unit}
        setUnit={setUnit}
        choosedGrocery={choosedGrocery}
      />
      <GroceryValues
        proteins={proteins}
        setProteins={setProteins}
        carbons={carbons}
        setCarbons={setCarbons}
        fats={fats}
        setFats={setFats}
        calories={calories}
      />
      <SubmitButtonGroceryForm submitForm={handleSubmitForm} screen={screen} />
    </View>
  );
};

export default SharedCreateEditGroceryForm;

SharedCreateEditGroceryForm.propTypes = {
  closeModal: PropTypes.func,
  choosedGrocery: PropTypes.any,
  screen: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  }
});
