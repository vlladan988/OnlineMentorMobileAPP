/* eslint-disable indent */
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../../../constants/Colors';
import breakfast from '../../../../assets/images/breakfast.jpg';
import dinner from '../../../../assets/images/dinner.jpg';
import lunch from '../../../../assets/images/lunch.png';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import { showDeletePopUpSelector } from '../../../../store/selectors/ErrorSelector';
import { loaderSelector } from '../../../../store/selectors/LoaderSelector';
import SharedDeleteModal from '../../../shared/modal/SharedDeleteModal';
import SharedLinearGradientBackgroundHorizontal from '../../../shared/SharedLinearGradientBackgroundHorizontal';
import { sumRecipeGrocery } from '../../../../helpers/SumRecipeGrocery';
import IconName from '../../../../constants/IconName';
import { recipePercentValue } from '../../../../helpers/RecipePercentValue';
import SharedAnimatedDropdown from '../../../shared/SharedAnimatedDropdown';
import { isDefaultImage } from '../../../../helpers/IsDefaultImage';

const DailyMealList = ({
  showCreateEditModal,
  recipes,
  showAddMealBottomSheet,
  handleEditDailyRecipeModalVisible,
  handleDeleteDailyRecipe
}) => {
  const [choosedItem, setChoosedItem] = useState([]);

  const optionValue = ['Edit', 'Delete'];
  let image = [breakfast, lunch, dinner];

  const isDeleteModalVisible = useSelector(showDeletePopUpSelector());
  const isLoader = useSelector(loaderSelector());

  const handleDropdownPicker = (value, item) => {
    switch (value) {
      case 'edit':
        handleEditDailyRecipeModalVisible(item, value);
        break;
      case 'delete':
        handleDeleteDailyRecipe(item);
        break;
    }
    setChoosedItem([]);
  };

  const handleChoosedItem = item => {
    if (item.id !== choosedItem.id) setChoosedItem(item);
    else choosedItem.id ? setChoosedItem([]) : setChoosedItem(item);
  };

  return (
    <>
      {recipes && recipes.daily_meal_recipes.length ? (
        <ScrollView style={styles.container}>
          <SharedDeleteModal isVisible={isDeleteModalVisible} />
          {recipes.daily_meal_recipes.map((recipe, index) => (
            <TouchableOpacity
              key={index}
              style={ShadowStyleLow}
              activeOpacity={0.7}
              onPress={showCreateEditModal}
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
                    <Text style={styles.itemNameText}>{recipe.name}</Text>
                    <View style={styles.groceryValueWrapper}>
                      <Text style={styles.gramsText}>
                        {sumRecipeGrocery(recipe.daily_recipe_groceries).proteins}g
                      </Text>
                      <Text style={styles.percentText}>
                        (
                        {recipePercentValue(
                          sumRecipeGrocery(recipe.daily_recipe_groceries),
                          sumRecipeGrocery(recipe.daily_recipe_groceries).proteins
                        )}
                        %)
                      </Text>
                    </View>
                    <View style={styles.groceryValueWrapper}>
                      <Text style={styles.gramsText}>
                        {sumRecipeGrocery(recipe.daily_recipe_groceries).carbons}g{' '}
                      </Text>
                      <Text style={styles.percentText}>
                        (
                        {recipePercentValue(
                          sumRecipeGrocery(recipe.daily_recipe_groceries),
                          sumRecipeGrocery(recipe.daily_recipe_groceries).carbons
                        )}
                        %)
                      </Text>
                    </View>
                    <View style={styles.groceryValueWrapper}>
                      <Text style={styles.gramsText}>
                        {sumRecipeGrocery(recipe.daily_recipe_groceries).fats}g{' '}
                      </Text>
                      <Text style={styles.percentText}>
                        (
                        {recipePercentValue(
                          sumRecipeGrocery(recipe.daily_recipe_groceries),
                          sumRecipeGrocery(recipe.daily_recipe_groceries).fats
                        )}
                        %)
                      </Text>
                    </View>
                    <View style={styles.groceryValueWrapper}>
                      <Text style={styles.calorieText}>
                        {sumRecipeGrocery(recipe.daily_recipe_groceries).calories}{' '}
                      </Text>
                      <Text style={styles.percentText}> Calories </Text>
                    </View>
                  </View>
                  <View style={[ShadowStyleLow, styles.imgWrapper]}>
                    <Image
                      source={
                        isDefaultImage(recipe.recipe_image_url)
                          ? image[recipe.recipe_image_url]
                          : { uri: recipe.recipe_image_url }
                      }
                      style={styles.mealImage}
                    />
                    <View style={styles.dotsIconWrapper}>
                      {choosedItem.id === recipe.id && (
                        <SharedAnimatedDropdown
                          menuItem={optionValue}
                          editItem={() => handleDropdownPicker('edit', recipe)}
                          deleteItem={() => handleDropdownPicker('delete', recipe)}
                        />
                      )}
                      <TouchableOpacity onPress={() => handleChoosedItem(recipe)}>
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
          ))}
          <View style={styles.addButtonWrapper}>
            <TouchableOpacity
              style={[ShadowStyleLow, styles.buttonWrapper]}
              onPress={showCreateEditModal}
              activeOpacity={0.7}
            >
              <Text style={styles.text}>Add Recipe</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : recipes ? (
        <View style={styles.addButtonWrapper}>
          <TouchableOpacity
            style={[ShadowStyleLow, styles.buttonWrapper]}
            onPress={showCreateEditModal}
            activeOpacity={0.7}
          >
            <Text style={styles.text}>Add Recipe</Text>
          </TouchableOpacity>
        </View>
      ) : (
        !isLoader && (
          <View style={styles.noMealListWrapper}>
            <Text style={styles.noMealList}>Click on </Text>
            <Icon.AntDesign
              name={IconName.plus}
              size={30}
              color={Colors.lightOker}
              style={styles.noResultIcon}
              onPress={showAddMealBottomSheet}
            />
            <Text style={styles.noMealList}> to create first meal.</Text>
          </View>
        )
      )}
    </>
  );
};

export default DailyMealList;

DailyMealList.propTypes = {
  showCreateEditModal: PropTypes.func,
  recipes: PropTypes.oneOfType([null, PropTypes.array]),
  showAddMealBottomSheet: PropTypes.func,
  handleEditDailyRecipeModalVisible: PropTypes.func,
  handleDeleteDailyRecipe: PropTypes.func
};

const styles = StyleSheet.create({
  addButtonWrapper: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 40
  },
  buttonWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.cloudColor,
    borderRadius: 50,
    justifyContent: 'center'
  },
  calorieText: {
    color: Colors.cloudColor,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  container: {
    margin: 5
  },
  dotsIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  gradientWrapper: {
    borderRadius: 10,
    marginVertical: 5,
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
  noMealList: {
    color: Colors.light,
    fontFamily: 'montserrat-italic',
    fontSize: 20
  },
  noMealListWrapper: {
    alignItems: 'center',
    paddingTop: 50
  },
  noResultIcon: {
    paddingVertical: 25
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
  },
  skeletonChild: {
    height: 70
  },
  skeletonViewWrapper: {
    padding: 5,
    width: '100%'
  },
  text: {
    color: Colors.light,
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
