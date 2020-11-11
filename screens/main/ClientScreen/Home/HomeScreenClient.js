import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Colors from '../../../../constants/Colors';
import Measurements from '../../../../components/Client/Home/Measurements';
import Gallery from '../../../../components/Client/Home/Gallery/Gallery';
import Profile from '../../../../components/Client/Home/Profile/Profile';
import Goals from '../../../../components/Client/Home/Goal/Goals';

const ProfileComp = () => <Profile />;
const GoalsComp = () => <Goals />;
const GalleryComp = () => <Gallery />;
const MeasurementsComp = () => <Measurements title={'Measurements'} />;

export default createMaterialTopTabNavigator(
  {
    Profile: {
      screen: ProfileComp,
      navigationOptions: {
        tabBarLabel: 'Profile'
      }
    },
    Goals: {
      screen: GoalsComp,
      navigationOptions: {
        tabBarLabel: 'Goals'
      }
    },
    Gallery: {
      screen: GalleryComp,
      navigationOptions: {
        tabBarLabel: 'Gallery'
      }
    },

    Measurements: {
      screen: MeasurementsComp,
      navigationOptions: {
        tabBarLabel: 'Measurements'
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
