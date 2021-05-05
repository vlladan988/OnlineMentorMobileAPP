import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDailyMeals, setDailyMealList } from '../../store/actions/DailyPlanActions';
import { currentClientSelector } from '../../store/selectors/ClientSelector';
import { userSelector } from '../../store/selectors/UserSelector';
import SharedLinearGradientBackgroundVertical from './SharedLinearGradientBackgroundVertical';
import Colors from '../../constants/Colors';
import { dailyMealListSelector } from '../../store/selectors/DailyPlanSelector';
import SharedClientMealsHeader from './SharedClientMealsHeader';
import SharedDailyMeals from './SharedDailyMeals';
import SharedClientDailyRecipes from './SharedClientDailyRecipes';
import SharedRecipeDailyModal from './modal/SharedRecipeDailyModal';

const SharedClientDailyMeals = ({ navigation }) => {
  const dispatch = useDispatch();

  const client = useSelector(currentClientSelector());
  const user = useSelector(userSelector());
  const dailyMealList = useSelector(dailyMealListSelector());

  const currentUser = client.id ? client : user;
  const [choosedMeal, setChoosedMeal] = useState(null);
  const [choosedRecipe, setChoosedRecipe] = useState([]);
  const [isRecipeModalVisible, setIsRecipeModalVisible] = useState(false);

  const date = navigation.state.params.date;

  useEffect(() => {
    dispatch(
      fetchDailyMeals({
        clientId: currentUser.id,
        date
      })
    );
    return () => {
      dispatch(setDailyMealList([]));
    };
  }, []);

  const handleChoosedMeal = meal => setChoosedMeal(meal);

  const showRecipeModal = recipe => {
    setChoosedRecipe(recipe);
    setIsRecipeModalVisible(prevState => !prevState);
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
        <SharedRecipeDailyModal
          isVisible={isRecipeModalVisible}
          recipe={choosedRecipe}
          closeModal={showRecipeModal}
        />
        <SharedClientMealsHeader client={currentUser} date={date} />
        <SharedDailyMeals meals={dailyMealList} setMeal={handleChoosedMeal} />
        <View style={styles.countTextWrapper}>
          <Text style={styles.countText}>
            Count: {choosedMeal && choosedMeal.daily_meal_recipes.length}
          </Text>
        </View>
        <SharedClientDailyRecipes recipes={choosedMeal} showRecipeModal={showRecipeModal} />
      </SafeAreaView>
    </SharedLinearGradientBackgroundVertical>
  );
};

export default SharedClientDailyMeals;

SharedClientDailyMeals.propTypes = {
  navigation: PropTypes.object
};

SharedClientDailyMeals.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countText: {
    color: Colors.light,
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    paddingVertical: 2
  },
  countTextWrapper: {
    marginBottom: 40,
    marginLeft: 20
  },
  gradientWrapper: {
    flex: 1
  }
});
