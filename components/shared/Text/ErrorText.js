import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../../constants/Colors';
import Font from '../../../constants/Font';

const ErrorText = props => {
  return <Text style={styles.text}>{props.error ? props.message : ''}</Text>;
};

ErrorText.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: Colors.warningColor,
    fontFamily: 'montserrat-italic',
    fontSize: Font.small
  }
});

export default ErrorText;
