import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Colors from '../../../../constants/Colors';
import NutritionPlan from '../../../../components/Trainer/Nutritions/NutritionPlan';

const WorkoutPlan = () => <NutritionPlan title={'Workout Plan'} />;

const Exercises = () => <NutritionPlan title={'Exercises'} />;

export default createMaterialTopTabNavigator(
  {
    WorkoutPlan: {
      screen: WorkoutPlan,
      navigationOptions: {
        tabBarLabel: 'Workout Plan'
      }
    },
    Exercises: {
      screen: Exercises,
      navigationOptions: {
        tabBarLabel: 'Exercises'
      }
    }
  },
  {
    defaultNavigationOptions: () => {
      return {
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
  },
  {
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      style: { color: 'red' }
    }
  }
);
