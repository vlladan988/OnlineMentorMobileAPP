import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import IconName from '../../../constants/IconName';
import Colors from '../../../constants/Colors';
import ShadowStyleHigh from '../../../constants/ShadowStyleHigh';

const SharedHeaderWithBackButton = ({ goBack, headerText }) => {
  return (
    <View style={ShadowStyleHigh}>
      <View style={styles.goBackWrapper}>
        <Icon.Ionicons
          onPress={goBack}
          name={IconName.goBack}
          size={40}
          color={Colors.light}
          style={styles.icon}
        />
        <Text style={styles.headerText}>{headerText}</Text>
        <Icon.FontAwesome5
          name={IconName.nutritions}
          size={36}
          color={Colors.light}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default SharedHeaderWithBackButton;

SharedHeaderWithBackButton.propTypes = {
  goBack: PropTypes.func,
  headerText: PropTypes.string
};

const styles = StyleSheet.create({
  goBackWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.lightBackgroundAppColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  headerText: {
    color: Colors.light,
    fontSize: 30,
    fontWeight: 'bold'
  },
  icon: {
    paddingHorizontal: 20
  }
});
