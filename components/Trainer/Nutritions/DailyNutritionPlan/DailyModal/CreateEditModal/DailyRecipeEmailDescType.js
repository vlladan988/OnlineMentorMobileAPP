import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import Colors from '../../../../../../constants/Colors';

const DailyRecipeEmailDescType = ({ name, recipeDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <Text style={styles.text}>{$t('trainer.recipeName')}</Text>
        <Text style={styles.itemValueText}>{name}</Text>
      </View>
      <View style={styles.itemWrapper}>
        <Text style={styles.text}>{$t('trainer.recipeDesc')}</Text>
        <Text style={styles.itemValueText}>{recipeDetails.recipe_description}</Text>
      </View>
      <View style={styles.itemWrapper}>
        <Text style={styles.text}>Recipe Type</Text>
        <Text style={styles.itemValueText}>{recipeDetails.recipe_type}</Text>
      </View>
    </View>
  );
};

export default DailyRecipeEmailDescType;

DailyRecipeEmailDescType.propTypes = {
  name: PropTypes.string,
  recipeDetails: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5
  },
  itemValueText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 16,
    padding: 10
  },
  itemWrapper: {
    marginVertical: 15
  },
  text: {
    color: Colors.light,
    fontFamily: 'montserrat-bold',
    fontSize: 18
  }
});
