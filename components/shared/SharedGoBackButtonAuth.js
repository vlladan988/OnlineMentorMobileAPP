import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import NavigationService from '../../services/NavigationService';
import * as Icon from '@expo/vector-icons';

import IconName from '../../constants/IconName';
import Colors from '../../constants/Colors';

const SharedGoBackButtonAuth = () => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.goBack()}
      style={styles.goBack}
    >
      <Icon.Ionicons name={IconName.goBack} size={30} color={Colors.light} />
    </TouchableOpacity>
  );
};

export default SharedGoBackButtonAuth;

const styles = StyleSheet.create({
  goBack: {
    left: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 50
  }
});
