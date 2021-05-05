import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import {
  groceryListSelector,
  importedGroceryListSelector
} from '../../../store/selectors/GrocerySelector';
import ShadowStyleHigh from '../../../constants/ShadowStyleHigh';
import {
  setImportedGroceries,
  updateImportedGroceries
} from '../../../store/actions/GroceriesActions';
import { isInImportedRecipeGroceryList } from '../../../helpers/IsInImportedRecipeGroceryList';
import { removeItemFromArrayByName } from '../../../helpers/RemoveItemFromArrayByName';
import { searchFilterListByName } from '../../../helpers/SearchFilterListByName';

const ImportGroceryListModal = ({ isImportGroceryModal, closeModal }) => {
  const dispatch = useDispatch();
  const groceries = useSelector(groceryListSelector());
  const renderData = useSelector(importedGroceryListSelector());

  const [searchText, setSearchText] = useState('');
  const [groceriesFiltered, setGroceriesFiltered] = useState(groceries);

  const handleCloseModal = () => {
    handleSearchGrocery('');
    closeModal();
  };

  const handleSearchGrocery = letter => {
    setSearchText(letter);
    const filteredList = searchFilterListByName(groceries, letter);
    setGroceriesFiltered(filteredList);
  };

  const deleteRecipeGroceryFromImportedList = grocery =>
    dispatch(updateImportedGroceries(removeItemFromArrayByName(renderData, grocery)));

  const handleAddRemove = grocery => {
    isInImportedRecipeGroceryList(renderData, grocery)
      ? deleteRecipeGroceryFromImportedList(grocery)
      : dispatch(setImportedGroceries(grocery));
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isImportGroceryModal}>
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
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
                placeholder={'Search grocery'}
                placeholderTextColor={Colors.lightGray}
                onChangeText={text => handleSearchGrocery(text)}
                value={searchText}
                selectionColor={Colors.light}
              />
            </View>

            <View style={[ShadowStyleHigh, styles.closeIconWrapper]}>
              <TouchableOpacity onPress={handleCloseModal}>
                <Icon.Fontisto name={IconName.close} size={32} color={Colors.light} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.scrollWrapper}>
            {groceriesFiltered.map((grocery, index) => (
              <TouchableOpacity
                style={styles.itemWrapper}
                key={index}
                onPress={() => handleAddRemove(grocery)}
              >
                <Text style={styles.itemNameText}>{grocery.name}</Text>
                <TouchableOpacity style={styles.iconWrapper}>
                  <View style={styles.importGroceryIcon} />
                  {isInImportedRecipeGroceryList(renderData, grocery) ? (
                    <Icon.AntDesign
                      name={IconName.closeCircle}
                      size={26}
                      color={Colors.warningColor}
                    />
                  ) : (
                    <Icon.AntDesign name={IconName.plus} size={26} color={Colors.cloudColor} />
                  )}
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ImportGroceryListModal;

ImportGroceryListModal.propTypes = {
  isImportGroceryModal: PropTypes.bool,
  closeModal: PropTypes.func
};

const styles = StyleSheet.create({
  closeIconWrapper: {
    alignItems: 'center',
    flex: 1
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center'
  },
  iconWrapper: {
    alignItems: 'flex-end',
    paddingVertical: 10,
    width: '20%'
  },
  importGroceryIcon: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 26,
    position: 'absolute',
    top: 10,
    width: 26
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
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  modalWrapper: {
    backgroundColor: Colors.backgroundAppColor,
    borderRadius: 20,
    maxHeight: '60%',
    width: '85%'
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
