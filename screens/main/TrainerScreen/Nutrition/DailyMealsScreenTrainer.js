import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import BottomSheet from 'reanimated-bottom-sheet';
import * as Icon from '@expo/vector-icons';

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
import { recipeListSelector } from '../../../../store/selectors/RecipeSelector';
import { importedGroceryListSelector } from '../../../../store/selectors/GrocerySelector';
import IconName from '../../../../constants/IconName';

const DailyMealsScreenTrainer = ({ navigation }) => {
  const dispatch = useDispatch();

  const dailyMealList = useSelector(dailyMealListSelector());
  const recipeList = useSelector(recipeListSelector());
  const importedGroceryList = useSelector(importedGroceryListSelector());

  const client = navigation.state.params.client;
  const date = navigation.state.params.date;

  const [mealText, setMealText] = useState('');
  const [screen, setScreen] = useState('create');

  const [choosedMeal, setChoosedMeal] = useState(null);
  const [choosedRecipe, setChoosedRecipe] = useState(null);
  const [isCreateEditModal, setIsCreateEditModal] = useState(false);

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

  const handleCloseModal = () => {
    setChoosedRecipe(null);
    showCreateEditModal();
  };

  const handleChoosedMeal = meal => setChoosedMeal(meal);

  const handleAddMeal = () => {
    dispatch(
      addDailyMeal({
        clientId: client.id,
        name: mealText,
        date
      })
    );
    sheetRefMeal.current.snapTo(1);
    setMealText('');
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
    setScreen(screen);
    setChoosedRecipe(recipe);
    showCreateEditModal();
    sheetRefRecipe.current.snapTo(1);
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

  const handleShowBottomSheetRecipe = () => {
    sheetRefMeal.current.snapTo(1);
    sheetRefRecipe.current.snapTo(0);
  };

  const handleShowBottomSheetMeal = () => {
    sheetRefRecipe.current.snapTo(1);
    sheetRefMeal.current.snapTo(0);
  };

  const sheetRefMeal = React.useRef(null);

  const mealContent = () => (
    <View style={styles.contentWrapper}>
      <View style={styles.line} />
      <ScrollView>
        <View style={styles.addMealInputWrapper}>
          <TextInput
            placeholder={'Breakfast, Dinner...'}
            value={mealText}
            onChangeText={text => setMealText(text)}
            style={styles.addMealInput}
          />
          <TouchableOpacity style={styles.saveButtonWrapper} onPress={handleAddMeal}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );

  const sheetRefRecipe = React.useRef(null);

  const recipeContent = () => (
    <View style={styles.contentWrapper}>
      <View style={styles.line} />
      <TextInput
        value={''}
        placeholder={'Search recipe'}
        placeholderTextColor={Colors.backgroundAppColor}
        style={styles.searchRecipe}
      />
      <ScrollView>
        {recipeList.map((recipe, index) => (
          <TouchableOpacity
            onPress={() => handleChooseRecipe(recipe, 'create')}
            key={index}
            style={styles.recipeBottomSheetWrapper}
          >
            <Text style={styles.recipeBottomSheetText}>{recipe.name}</Text>
            <Icon.AntDesign name={IconName.success} size={26} color={Colors.cloudColor} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <>
      <SharedLinearGradientBackgroundVertical
        childrenColors={[
          Colors.lightBackgroundAppColor,
          Colors.backgroundAppColor,
          Colors.darkBackgroundAppColor
        ]}
        childrenStyle={styles.gradientWrapper}
      >
        <SafeAreaView style={styles.container}>
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
            showAddMealBottomSheet={handleShowBottomSheetMeal}
            meals={dailyMealList}
            setMeal={handleChoosedMeal}
          />
          <CountAndRemoveButton choosedMeal={choosedMeal} handleRemoveMeal={handleRemoveMeal} />
          <DailyMealList
            showCreateEditModal={handleShowBottomSheetRecipe}
            recipes={choosedMeal}
            showAddMealBottomSheet={handleShowBottomSheetMeal}
            handleEditDailyRecipeModalVisible={handleChooseRecipe}
            handleDeleteDailyRecipe={handleDeleteRecipe}
          />
        </SafeAreaView>
      </SharedLinearGradientBackgroundVertical>
      <BottomSheet
        ref={sheetRefMeal}
        snapPoints={[120, 0, 0]}
        borderRadius={10}
        renderContent={mealContent}
        initialSnap={1}
      />
      <BottomSheet
        ref={sheetRefRecipe}
        snapPoints={[400, 0, 0]}
        borderRadius={10}
        renderContent={recipeContent}
        initialSnap={1}
      />
    </>
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
  addMealInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10
  },
  addMealInputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular'
  },
  container: {
    flex: 1
  },
  contentWrapper: {
    backgroundColor: Colors.light,
    height: 400
  },
  gradientWrapper: {
    flex: 1
  },
  line: {
    alignSelf: 'center',
    backgroundColor: Colors.lightGrayL,
    borderRadius: 20,
    height: 10,
    marginVertical: 20,
    width: 80
  },
  recipeBottomSheetText: {
    fontFamily: 'montserrat-regular',
    fontSize: 18
  },
  recipeBottomSheetWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.lightGrayL,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingVertical: 8
  },
  saveButtonWrapper: {
    backgroundColor: Colors.cloudColor,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  searchRecipe: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 0.2,
    height: 40,
    margin: 10,
    marginBottom: 30,
    paddingLeft: 20
  }
});
