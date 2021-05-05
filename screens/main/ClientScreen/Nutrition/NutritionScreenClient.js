import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// import NutritionPlan from '../../../../components/Client/Nutrition/NutritionPlan';
import Colors from '../../../../constants/Colors';
import SharedClientTemplate from '../../../../components/shared/SharedClientTemplate';
import SharedClientDailyPlan from '../../../../components/shared/SharedClientDailyPlan';

const ClientTemplateComp = () => <SharedClientTemplate />;
const ClientDailyComp = () => <SharedClientDailyPlan />;

export default createMaterialTopTabNavigator(
  {
    ClientTemplateComp: {
      screen: ClientTemplateComp,
      navigationOptions: {
        tabBarLabel: 'Template'
      }
    },
    ClientDailyComp: {
      screen: ClientDailyComp,
      navigationOptions: {
        tabBarLabel: 'Daily Plan'
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
