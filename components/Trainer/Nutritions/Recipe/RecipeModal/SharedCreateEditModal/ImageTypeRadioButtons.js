import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import Colors from '../../../../../../constants/Colors';

const ImageTypeRadioButtons = ({ changeImageType, imageId }) => {
  // console.log('asddd', imageId);
  const [selected, setSelected] = useState(imageId);

  useEffect(
    () => {
      setSelected(imageId);
    },
    [imageId]
  );

  const radio_props = [
    { label: 'Breakfast', value: 0 },
    { label: 'Lunch', value: 1 },
    { label: 'Dinner', value: 2 }
  ];

  const handleChoose = value => {
    setSelected(value);
    changeImageType(value);
  };

  return (
    <View style={styles.buttonsWrapper}>
      <RadioForm formHorizontal={true} animation={true}>
        {radio_props.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i} style={styles.buttons}>
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={i === selected}
              onPress={value => handleChoose(value)}
              borderWidth={1}
              buttonInnerColor={i == selected ? Colors.light : 'transparent'}
              buttonOuterColor={Colors.light}
              buttonSize={15}
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

export default ImageTypeRadioButtons;

ImageTypeRadioButtons.propTypes = {
  changeImageType: PropTypes.func,
  imageId: PropTypes.number
};

export const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  buttonsWrapper: {
    alignItems: 'center',
    paddingVertical: 30
  },
  labels: {
    color: Colors.light,
    fontSize: 16
  }
});
