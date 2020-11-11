import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';

const GuestRegisterButton = ({ goToGuestRegister }) => {
  return (
    <LinearGradient
      colors={['#3bbdb1', '#22b9c0', '#03b5d1']}
      style={styles.bottomWrapper}
    >
      <TouchableOpacity onPress={goToGuestRegister} style={styles.guestButton}>
        <Text style={styles.guestText}>{$t('auth.guestRegister')}</Text>
      </TouchableOpacity>
      <View style={styles.forward}>
        <Icon.Ionicons
          name={IconName.goForward}
          size={30}
          color={Colors.white}
        />
      </View>
    </LinearGradient>
  );
};

GuestRegisterButton.propTypes = {
  goToGuestRegister: PropTypes.func
};

const styles = StyleSheet.create({
  bottomWrapper: {
    bottom: 15,
    flexDirection: 'row',
    left: 0,
    position: 'absolute',
    right: 0
  },
  forward: {
    alignSelf: 'center',
    position: 'absolute',
    right: 20
  },
  guestButton: {
    alignItems: 'center',
    height: '100%',
    paddingVertical: 15,
    width: '100%'
  },
  guestText: {
    color: Colors.light,
    fontSize: 20
  }
});

export default GuestRegisterButton;
