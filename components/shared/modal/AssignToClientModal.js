import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import SharedLinearGradientBackgroundHorizontal from '../SharedLinearGradientBackgroundHorizontal';
import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import ShadowStyleHigh from '../../../constants/ShadowStyleHigh';
import { clientListSelector } from '../../../store/selectors/ClientSelector';

const AssignToClientModal = ({ isVisible, closeModal, submit }) => {
  const [searchText, setSearchText] = useState('');
  const [clientFilteredList, setClientFilteredList] = useState([]);

  const clientList = useSelector(clientListSelector());

  useEffect(
    () => {
      setClientFilteredList(clientList);
    },
    [clientList]
  );

  const handleSearchRecipeList = letter => {
    setSearchText(letter);
    const filteredList = clientList.filter(
      item => item.full_name.toLowerCase().indexOf(letter.toLowerCase()) !== -1
    );
    setClientFilteredList(filteredList);
  };
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientModalWrapper}
        >
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <Icon.AntDesign
                name={IconName.search}
                size={26}
                style={styles.searchIcon}
                color={Colors.light}
              />
              <TextInput
                style={styles.inputSearchField}
                placeholder={'Search clients'}
                autoCorrect={false}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => handleSearchRecipeList(text)}
                value={searchText}
              />
            </View>

            <View style={[ShadowStyleHigh, styles.closeIconWrapper]}>
              <TouchableOpacity onPress={closeModal}>
                <Icon.Fontisto name={IconName.close} size={32} color={Colors.light} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.scrollWrapper}>
            {clientFilteredList.map((client, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.itemWrapper}
                key={index}
                onPress={() => submit(client)}
              >
                <Text style={styles.itemNameText}>{client.full_name}</Text>
                <TouchableOpacity style={styles.iconWrapper}>
                  <View style={styles.addIcon} />
                  <Icon.AntDesign name={IconName.plus} size={30} color={Colors.cloudColor} />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </Modal>
  );
};

export default AssignToClientModal;

AssignToClientModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  submit: PropTypes.func
};

const styles = StyleSheet.create({
  addIcon: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 26,
    position: 'absolute',
    top: 10,
    width: 26
  },
  closeIconWrapper: {
    alignItems: 'center',
    flex: 1
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center'
  },
  gradientModalWrapper: {
    borderRadius: 20,
    maxHeight: '70%',
    width: '85%'
  },
  iconWrapper: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '20%'
  },

  inputSearchField: {
    color: Colors.light,
    flex: 1,
    fontFamily: 'montserrat-italic',
    height: 40
  },
  itemNameText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    width: '80%'
  },
  itemWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  scrollWrapper: {
    padding: 20,
    width: '100%'
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  searchIcon: {
    paddingHorizontal: 10
  },
  searchWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: '80%'
  }
});
