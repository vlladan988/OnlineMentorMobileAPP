import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Colors from '../../../../constants/Colors';
import NutritionPlan from '../../../../components/Trainer/Nutritions/NutritionPlan';

const WorkoutPlan = () => <NutritionPlan title={'Nutritions'} />;

const Exercises = () => <NutritionPlan title={'Meals'} />;

export default createMaterialTopTabNavigator(
  {
    WorkoutPlan: {
      screen: WorkoutPlan,
      navigationOptions: {
        tabBarLabel: 'Nutrition Plan'
      }
    },
    Exercises: {
      screen: Exercises,
      navigationOptions: {
        tabBarLabel: 'Meals'
      }
    }
  },

  {
    defaultNavigationOptions: () => {
      return {
        lazy: true,
        tabBarOptions: {
          style: {
            backgroundColor: 'transparent',
            activeTintColor: Colors.black,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS,
            borderBottomWidth: 1,
            borderColor: Colors.borderLine
          },
          indicatorStyle: {
            backgroundColor: Colors.cloudColor
          },
          labelStyle: {
            color: Colors.black
          }
        }
      };
    }
  }
);
