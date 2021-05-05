import React from 'react';
import { StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import breakfast from '../../../../../../assets/images/meal.jpg';
import lunch from '../../../../../../assets/images/lunch.png';
import dinner from '../../../../../../assets/images/dinner.jpg';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import Colors from '../../../../../../constants/Colors';
import { isDefaultImage } from '../../../../../../helpers/IsDefaultImage';
import IconName from '../../../../../../constants/IconName';

const DailyRecipeImage = ({ recipe, goBack }) => {
  let image = [breakfast, lunch, dinner];

  return (
    <ImageBackground
      source={
        isDefaultImage(recipe.recipe_image_url)
          ? image[recipe.recipe_image_url]
          : { uri: recipe.recipe_image_url }
      }
      style={[styles.mealImage, ShadowStyleHigh]}
    >
      <View style={styles.backgroundDark}>
        <TouchableOpacity onPress={goBack} style={styles.goBackIconWrapper}>
          <Icon.MaterialCommunityIcons name={IconName.backCircle} size={50} color={Colors.light} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default DailyRecipeImage;

DailyRecipeImage.propTypes = {
  handleIsCustomImage: PropTypes.func,
  screen: PropTypes.string,
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  goBack: PropTypes.func
};

export const styles = StyleSheet.create({
  backgroundDark: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  goBackIconWrapper: {
    left: 10,
    position: 'absolute',
    top: 10
  },
  mealImage: {
    alignSelf: 'center',
    height: 250,
    marginBottom: 20,
    resizeMode: 'cover',
    width: '100%'
  }
});
