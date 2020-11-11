import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';

const LoginBottom = ({ goToRegister }) => {
  return (
    <LinearGradient
      colors={['#3bbdb1', '#22b9c0', '#03b5d1']}
      style={styles.bottomWrapper}
    >
      <TouchableOpacity onPress={goToRegister} style={styles.registerButton}>
        <Text style={styles.registerText}>{$t('auth.register')}</Text>
      </TouchableOpacity>
      <View style={styles.forward}>
        <Icon.Ionicons
          name={IconName.goForward}
          size={30}
          color={Colors.light}
        />
      </View>
    </LinearGradient>
  );
};

LoginBottom.propTypes = {
  goToRegister: PropTypes.func
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
  registerButton: {
    alignItems: 'center',
    height: '100%',
    paddingVertical: 15,
    width: '100%'
  },
  registerText: {
    color: Colors.light,
    fontSize: 20
  }
});

export default LoginBottom;
