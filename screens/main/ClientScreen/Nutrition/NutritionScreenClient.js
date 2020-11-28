import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import NutritionPlan from '../../../../components/Client/Nutrition/NutritionPlan';
import Colors from '../../../../constants/Colors';

const NutritionPlanComp = () => <NutritionPlan />;

const NutritionPlanComp2 = () => <NutritionPlan />;

export default createMaterialTopTabNavigator(
  {
    NutritionPlanComp: {
      screen: NutritionPlanComp,
      navigationOptions: {
        tabBarLabel: 'Nutrition Plan'
      }
    },
    NutritionPlanComp2: {
      screen: NutritionPlanComp2,
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
