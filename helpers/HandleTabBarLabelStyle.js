import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

const HandleTabBarLabelStyle = ({ focused, name }) => {
  return (
    <Text
      style={
        focused
          ? { color: Colors.tabIconSelected }
          : { color: Colors.tabIconDefault }
      }
    >
      {name}
    </Text>
  );
};

export default HandleTabBarLabelStyle;
