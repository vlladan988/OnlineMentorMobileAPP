import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ModalHeader = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ModalHeader;

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

export const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
