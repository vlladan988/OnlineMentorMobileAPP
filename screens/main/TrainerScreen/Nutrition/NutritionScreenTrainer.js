import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Constants from 'expo-constants';

import Colors from '../../../../constants/Colors';
import Groceries from '../../../../components/Trainer/Nutritions/Groceries/Groceries';
import Recipes from '../../../../components/Trainer/Nutritions/Recipe/Recipes';
import Templates from '../../../../components/Trainer/Nutritions/Template/Templates';

const GroceriesComp = () => <Groceries />;

const RecipeComp = () => <Recipes />;

const TemplateComp = () => <Templates />;

export default createMaterialTopTabNavigator(
  {
    GroceriesComp: {
      screen: GroceriesComp,
      navigationOptions: {
        tabBarLabel: 'Groceries'
      }
    },
    RecipeComp: {
      screen: RecipeComp,
      navigationOptions: {
        tabBarLabel: 'Recipes'
      }
    },
    TemplateComp: {
      screen: TemplateComp,
      navigationOptions: {
        tabBarLabel: 'Templates'
      }
    }
  },

  {
    defaultNavigationOptions: () => {
      return {
        lazy: true,
        tabBarOptions: {
          scrollEnabled: true,
          style: {
            backgroundColor: Colors.lightBackgroundAppColor,
            activeTintColor: Colors.black,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS,
            borderBottomWidth: 1,
            borderColor: Colors.borderLine,
            paddingTop: Constants.statusBarHeight // dodatooo
          },
          indicatorStyle: {
            backgroundColor: Colors.cloudColor
          },
          labelStyle: {
            color: Colors.white,
            fontFamily: 'montserrat-bold'
          }
        }
      };
    }
  }
);
