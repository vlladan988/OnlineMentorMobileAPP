import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';

import ImageTypeRadioButtons from './ImageTypeRadioButtons';
import breakfast from '../../../../../../assets/images/meal.jpg';
import lunch from '../../../../../../assets/images/lunch.png';
import dinner from '../../../../../../assets/images/dinner.jpg';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import Colors from '../../../../../../constants/Colors';
import { isEditRecipeOrEditGroceryScreen } from '../../../../../../helpers/IsEditRecipeOrEditGroceryScreen';
import { isDefaultRecipeImage } from '../../../../../../helpers/IsDefaultRecipeImage';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const RecipeImage = ({ handleIsCustomImage, screen, recipe }) => {
  let image = [breakfast, lunch, dinner];
  const [imageType, setImageType] = useState(image[0]);
  const [isCustomImage, setIsCustomImage] = useState(false);
  const [imageName, setImageName] = useState(0);

  useEffect(() => {
    if (isEditRecipeOrEditGroceryScreen(screen)) {
      if (isDefaultRecipeImage(recipe.recipe_image_url)) {
        changeImageType(parseInt(recipe.recipe_image_url));
      } else {
        setIsCustomImage(true);
        setImageName({ uri: recipe.recipe_image_url });

        // handleIsCustomImage(true, result.base64);
      }
    }
  }, []);

  const changeImageType = id => {
    setImageType(image[id]);
    setIsCustomImage(false);
    setImageName(id);
    handleIsCustomImage(false, id);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1
    });

    setIsCustomImage(true);
    setImageName(result);

    handleIsCustomImage(true, result.base64);
  };

  return (
    <View style={styles.imageContainer}>
      <View style={ShadowStyleHigh}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientWrapper}
        >
          <ImageTypeRadioButtons
            changeImageType={changeImageType}
            imageId={isCustomImage ? null : imageName}
          />
          <TouchableOpacity
            onPress={pickImage}
            activeOpacity={0.5}
            style={[ShadowStyleHigh, styles.imageWrapper]}
          >
            <Image
              source={isCustomImage ? { uri: imageName.uri } : imageType}
              style={styles.mealImage}
            />
            <Text style={styles.chooseImageText}>
              {$t('trainer.uploadRecipeImage')}
            </Text>
          </TouchableOpacity>
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </View>
  );
};

export default RecipeImage;

RecipeImage.propTypes = {
  handleIsCustomImage: PropTypes.func,
  screen: PropTypes.string,
  recipe: PropTypes.object
};

export const styles = StyleSheet.create({
  chooseImageText: {
    color: Colors.lightOker,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  gradientWrapper: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20
  },
  imageContainer: {
    paddingTop: 40
  },
  imageWrapper: {
    paddingBottom: 30
  },
  mealImage: {
    alignSelf: 'center',
    height: 300,
    marginBottom: 30,
    resizeMode: 'cover',
    width: 300
  }
});
