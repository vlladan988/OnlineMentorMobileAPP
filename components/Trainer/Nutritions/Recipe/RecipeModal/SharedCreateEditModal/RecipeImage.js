import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import $t from 'i18n';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import ImageTypeRadioButtons from './ImageTypeRadioButtons';
import breakfast from '../../../../../../assets/images/meal.jpg';
import lunch from '../../../../../../assets/images/lunch.png';
import dinner from '../../../../../../assets/images/dinner.jpg';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import Colors from '../../../../../../constants/Colors';
import { IsEditScreen } from '../../../../../../helpers/IsEditScreen';
import { isDefaultImage } from '../../../../../../helpers/IsDefaultImage';
import IconName from '../../../../../../constants/IconName';

const RecipeImage = ({ handleIsCustomImage, screen, recipe, goBack }) => {
  let image = [breakfast, lunch, dinner];
  const [imageType, setImageType] = useState(image[0]);
  const [isCustomImage, setIsCustomImage] = useState(false);
  const [imageName, setImageName] = useState(0);

  const handleGoBack = () => {
    goBack();
  };

  useEffect(() => {
    if (IsEditScreen(screen)) {
      if (isDefaultImage(recipe.recipe_image_url)) {
        changeImageType(parseInt(recipe.recipe_image_url));
      } else {
        setIsCustomImage(true);
        setImageName({ uri: recipe.recipe_image_url });
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

    if (!result.cancelled) {
      setIsCustomImage(true);
      setImageName(result);

      handleIsCustomImage(true, result.base64);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={pickImage} activeOpacity={0.5} style={ShadowStyleHigh}>
        <Image
          source={isCustomImage ? { uri: imageName.uri } : imageType}
          style={styles.mealImage}
        />
        <Text style={styles.chooseImageText}>{$t('trainer.uploadRecipeImage')}</Text>
      </TouchableOpacity>
      <ImageTypeRadioButtons
        changeImageType={changeImageType}
        imageId={isCustomImage ? null : imageName}
      />
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackIconWrapper}>
        <Icon.MaterialCommunityIcons name={IconName.backCircle} size={50} color={Colors.light} />
      </TouchableOpacity>
    </>
  );
};

export default RecipeImage;

RecipeImage.propTypes = {
  handleIsCustomImage: PropTypes.func,
  screen: PropTypes.string,
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  goBack: PropTypes.func
};

export const styles = StyleSheet.create({
  chooseImageText: {
    alignSelf: 'center',
    color: Colors.lightOker,
    fontFamily: 'montserrat-italic',
    fontSize: 16,
    textAlign: 'center',
    width: '80%'
  },
  goBackIconWrapper: {
    left: 10,
    position: 'absolute',
    top: 10
  },
  mealImage: {
    alignSelf: 'center',
    height: 250,
    marginBottom: 30,
    resizeMode: 'cover',
    width: '100%'
  }
});
