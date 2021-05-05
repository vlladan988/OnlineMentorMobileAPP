import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import breakfast from '../../assets/images/breakfast.jpg';
import dinner from '../../assets/images/dinner.jpg';
import lunch from '../../assets/images/lunch.png';
import ShadowStyleLow from '../../constants/ShadowStyleLow';
import SharedLinearGradientBackgroundHorizontal from './SharedLinearGradientBackgroundHorizontal';
import Colors from '../../constants/Colors';
import { sumRecipeGrocery } from '../../helpers/SumRecipeGrocery';
import { recipePercentValue } from '../../helpers/RecipePercentValue';
import { isDefaultImage } from '../../helpers/IsDefaultImage';
import IconName from '../../constants/IconName';

const SharedClientDailyRecipes = ({ recipes, showRecipeModal }) => {
  let image = [breakfast, lunch, dinner];

  return (
    recipes &&
    recipes.daily_meal_recipes.length && (
      <ScrollView style={styles.container}>
        {recipes.daily_meal_recipes.map((recipe, index) => (
          <TouchableOpacity
            key={index}
            style={ShadowStyleLow}
            activeOpacity={0.7}
            onPress={() => showRecipeModal(recipe)}
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
                  <Text style={styles.itemNameText}>{recipe && recipe.name}</Text>
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
                  <View style={styles.eyeIconWrapper}>
                    <Icon.AntDesign
                      name={IconName.right}
                      color={Colors.light}
                      size={24}
                      style={styles.optionIcon}
                    />
                  </View>
                </View>
              </View>
            </SharedLinearGradientBackgroundHorizontal>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  );
};

export default SharedClientDailyRecipes;

SharedClientDailyRecipes.propTypes = {
  recipes: PropTypes.oneOfType([null, PropTypes.array]),
  showRecipeModal: PropTypes.func
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
  eyeIconWrapper: {
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
