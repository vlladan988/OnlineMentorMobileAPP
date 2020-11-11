import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import $t from 'i18n';

import Colors from '../../../constants/Colors';

const ClientMessageRegister = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{$t('client.registerMessage')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50
  },
  messageText: {
    color: Colors.light,
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center'
  }
});

export default ClientMessageRegister;
