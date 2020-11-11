import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import $t from 'i18n';

import Colors from '../../../constants/Colors';

const GuestMessage = () => {
  return (
    <View style={styles.bottomWrapper}>
      <Text style={styles.messageTextFreeTrial}>{$t('auth.trialText')}</Text>
      <Text style={styles.messageText}>{$t('auth.guestRegisterMessage')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomWrapper: {
    alignItems: 'center',
    bottom: 35,
    left: 20,
    paddingVertical: 15,
    position: 'absolute',
    right: 20
  },
  messageText: {
    color: Colors.lightText,
    fontSize: 20,
    textAlign: 'center'
  },
  messageTextFreeTrial: {
    color: Colors.cloudColor,
    fontSize: 24,
    textAlign: 'center'
  }
});

export default GuestMessage;
