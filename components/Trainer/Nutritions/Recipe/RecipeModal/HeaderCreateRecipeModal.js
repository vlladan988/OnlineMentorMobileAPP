import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../constants/Colors';
import IconName from '../../../../../constants/IconName';

const HeaderCreateRecipeModal = ({ closeModal }) => {
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
        <Text style={styles.headerText}>{$t('trainer.createARecipe')}</Text>
      </View>
    </View>
  );
};

export default HeaderCreateRecipeModal;

HeaderCreateRecipeModal.propTypes = {
  closeModal: PropTypes.func
};

export const styles = StyleSheet.create({
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
    paddingHorizontal: 15,
    width: '100%'
  }
});
