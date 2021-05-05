import React, { useEffect } from 'react';
import { StyleSheet, Modal, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SharedLinearGradientBackgroundVertical from '../SharedLinearGradientBackgroundVertical';
import Colors from '../../../constants/Colors';
import DailyRecipeImage from '../../Trainer/Nutritions/DailyNutritionPlan/DailyModal/CreateEditModal/DailyRecipeImage';
import DailyRecipeEmailDescType from '../../Trainer/Nutritions/DailyNutritionPlan/DailyModal/CreateEditModal/DailyRecipeEmailDescType';
import SharedImportedGroceryList from '../SharedImportedGroceryList';
import { useDispatch } from 'react-redux';
import { setImportedGroceries } from '../../../store/actions/GroceriesActions';
import { IsEditScreen } from '../../../helpers/IsEditScreen';
import SubmitButtonDailyRecipe from '../../Trainer/Nutritions/DailyNutritionPlan/DailyModal/CreateEditModal/SubmitButtonDailyRecipe';

const SharedCreateEditDailyRecipeModal = ({
  isCreateEditModal,
  closeModal,
  recipe,
  handleCreateRecipe,
  handleEditRecipe,
  screen
}) => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (recipe) {
        if (IsEditScreen(screen)) {
          recipe.daily_recipe_groceries &&
            recipe.daily_recipe_groceries.forEach(recipeItem => {
              dispatch(setImportedGroceries(recipeItem));
            });
        } else {
          recipe.recipe_groceries &&
            recipe.recipe_groceries.forEach(recipeItem => {
              dispatch(setImportedGroceries(recipeItem));
            });
        }
      }
    },
    [recipe]
  );

  return (
    <Modal animationType="slide" transparent={true} visible={isCreateEditModal}>
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
      >
        <SafeAreaView style={styles.modalWrapper}>
          <KeyboardAwareScrollView enableOnAndroid>
            <ScrollView style={styles.scrollWrapper}>
              {recipe && (
                <>
                  <DailyRecipeImage screen={'create'} recipe={recipe} goBack={closeModal} />
                  <DailyRecipeEmailDescType
                    name={recipe.name}
                    description={''}
                    recipeDetails={recipe}
                  />
                  <SharedImportedGroceryList closeIcon={false} />
                  <SubmitButtonDailyRecipe
                    handleCreateRecipe={handleCreateRecipe}
                    handleEditRecipe={handleEditRecipe}
                    screen={screen}
                  />
                </>
              )}
            </ScrollView>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </SharedLinearGradientBackgroundVertical>
    </Modal>
  );
};

export default SharedCreateEditDailyRecipeModal;

SharedCreateEditDailyRecipeModal.propTypes = {
  isCreateEditModal: PropTypes.bool,
  screen: PropTypes.string,
  recipe: PropTypes.object,
  closeModal: PropTypes.func,
  handleCreateRecipe: PropTypes.func,
  handleEditRecipe: PropTypes.func
};

const styles = StyleSheet.create({
  modalWrapper: {
    alignSelf: 'center',
    width: '100%'
  },
  scrollWrapper: {
    height: '100%',
    width: '100%'
  }
});
