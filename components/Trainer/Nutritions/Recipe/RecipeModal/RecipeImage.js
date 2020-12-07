import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import $t from 'i18n';

import ImageTypeRadioButtons from '../ImageTypeRadioButtons';
import ShadowStyleHigh from '../../../../../constants/ShadowStyleHigh';
import breakfast from '../../../../../assets/images/meal.jpg';
import lunch from '../../../../../assets/images/lunch.png';
import dinner from '../../../../../assets/images/dinner.jpg';
import Colors from '../../../../../constants/Colors';

const RecipeImage = () => {
  const [imageType, setImageType] = useState(0);
  const changeImageType = id => setImageType(id);

  return (
    <View style={styles.imageContainer}>
      <Text style={styles.mealImageText}>Meal Image</Text>
      <ImageTypeRadioButtons changeImageType={changeImageType} />
      <View style={[ShadowStyleHigh, styles.imageWrapper]}>
        <Image
          source={
            imageType === 0 ? breakfast : imageType === 1 ? lunch : dinner
          }
          style={styles.mealImage}
        />
        <Text style={styles.chooseImageText}>
          {$t('trainer.uploadRecipeImage')}
        </Text>
      </View>
    </View>
  );
};

export default RecipeImage;

export const styles = StyleSheet.create({
  chooseImageText: {
    color: Colors.cloudColor,
    textAlign: 'center'
  },
  imageContainer: {
    paddingVertical: 80
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
  },
  mealImageText: {
    alignSelf: 'center',
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
