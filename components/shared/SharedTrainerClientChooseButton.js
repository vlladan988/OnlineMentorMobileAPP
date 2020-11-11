import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../constants/Colors';

const SharedTrainerClientChooseButton = ({ userType }) => {
  const [selected, setSelected] = useState(0);
  const radio_props = [
    { label: $t('client.client'), value: 0 },
    { label: $t('trainer.trainer'), value: 1 }
  ];

  const handleChoose = value => {
    setSelected(value);
    userType(value);
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
              buttonInnerColor={
                i == selected ? Colors.cloudColor : 'transparent'
              }
              buttonOuterColor={Colors.cloudColor}
              buttonSize={20}
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

SharedTrainerClientChooseButton.propTypes = {
  userType: PropTypes.func,
  screen: PropTypes.string
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  buttonsWrapper: {
    alignItems: 'center',
    paddingVertical: 30
  },
  labels: {
    color: Colors.cloudColor,
    fontSize: 16
  }
});

export default SharedTrainerClientChooseButton;
