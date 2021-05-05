import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';
import ShadowStyleHigh from '../../../constants/ShadowStyleHigh';
import IconName from '../../../constants/IconName';
import SharedLinearGradientBackgroundHorizontal from '../SharedLinearGradientBackgroundHorizontal';
import { recipeListSelector } from '../../../store/selectors/RecipeSelector';
import { searchFilterListByName } from '../../../helpers/SearchFilterListByName';
import { IsInMealRecipe } from '../../../helpers/IsInMealRecipe';

const ChooseRecipeModal = ({ isVisible, closeModal, recipes, chooseRecipe }) => {
  const [searchText, setSearchText] = useState('');
  const recipeList = useSelector(recipeListSelector());
  const [recipeListFiltered, setRecipeListFiltered] = useState(recipeList);

  const handleSearchRecipeList = letter => {
    setSearchText(letter);
    const filteredList = searchFilterListByName(recipeList, letter);
    setRecipeListFiltered(filteredList);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemWrapper}
      onPress={() => chooseRecipe(item, 'create')}
      disabled={IsInMealRecipe(recipes.daily_meal_recipes, item)}
    >
      <Text style={styles.itemNameText}>{item.name}</Text>
      <View style={styles.iconWrapper}>
        <Icon.AntDesign
          name={
            !IsInMealRecipe(recipes.daily_meal_recipes, item) ? IconName.plus : IconName.success
          }
          size={30}
          color={Colors.cloudColor}
        />
      </View>
    </TouchableOpacity>
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 110,
      offset: 110 * index,
      index
    }),
    []
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

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
                placeholder={'Search recipes'}
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
          <FlatList
            data={recipeListFiltered}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            contentContainerStyle={styles.scrollWrapper}
          />
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </Modal>
  );
};

export default ChooseRecipeModal;

ChooseRecipeModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  recipes: PropTypes.object,
  chooseRecipe: PropTypes.func
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 20,
    paddingVertical: 5
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
