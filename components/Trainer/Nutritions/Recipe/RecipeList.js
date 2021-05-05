/* eslint-disable indent */
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import IconName from '../../../../constants/IconName';
import dinner from '../../../../assets/images/dinner.jpg';
import lunch from '../../../../assets/images/lunch.png';
import breakfast from '../../../../assets/images/meal.jpg';
import Colors from '../../../../constants/Colors';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import { sumRecipeGrocery } from '../../../../helpers/SumRecipeGrocery';
import { isDefaultImage } from '../../../../helpers/IsDefaultImage';
import { deleteRecipe } from '../../../../store/actions/RecipeActions';
import SharedLinearGradientBackgroundHorizontal from '../../../shared/SharedLinearGradientBackgroundHorizontal';
import { showDeletePopUpSelector } from '../../../../store/selectors/ErrorSelector';
import { setShowDeletePopUp } from '../../../../store/actions/ErrorActions';
import { recipePercentValue } from '../../../../helpers/RecipePercentValue';
import SharedDeleteModal from '../../../shared/modal/SharedDeleteModal';
import ShadowStyleHigh from '../../../../constants/ShadowStyleHigh';
import SharedAnimatedDropdown from '../../../../components/shared/SharedAnimatedDropdown';

const RecipeList = ({ handleEditRecipeModalVisible, filteredList, showRecipeModal }) => {
  const dispatch = useDispatch();

  const optionValue = ['Edit', 'Delete'];

  const [choosedItem, setChoosedItem] = useState([]);
  const isDeleteModalVisible = useSelector(showDeletePopUpSelector());

  let image = [breakfast, lunch, dinner];

  const handleDropdownPicker = (value, item) => {
    switch (value) {
      case 'edit':
        handleEditRecipeModalVisible(item);
        setChoosedItem([]);
        break;
      case 'delete':
        showDeleteModal();
        break;
    }
  };

  const showDeleteModal = () => dispatch(setShowDeletePopUp('Delete Recipe ?'));

  const handleDeleteRecipe = () => dispatch(deleteRecipe(choosedItem.id));

  const handleChoosedItem = item => {
    if (item.id !== choosedItem.id) setChoosedItem(item);
    else choosedItem.id ? setChoosedItem([]) : setChoosedItem(item);
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 215,
      offset: 215 * index,
      index
    }),
    []
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <SharedDeleteModal isVisible={isDeleteModalVisible} handleDelete={handleDeleteRecipe} />
      <TouchableOpacity
        style={ShadowStyleLow}
        activeOpacity={0.7}
        onPress={() => showRecipeModal(item)}
      >
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientWrapper}
        >
          <View style={styles.itemWrapper}>
            <View style={styles.sectionItem}>
              <Text style={styles.itemNameText}>{item.name}</Text>
              <View style={styles.groceryValueWrapper}>
                <Text style={styles.gramsText}>
                  {sumRecipeGrocery(item.recipe_groceries).proteins}g{' '}
                </Text>
                <Text style={styles.percentText}>
                  (
                  {recipePercentValue(
                    sumRecipeGrocery(item.recipe_groceries),
                    sumRecipeGrocery(item.recipe_groceries).proteins
                  )}
                  %)
                </Text>
              </View>
              <View style={styles.groceryValueWrapper}>
                <Text style={styles.gramsText}>
                  {sumRecipeGrocery(item.recipe_groceries).carbons}g{' '}
                </Text>
                <Text style={styles.percentText}>
                  (
                  {recipePercentValue(
                    sumRecipeGrocery(item.recipe_groceries),
                    sumRecipeGrocery(item.recipe_groceries).carbons
                  )}
                  %)
                </Text>
              </View>
              <View style={styles.groceryValueWrapper}>
                <Text style={styles.gramsText}>
                  {sumRecipeGrocery(item.recipe_groceries).fats}g{' '}
                </Text>
                <Text style={styles.percentText}>
                  (
                  {recipePercentValue(
                    sumRecipeGrocery(item.recipe_groceries),
                    sumRecipeGrocery(item.recipe_groceries).fats
                  )}
                  %)
                </Text>
              </View>
              <View style={styles.groceryValueWrapper}>
                <Text style={styles.calorieText}>
                  {sumRecipeGrocery(item.recipe_groceries).calories}
                </Text>
                <Text style={styles.percentText}> Calories </Text>
              </View>
            </View>
            <View style={[ShadowStyleHigh, styles.imgWrapper]}>
              <Image
                source={
                  isDefaultImage(item.recipe_image_url)
                    ? image[item.recipe_image_url]
                    : { uri: item.recipe_image_url }
                }
                style={styles.mealImage}
              />
              <View style={styles.dotsIconWrapper}>
                {choosedItem.id === item.id && (
                  <SharedAnimatedDropdown
                    menuItem={optionValue}
                    editItem={() => handleDropdownPicker('edit', item)}
                    deleteItem={() => handleDropdownPicker('delete', item)}
                  />
                )}
                <TouchableOpacity onPress={() => handleChoosedItem(item)}>
                  <Icon.MaterialCommunityIcons
                    name={IconName.dotsIcon}
                    color={Colors.light}
                    size={30}
                    style={styles.optionIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SharedLinearGradientBackgroundHorizontal>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={filteredList}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

export default RecipeList;

RecipeList.propTypes = {
  handleEditRecipeModalVisible: PropTypes.func,
  showRecipeModal: PropTypes.func,
  filteredList: PropTypes.array
};

const styles = StyleSheet.create({
  calorieText: {
    color: Colors.cloudColor,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  container: {
    marginVertical: 5
  },
  dotsIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  flatListStyle: {
    paddingTop: 15
  },
  gradientWrapper: {
    borderRadius: 10,
    padding: 15
  },
  gramsText: {
    color: Colors.oker,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  groceryValueWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5
  },
  imgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  itemNameText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 22,
    paddingBottom: 20
  },
  itemWrapper: {
    flexDirection: 'row'
  },
  mealImage: {
    alignSelf: 'center',
    borderColor: Colors.light,
    borderRadius: 75,
    borderWidth: 1,
    height: 140,
    resizeMode: 'cover',
    width: 140
  },
  optionIcon: {
    padding: 5
  },
  percentText: {
    color: Colors.lightGrayL,
    fontFamily: 'montserrat-regular',
    fontSize: 17
  },
  sectionItem: {
    width: '50%'
  }
});
