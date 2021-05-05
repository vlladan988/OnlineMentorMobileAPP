import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

const HandleTabBarLabelStyle = ({ focused, name }) => {
  return (
    <Text
      style={
        focused
          ? [styles.text, { color: Colors.tabIconSelected }]
          : [styles.text, { color: Colors.tabIconDefault }]
      }
    >
      {name}
    </Text>
  );
};

export default HandleTabBarLabelStyle;

HandleTabBarLabelStyle.propTypes = {
  focused: PropTypes.bool,
  name: PropTypes.string
};

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'montserrat-regular'
  }
});
