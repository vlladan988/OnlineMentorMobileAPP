import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import IconName from '../../../constants/IconName';
import ShadowStyleLow from '../../../constants/ShadowStyleLow';
import Colors from '../../../constants/Colors';

const SharedGroceryTemplateHeader = ({ showModal, handleSearch, placeHolder, filteredList }) => {
  const [searchText, setSearchText] = useState('');

  const searchList = letter => {
    setSearchText(letter);
    handleSearch(letter);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <Icon.AntDesign
            name={IconName.search}
            size={26}
            style={styles.searchIcon}
            color={Colors.light}
          />
          <TextInput
            style={styles.inputSearchField}
            placeholder={placeHolder}
            placeholderTextColor={Colors.lightGray}
            onChangeText={text => searchList(text)}
            value={searchText}
            selectionColor={Colors.light}
          />
        </View>
        <View style={styles.addButtonWrapper}>
          <TouchableOpacity style={[ShadowStyleLow, styles.buttonWrapper]} onPress={showModal}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.countWrapper}>
        <View style={styles.countTextWrapper}>
          <Text style={styles.countText}>Count: {filteredList.length}</Text>
        </View>
      </View>
    </>
  );
};

export default SharedGroceryTemplateHeader;

SharedGroceryTemplateHeader.propTypes = {
  showModal: PropTypes.func,
  handleSearch: PropTypes.func,
  placeHolder: PropTypes.string,
  filteredList: PropTypes.array
};

const styles = StyleSheet.create({
  addButtonWrapper: {
    alignItems: 'flex-end',
    paddingRight: 5,
    width: '25%'
  },
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderBottomEndRadius: 40,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 20
  },
  countText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    paddingVertical: 2
  },
  countTextWrapper: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    marginLeft: 20,
    paddingVertical: 2
  },
  countWrapper: {
    flexDirection: 'row',
    marginVertical: 10
  },
  inputSearchField: {
    color: Colors.light,
    flex: 1,
    fontFamily: 'montserrat-italic',
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
    marginTop: 20,
    width: '75%'
  },
  text: {
    color: Colors.light,
    fontSize: 36,
    fontWeight: 'bold'
  }
});
