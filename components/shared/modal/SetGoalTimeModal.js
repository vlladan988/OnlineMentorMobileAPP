import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';

const SetGoalTimeModal = ({
  isModalGoalTimeVisible,
  saveGoalDate,
  startDate
}) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const goalDate = selectedDate || date;
    setDate(goalDate);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalGoalTimeVisible}
    >
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
            minimumDate={new Date(startDate)}
          />
          <TouchableOpacity onPress={() => saveGoalDate(date)}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SetGoalTimeModal;

SetGoalTimeModal.propTypes = {
  isModalGoalTimeVisible: PropTypes.bool,
  saveGoalDate: PropTypes.func,
  startDate: PropTypes.string
};

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: 'center',
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
