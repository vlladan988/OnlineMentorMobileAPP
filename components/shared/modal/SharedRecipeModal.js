/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';
import Colors from '../../../constants/Colors';
import IconName from '../../../constants/IconName';
import { isDefaultImage } from '../../../helpers/IsDefaultImage';
import recipeBottom from '../../../assets/images/recipeBottom.jpg';
import dinner from '../../../assets/images/dinner.jpg';
import lunch from '../../../assets/images/lunch.png';
import breakfast from '../../../assets/images/meal.jpg';
import Layout from '../../../constants/Layout';
import { sumRecipeGrocery } from '../../../helpers/SumRecipeGrocery';

const SharedRecipeModal = ({ isVisible, closeModal, recipe }) => {
  let image = [breakfast, lunch, dinner];

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.darkBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.lightBackgroundAppColor
        ]}
        childrenStyle={styles.gradientModalWrapper}
      >
        <SafeAreaView>
          <ScrollView style={styles.scroll}>
            <TouchableOpacity
              style={styles.goBackIconWrapper}
              activeOpacity={0.7}
              onPress={() => closeModal([])}
            >
              <Icon.Ionicons name={IconName.goBack} size={30} color={Colors.light} />
              <View style={styles.caloriesWrapper}>
                <Icon.MaterialCommunityIcons name={IconName.fire} color={Colors.oker} size={30} />
                <Text style={styles.caloryText}>
                  Calories:{' '}
                  {recipe.recipe_groceries && sumRecipeGrocery(recipe.recipe_groceries).calories}{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.detailsWrapper}>
              <View style={styles.nameWrapper}>
                <Text style={styles.nameText}>{recipe.name}</Text>
              </View>
              <View style={styles.valuesWrapper}>
                <View style={styles.values}>
                  <Text style={styles.valueText}>
                    {recipe.recipe_groceries && sumRecipeGrocery(recipe.recipe_groceries).fats}
                    gr{' '}
                  </Text>
                  <Text style={styles.valueText}>Fats</Text>
                </View>
                <View style={styles.values}>
                  <Text style={styles.valueText}>
                    {recipe.recipe_groceries && sumRecipeGrocery(recipe.recipe_groceries).carbons}
                    gr{' '}
                  </Text>
                  <Text style={styles.valueText}>Carbons</Text>
                </View>
                <View style={styles.values}>
                  <Text style={styles.valueText}>
                    {recipe.recipe_groceries && sumRecipeGrocery(recipe.recipe_groceries).proteins}
                    gr{' '}
                  </Text>
                  <Text style={styles.valueText}>Proteins</Text>
                </View>
              </View>
              <View style={styles.groceryWrapper}>
                <Text style={styles.groceryHeaderText}>Groceries</Text>
                <View style={styles.groceryDetailWrapper}>
                  {recipe.recipe_groceries &&
                    recipe.recipe_groceries.map((grocery, index) => (
                      <View key={index} style={styles.groceryValueWrapper}>
                        <Icon.Octicons
                          name={IconName.dot}
                          color={Colors.oker}
                          size={20}
                          style={styles.dotIcon}
                        />
                        <Text style={styles.valueText}>{grocery.name}</Text>
                        <Text style={styles.valueTypeText}>
                          {' '}
                          {grocery.unit_type} {grocery.unit}
                        </Text>
                      </View>
                    ))}
                </View>
              </View>
              <View style={styles.imgWrapper}>
                <Image
                  source={
                    isDefaultImage(recipe.recipe_image_url)
                      ? image[recipe.recipe_image_url]
                      : { uri: recipe.recipe_image_url }
                  }
                  style={styles.mealImage}
                />
              </View>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.descriptionHeaderText}>Description</Text>
              <ImageBackground
                source={recipeBottom}
                style={styles.mealImageBottom}
                imageStyle={styles.imgBottom}
              >
                <View style={styles.descriptionBlur}>
                  <ScrollView>
                    <Text style={styles.descriptionText}>{recipe.recipe_description}</Text>
                  </ScrollView>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SharedLinearGradientBackgroundVertical>
    </Modal>
  );
};

export default SharedRecipeModal;

SharedRecipeModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  recipe: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const styles = StyleSheet.create({
  caloriesWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  caloryText: {
    color: Colors.lightOker,
    fontFamily: 'montserrat-regular'
  },
  descriptionBlur: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  descriptionHeaderText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 30,
    paddingLeft: 10
  },
  descriptionText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    padding: 10
  },
  descriptionWrapper: {
    paddingVertical: 20
  },
  dotIcon: {
    paddingHorizontal: 5
  },
  goBackIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 20
  },
  gradientModalWrapper: {
    flex: 1
  },
  groceryDetailWrapper: {
    paddingVertical: 10
  },
  groceryHeaderText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 30
  },
  groceryValueWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5
  },
  groceryWrapper: {
    paddingLeft: 10,
    paddingTop: 70
  },
  imgBottom: {
    borderRadius: 20
  },
  imgWrapper: {
    position: 'absolute',
    right: -(Layout.window.width - 50) / 2,
    top: 40
  },
  mealImage: {
    alignSelf: 'center',
    borderRadius: (Layout.window.width - 50) / 2,
    height: Layout.window.width - 50,
    resizeMode: 'cover',
    width: Layout.window.width - 50
  },
  mealImageBottom: {
    alignSelf: 'center',
    borderRadius: 20,
    height: 200,
    marginTop: 20,
    resizeMode: 'contain',
    width: Layout.window.width - 10
  },
  nameText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 40
  },
  nameWrapper: {
    paddingLeft: 10,
    paddingVertical: 20,
    width: '60%'
  },
  scroll: {
    height: '100%'
  },
  valueText: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 20
  },
  valueTypeText: {
    color: Colors.oker,
    fontFamily: 'montserrat-bold',
    fontSize: 20
  },
  values: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  valuesWrapper: {
    paddingLeft: 15,
    paddingVertical: 20
  }
});
