import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';

import IconName from '../../../constants/IconName';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Icon.Fontisto
        name={IconName.cloud}
        size={150}
        color={Colors.cloudColor}
      />
      <Text style={styles.headerText}>
        {$t('auth.tigsAcademy').toUpperCase()}
      </Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Layout.window.headerHeight,
    justifyContent: 'center'
  },
  headerText: {
    color: Colors.lightGray,
    fontSize: 18
  }
});
