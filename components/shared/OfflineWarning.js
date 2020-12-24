import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import $t from 'i18n';

const OfflineWarning = () => {
  const networkState = useNetInfo();

  return (
    !networkState.isConnected && (
      <View style={styles.container}>
        <Text>{$t('common.offline')}</Text>
      </View>
    )
  );
};

export default OfflineWarning;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
