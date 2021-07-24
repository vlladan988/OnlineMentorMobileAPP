import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import IconName from '../../../constants/IconName';
import Colors from '../../../constants/Colors';
import Font from '../../../constants/Font';

const SharedHeaderWithBackButton = ({ goBack, headerText }) => {
  return (
    <View style={styles.goBackWrapper}>
      <Icon.Ionicons
        onPress={goBack}
        name={IconName.goBack}
        size={26}
        color={Colors.light}
        style={styles.icon}
      />
      <Text style={styles.headerText}>{headerText}</Text>
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
    paddingHorizontal: 10
  },
  headerText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: Font.large
  },
  icon: {
    paddingRight: 10
  }
});
