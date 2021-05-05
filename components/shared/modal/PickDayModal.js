import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';

const PickDayModal = ({ isVisible, handlePickedDay, closeModal }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableOpacity onPress={closeModal} activeOpacity={0.9} style={styles.container}>
        <View style={styles.calendarWrapper}>
          <CalendarPicker
            onDateChange={date => handlePickedDay(date)}
            selectedDayColor={Colors.cloudColor}
            textStyle={styles.calendarTextStyle}
            startFromMonday={true}
            todayBackgroundColor="transparent"
            todayTextStyle={Colors.backgroundAppColor}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PickDayModal;

PickDayModal.propTypes = {
  isVisible: PropTypes.bool,
  handlePickedDay: PropTypes.func,
  closeModal: PropTypes.func
};

const styles = StyleSheet.create({
  calendarTextStyle: {
    color: Colors.backgroundAppColor,
    fontFamily: 'montserrat-regular'
  },
  calendarWrapper: {
    backgroundColor: Colors.lightGrayBackground,
    borderRadius: 10,
    paddingVertical: 30
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'flex-end'
  }
});
