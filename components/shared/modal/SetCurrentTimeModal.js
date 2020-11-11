import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';

const SetCurrentTimeModal = ({
  isModalCurrentTimeVisible,
  saveCurrentDate
}) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalCurrentTimeVisible}
    >
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="calendar"
            onChange={onChange}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => saveCurrentDate(date)}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SetCurrentTimeModal;

SetCurrentTimeModal.propTypes = {
  isModalCurrentTimeVisible: PropTypes.bool,
  saveCurrentDate: PropTypes.func
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 26
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '100%',
    justifyContent: 'flex-end'
  },
  modalWrapper: {
    backgroundColor: Colors.light,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingBottom: 40
  }
});
