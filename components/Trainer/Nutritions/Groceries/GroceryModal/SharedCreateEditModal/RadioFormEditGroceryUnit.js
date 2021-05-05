import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import Colors from '../../../../../../constants/Colors';

const RadioFormEditGroceryUnit = ({ setSelectedUnit, initValue }) => {
  const [selected, setSelected] = useState(initValue);

  useEffect(() => {
    handleChoose(initValue);
  }, []);

  const radio_props = [
    { label: 'g', value: 'g' },
    { label: 'ml', value: 'ml' },
    { label: 'Glass', value: 'Glass' },
    { label: 'Handful', value: 'Handful' },
    { label: 'Pinch', value: 'Pinch' }
  ];

  const handleChoose = value => {
    setSelected(value);
    setSelectedUnit(value);
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
              buttonInnerColor={obj.value == selected ? Colors.light : 'transparent'}
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
      </RadioForm>
    </View>
  );
};

export default RadioFormEditGroceryUnit;

RadioFormEditGroceryUnit.propTypes = {
  setSelectedUnit: PropTypes.func,
  initValue: PropTypes.oneOfType([PropTypes.string, null])
};

export const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  buttonsWrapper: {
    alignItems: 'center',
    paddingTop: 30
  },
  labels: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-regular',
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
