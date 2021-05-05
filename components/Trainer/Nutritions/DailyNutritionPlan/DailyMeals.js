import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import * as Icon from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../../../constants/Colors';
import ShadowStyleLow from '../../../../constants/ShadowStyleLow';
import IconName from '../../../../constants/IconName';

const DailyMeals = ({ showAddMealModal, meals, setMeal }) => {
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
        <TouchableOpacity style={styles.addMealIconWrapper} onPress={showAddMealModal}>
          <Icon.AntDesign name={IconName.plus} size={30} color={Colors.lightOker} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DailyMeals;

DailyMeals.propTypes = {
  showAddMealModal: PropTypes.func,
  meals: PropTypes.array,
  setMeal: PropTypes.func
};

const styles = StyleSheet.create({
  addMealIconWrapper: {
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingRight: 10
  },
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
