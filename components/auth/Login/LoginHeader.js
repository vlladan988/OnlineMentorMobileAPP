import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';
import PropTypes from 'prop-types';

import IconName from '../../../constants/IconName';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { IsClientScreen } from '../../../helpers/IsClientScreen';

const LoginHeader = ({ screen }) => {
  return (
    <View style={styles.container}>
      {IsClientScreen(screen) ? (
        <>
          <Icon.FontAwesome5 name={IconName.userAdd} size={100} color={Colors.cloudColor} />
          <Text style={styles.headerText}>{$t('auth.addClient').toUpperCase()}</Text>
        </>
      ) : (
        <>
          <Icon.Fontisto name={IconName.cloud} size={150} color={Colors.cloudColor} />
          <Text style={styles.headerText}>{$t('auth.tigsAcademy').toUpperCase()}</Text>
        </>
      )}
    </View>
  );
};

export default LoginHeader;

LoginHeader.propTypes = {
  screen: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Layout.window.headerHeight,
    justifyContent: 'center'
  },
  headerText: {
    color: Colors.lightGray,
    fontFamily: 'montserrat-bold',
    fontSize: 18,
    paddingTop: 15
  }
});
