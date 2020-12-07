import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';
import $t from 'i18n';

import Colors from '../../../../constants/Colors';
import ShadowStyleHigh from '../../../../constants/ShadowStyleHigh';
import IconName from '../../../../constants/IconName';

const HeaderGroceries = ({ showModal, handleSearchGrocery }) => {
  const [searchText, setSearchText] = useState('');

  const searchGrocery = letter => {
    setSearchText(letter);
    handleSearchGrocery(letter);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.text, ShadowStyleHigh]}>
          {$t('trainer.groceryList')}
        </Text>
        <TouchableOpacity
          style={[ShadowStyleHigh, styles.buttonWrapper]}
          onPress={showModal}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchWrapper}>
        <Icon.AntDesign
          name={IconName.search}
          size={26}
          style={styles.searchIcon}
          color={Colors.light}
        />
        <TextInput
          style={styles.inputSearchField}
          placeholder={'Search receipt'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => searchGrocery(text)}
          value={searchText}
        />
      </View>
    </View>
  );
};

export default HeaderGroceries;

HeaderGroceries.propTypes = {
  showModal: PropTypes.func,
  handleSearchGrocery: PropTypes.func
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderBottomEndRadius: 40,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    height: 70,
    justifyContent: 'center',
    width: 70
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  inputSearchField: {
    color: Colors.light,
    flex: 1,
    height: 40
  },
  searchIcon: {
    paddingHorizontal: 10
  },
  searchWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  text: {
    color: Colors.light,
    fontSize: 36,
    fontWeight: 'bold'
  }
});
