import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../constants/Colors';
import IconName from '../../../../../constants/IconName';

const HeaderCreateRecipeModal = ({ closeModal }) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>{$t('trainer.createARecipe')}</Text>
      <Icon.Fontisto
        onPress={closeModal}
        name={IconName.close}
        size={26}
        color={Colors.light}
        style={styles.iconClose}
      />
    </View>
  );
};

export default HeaderCreateRecipeModal;

HeaderCreateRecipeModal.propTypes = {
  closeModal: PropTypes.func
};

export const styles = StyleSheet.create({
  headerText: {
    color: Colors.light,
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    paddingVertical: 20
  },
  iconClose: {
    position: 'absolute',
    right: 20,
    top: 10
  }
});
