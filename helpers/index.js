import React from 'react';
import * as Icon from '@expo/vector-icons';
import Colors from '../constants/Colors';
import IconName from '../constants/IconName';

export const addHeaderLeftNavigator = navigation => {
  const styles = {
    backIcon: {
      marginLeft: 10,
      marginTop: 10,
      paddingRight: 20
    }
  };

  return {
    headerLeft: (
      <Icon.Ionicons
        name={IconName.goBack}
        size={24}
        color={Colors.white}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backIcon}
      />
    )
  };
};

export const addHeaderRightNavigator = navigation => {
  const styles = {
    menuIcon: {
      marginRight: 10,
      marginTop: 10,
      paddingLeft: 20
    }
  };

  return {
    headerRight: (
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
