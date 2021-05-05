import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SharedLinearGradientBackgroundVertical from '../../../../components/shared/SharedLinearGradientBackgroundVertical';
import Colors from '../../../../constants/Colors';
import DailyMealsHeader from '../../../../components/Trainer/Nutritions/DailyNutritionPlan/DailyMealsHeader';
import DailyMeals from '../../../../components/Trainer/Nutritions/DailyNutritionPlan/DailyMeals';
import CountAndRemoveButton from '../../../../components/Trainer/Nutritions/DailyNutritionPlan/CountAndRemoveButton';
import DailyMealList from '../../../../components/Trainer/Nutritions/DailyNutritionPlan/DailyMealList';
import {
  addDailyMeal,
  fetchDailyMeals,
  setDailyMealList,
  addDailyMealRecipe,
  removeDailyMeal,
  updateDailyMealRecipe,
  removeDailyMealRecipe
} from '../../../../store/actions/DailyPlanActions';
import { dailyMealListSelector } from '../../../../store/selectors/DailyPlanSelector';
import SharedCreateEditDailyRecipeModal from '../../../../components/shared/modal/SharedCreateEditDailyRecipeModal';
import { importedGroceryListSelector } from '../../../../store/selectors/GrocerySelector';
import ChooseRecipeModal from '../../../../components/shared/modal/ChooseRecipeModal';
import AddMealModal from '../../../../components/shared/modal/AddMealModal';
import { requiredFieldsValidation } from '../../../../helpers/RequiredFieldsValidation';
import { setInputFealdError } from '../../../../store/actions/ErrorActions';

const DailyMealsScreenTrainer = ({ navigation }) => {
  const dispatch = useDispatch();

  const dailyMealList = useSelector(dailyMealListSelector());
  const importedGroceryList = useSelector(importedGroceryListSelector());

  const client = navigation.state.params.client;
  const date = navigation.state.params.date;

  const [mealText, setMealText] = useState('');
  const [screen, setScreen] = useState('create');

  const [choosedMeal, setChoosedMeal] = useState(null);
  const [choosedRecipe, setChoosedRecipe] = useState(null);
  const [isCreateEditModal, setIsCreateEditModal] = useState(false);
  const [isChooseRecipeModal, setIsChooseRecipeModal] = useState(false);
  const [isCreateMealModal, setIsCreateMealModal] = useState(false);

  useEffect(() => {
    dispatch(
      fetchDailyMeals({
        clientId: client.id,
        date
      })
    );
    return () => {
      dispatch(setDailyMealList([]));
    };
  }, []);

  useEffect(
    () => {
      choosedMeal && setChoosedMeal(dailyMealList.find(item => item.id === choosedMeal.id));
    },
    [dailyMealList]
  );

  const showCreateEditModal = () => setIsCreateEditModal(prevState => !prevState);

  const handleShowChooseRecipeModal = () => setIsChooseRecipeModal(prevState => !prevState);

  const handleShowAddMealModal = () => setIsCreateMealModal(prevState => !prevState);

  const handleCloseModal = () => {
    setChoosedRecipe(null);
    showCreateEditModal();
  };

  const handleChoosedMeal = meal => setChoosedMeal(meal);

  const handleAddMeal = () => {
    if (requiredFieldsValidation(new Array(mealText))) {
      dispatch(setInputFealdError('The Name field is required.'));
    } else {
      dispatch(
        addDailyMeal({
          clientId: client.id,
          name: mealText,
          date
        })
      );
      handleShowAddMealModal();
      setMealText('');
    }
  };

  const handleRemoveMeal = () => {
    dispatch(
      removeDailyMeal({
        mealId: choosedMeal.id,
        date,
        clientId: client.id
      })
    );
  };

  const handleChooseRecipe = (recipe, screen) => {
    screen === 'create' && handleShowChooseRecipeModal();
    setScreen(screen);
    setChoosedRecipe(recipe);
    showCreateEditModal();
  };

  const handleCreateRecipe = () => {
    dispatch(
      addDailyMealRecipe({
        clientId: client.id,
        date,
        dailyMealId: choosedMeal.id,
        recipeId: choosedRecipe.id,
        dailyRecipeGroceries: importedGroceryList
      })
    );
    showCreateEditModal();
  };

  const handleEditRecipe = () => {
    dispatch(
      updateDailyMealRecipe({
        clientId: client.id,
        date,
        dailyMealId: choosedMeal.id,
        recipeId: choosedRecipe.id,
        dailyRecipeGroceries: importedGroceryList
      })
    );
    showCreateEditModal();
  };

  const handleDeleteRecipe = recipe => {
    dispatch(
      removeDailyMealRecipe({
        clientId: client.id,
        date,
        dailyMealId: choosedMeal.id,
        recipeId: recipe.id
      })
    );
  };

  return (
    <SharedLinearGradientBackgroundVertical
      childrenColors={[
        Colors.lightBackgroundAppColor,
        Colors.backgroundAppColor,
        Colors.darkBackgroundAppColor
      ]}
      childrenStyle={styles.gradientWrapper}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <ChooseRecipeModal
            isVisible={isChooseRecipeModal}
            closeModal={handleShowChooseRecipeModal}
            chooseRecipe={handleChooseRecipe}
            recipes={choosedMeal}
          />
          <AddMealModal
            isVisible={isCreateMealModal}
            closeModal={handleShowAddMealModal}
            handleSave={handleAddMeal}
            setMealText={setMealText}
            mealText={mealText}
          />
          <SharedCreateEditDailyRecipeModal
            isCreateEditModal={isCreateEditModal}
            closeModal={handleCloseModal}
            recipe={choosedRecipe}
            handleCreateRecipe={handleCreateRecipe}
            handleEditRecipe={handleEditRecipe}
            screen={screen}
          />
          <DailyMealsHeader client={client} date={date} />
          <DailyMeals
            showAddMealModal={handleShowAddMealModal}
            meals={dailyMealList}
            setMeal={handleChoosedMeal}
          />
          <CountAndRemoveButton choosedMeal={choosedMeal} handleRemoveMeal={handleRemoveMeal} />
          <DailyMealList
            showCreateEditModal={handleShowChooseRecipeModal}
            recipes={choosedMeal}
            showAddMealModal={handleShowAddMealModal}
            handleEditDailyRecipeModalVisible={handleChooseRecipe}
            handleDeleteDailyRecipe={handleDeleteRecipe}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SharedLinearGradientBackgroundVertical>
  );
};

export default DailyMealsScreenTrainer;

DailyMealsScreenTrainer.navigationOptions = {
  header: null
};

DailyMealsScreenTrainer.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradientWrapper: {
    flex: 1
  }
});
