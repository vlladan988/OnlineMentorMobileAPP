import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import ShadowStyleLow from '../../constants/ShadowStyleLow';
import Colors from '../../constants/Colors';

const SharedDailyMeals = ({ meals, setMeal }) => {
  const [choosedMealId, setChoosedMealId] = useState(null);

  useEffect(
    () => {
      if (meals.length && !choosedMealId) {
        setMeal(meals[0]);
        setChoosedMealId(meals[0].id);
      }
    },
    [meals]
  );

  const handleChoosedMeal = meal => {
    setMeal(meal);
    setChoosedMealId(meal.id);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollMealsWrapper}
      >
        {meals.map((meal, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={[
              ShadowStyleLow,
              choosedMealId === meal.id ? styles.choosedMealNameWrapper : styles.mealNameWrapper
            ]}
            onPress={() => handleChoosedMeal(meal)}
          >
            <Text style={styles.mealText}>{meal.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SharedDailyMeals;

SharedDailyMeals.propTypes = {
  meals: PropTypes.array,
  setMeal: PropTypes.func
};

const styles = StyleSheet.create({
  choosedMealNameWrapper: {
    backgroundColor: Colors.darkOker,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  mealNameWrapper: {
    backgroundColor: Colors.light,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  mealText: {
    color: Colors.darkBackgroundAppColor,
    fontFamily: 'montserrat-bold'
  },
  scrollMealsWrapper: {
    paddingVertical: 30
  }
});
