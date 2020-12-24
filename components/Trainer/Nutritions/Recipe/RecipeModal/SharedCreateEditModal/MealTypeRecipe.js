import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import $t from 'i18n';
import PropTypes from 'prop-types';

import ReciepeTypeRadioButtons from './ReciepeTypeRadioButtons';
import Colors from '../../../../../../constants/Colors';
import { isEditRecipeOrEditGroceryScreen } from '../../../../../../helpers/IsEditRecipeOrEditGroceryScreen';
import ShadowStyleHigh from '../../../../../../constants/ShadowStyleHigh';
import SharedLinearGradientBackgroundHorizontal from '../../../../../shared/SharedLinearGradientBackgroundHorizontal';

const MealTypeRecipe = ({ setRecipeType, screen, recipe }) => {
  const [mealType, setMealType] = useState(null);

  useEffect(() => {
    isEditRecipeOrEditGroceryScreen(screen) &&
      changeMealType(recipe.recipe_type);
  }, []);

  const changeMealType = type => {
    setRecipeType(type);
    setMealType(type);
  };

  return (
    <View style={styles.mealTypeWrapper}>
      <View style={ShadowStyleHigh}>
        <SharedLinearGradientBackgroundHorizontal
          childrenColors={[
            Colors.darkBackgroundAppColor,
            Colors.backgroundAppColor,
            Colors.lightBackgroundAppColor
          ]}
          childrenStyle={styles.gradientWrapper}
        >
          <View style={styles.mealTypeResetWrapper}>
            <Text style={[styles.inputText, styles.mealTypeCancelPadding]}>
              {$t('trainer.recipeType')}
            </Text>
            {mealType && (
              <View style={styles.resetTextWrapper}>
                <Text
                  style={styles.resetText}
                  onPress={() => setMealType(null)}
                >
                  {$t('common.cancel')}
                </Text>
              </View>
            )}
          </View>
          <ReciepeTypeRadioButtons
            changeMealType={changeMealType}
            mealType={mealType}
            setCustomType={setRecipeType}
            screen={screen}
            recipe={recipe}
          />
        </SharedLinearGradientBackgroundHorizontal>
      </View>
    </View>
  );
};

export default MealTypeRecipe;

MealTypeRecipe.propTypes = {
  setRecipeType: PropTypes.func,
  screen: PropTypes.string,
  recipe: PropTypes.object
};

export const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  inputText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold'
  },
  mealTypeCancelPadding: {
    paddingVertical: 5
  },
  mealTypeResetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mealTypeWrapper: {
    paddingTop: 40
  },
  resetText: {
    color: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  resetTextWrapper: {
    backgroundColor: Colors.oker,
    borderRadius: 10
  }
});
