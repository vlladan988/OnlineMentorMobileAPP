import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Colors from '../../../../constants/Colors';
import NutritionPlanTrainer from '../../../../components/Trainer/Nutritions/NutritionPlanTrainer';
import Recipes from '../../../../components/Trainer/Nutritions/Recipe/Recipes';

const TrainerNutritionPlanComp = () => <NutritionPlanTrainer />;

const RecipeComp = () => <Recipes />;

export default createMaterialTopTabNavigator(
  {
    TrainerNutritionPlanComp: {
      screen: TrainerNutritionPlanComp,
      navigationOptions: {
        tabBarLabel: 'Nutrition Plan'
      }
    },
    RecipeComp: {
      screen: RecipeComp,
      navigationOptions: {
        tabBarLabel: 'Recipes'
      }
    }
  },

  {
    defaultNavigationOptions: () => {
      return {
        lazy: true,
        tabBarOptions: {
          style: {
            backgroundColor: Colors.lightBackgroundAppColor,
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
            color: Colors.white
          }
        }
      };
    }
  }
);
