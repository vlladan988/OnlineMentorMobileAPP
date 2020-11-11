import React from 'react';
import * as Icon from '@expo/vector-icons';
import Colors from '../constants/Colors';

export const addHeaderLeftNavigator = navigation => {
  const styles = {
    menuIcon: {
      marginLeft: 10,
      marginTop: 10
    }
  };

  return {
    headerLeft: (
      <Icon.Ionicons
        name="ios-menu"
        size={24}
        color={Colors.white}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={styles.menuIcon}
      />
    )
  };
};
