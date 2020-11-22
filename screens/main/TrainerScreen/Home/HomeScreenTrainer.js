import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Colors from '../../../../constants/Colors';
import SelectedClientProfile from '../../../../components/Trainer/Home/Profile/SelectedClientProfile';
import SelectedClientGoals from '../../../../components/Trainer/Home/Goal/SelectedClientGoals';
import SelectedClientGallery from '../../../../components/Trainer/Home/Gallery/SelectedClientGallery';

const SelectedClientProfileComp = () => <SelectedClientProfile />;
const SelectedClientGoalsComp = () => <SelectedClientGoals />;
const SelectedClientGalleryComp = () => <SelectedClientGallery />;

export default createMaterialTopTabNavigator(
  {
    Profile: {
      screen: SelectedClientProfileComp,
      navigationOptions: {
        tabBarLabel: 'Profile'
      }
    },
    Goal: {
      screen: SelectedClientGoalsComp,
      navigationOptions: {
        tabBarLabel: 'Goals'
      }
    },
    Gallery: {
      screen: SelectedClientGalleryComp,
      navigationOptions: {
        tabBarLabel: 'Gallery'
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
