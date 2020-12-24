import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import { useSelector, useDispatch } from 'react-redux';
import { recipeTypeSelector } from '../../../store/selectors/RecipeSelector';
import { setMealTypeModal } from '../../../store/actions/RecipeActions';

const SearchByMealTypeModal = ({
  isModalVisible,
  handleSearchRecipeByMealType
}) => {
  const dispatch = useDispatch();
  const mealTypeList = useSelector(recipeTypeSelector());

  const handleCloseModal = () => {
    dispatch(setMealTypeModal());
  };

  const searchByType = mealType => {
    handleSearchRecipeByMealType(mealType);
    handleCloseModal();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.modalWrapper}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Choose By Type</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Icon.Fontisto
                name={IconName.close}
                size={32}
                color={Colors.light}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollWrapper}>
            {mealTypeList.map((mealType, index) => (
              <TouchableOpacity
                style={styles.itemWrapper}
                onPress={() => searchByType(mealType.value)}
                key={index}
              >
                <Text style={styles.itemNameText}>{mealType.value}</Text>
                <View style={styles.iconWrapper}>
                  <View style={styles.importGroceryIcon} />
                  <Icon.AntDesign
                    name={IconName.success}
                    size={30}
                    color={Colors.oker}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SearchByMealTypeModal;

SearchByMealTypeModal.propTypes = {
  isModalVisible: PropTypes.bool,
  handleSearchRecipeByMealType: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center'
  },
  headerText: {
    color: Colors.light,
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.borderLine,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  iconWrapper: {
    alignItems: 'center',
    paddingVertical: 7
  },
  importGroceryIcon: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 26,
    position: 'absolute',
    top: 7,
    width: 26
  },
  itemNameText: {
    color: Colors.light,
    fontSize: 20
  },
  itemWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalWrapper: {
    backgroundColor: Colors.backgroundAppColor,
    borderRadius: 20,
    maxHeight: '70%',
    width: '85%'
  },
  scrollWrapper: {
    padding: 20,
    width: '100%'
  }
});
