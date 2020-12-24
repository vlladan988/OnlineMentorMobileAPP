import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../../../constants/Colors';

const ModalFooter = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ModalFooter;

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    width: '100%'
  }
});
