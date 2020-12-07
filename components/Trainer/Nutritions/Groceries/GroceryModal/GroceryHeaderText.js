import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';
import $t from 'i18n';

import Colors from '../../../../../constants/Colors';
import IconName from '../../../../../constants/IconName';

const GroceryHeaderText = ({ closeModal }) => {
  return (
    <View style={styles.headerTrack}>
      <Icon.Fontisto
        onPress={closeModal}
        name={IconName.close}
        size={32}
        color={Colors.light}
        style={styles.closeIcon}
      />
      <View>
        <Text style={styles.headerText}>{$t('trainer.createGrocery')}</Text>
      </View>
    </View>
  );
};

export default GroceryHeaderText;

GroceryHeaderText.propTypes = {
  closeModal: PropTypes.func
};

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    right: 15
  },
  headerText: {
    color: Colors.light,
    fontSize: 40
  },
  headerTrack: {
    alignItems: 'center',
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 120,
    paddingHorizontal: 15,
    width: '100%'
  }
});
