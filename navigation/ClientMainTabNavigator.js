import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import $t from 'i18n';
import * as Icon from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/main/TrainerScreen/Settings/SettingsScreen';
import ClientLeftSlider from '../screens/main/ClientLeftSlider';
import ChangePassword from '../screens/main/profile/ChangePassword';
import HandleTabBarLabelStyle from '../helpers/HandleTabBarLabelStyle';
import Colors from '../constants/Colors';
import IconName from '../constants/IconName';
import WorkoutScreen from '../screens/main/TrainerScreen/Workout/WorkoutScreen';
import ChatScreen from '../screens/main/TrainerScreen/ChatScreen/ChatScreen';
import HeaderBarStyle from '../constants/HeaderBarStyle';
import HomeScreenClient from '../screens/main/ClientScreen/Home/HomeScreenClient';
import { addHeaderRightNavigator } from '../helpers';
import Layout from '../constants/Layout';
import NutritionScreenClient from '../screens/main/ClientScreen/Nutrition/NutritionScreenClient';
import SharedClientDailyMeals from '../components/shared/SharedClientDailyMeals';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreenClient,
    navigationOptions: ({ navigation }) => {
      const headerRightNav = addHeaderRightNavigator(navigation);

      return {
        ...headerRightNav,
        title: 'Home',
        headerStyle: HeaderBarStyle,
        headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
      };
    }
  },
  ChangePassword
  // EditProfile
});

/* eslint-disable react/prop-types, react/display-name */
HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.home')} />
  ),
  tabBarIcon: ({ focused }) => (
    <Icon.Octicons
      name={IconName.home}
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

const NutritionStack = createStackNavigator({
  Nutrition: {
    screen: NutritionScreenClient,
    navigationOptions: () => {
      return {
        title: 'Nutrition',
        headerStyle: HeaderBarStyle,
        headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
      };
    }
  },
  SelectedClientDailyPlanScreen: {
    screen: SharedClientDailyMeals,
    navigationOptions: {
      headerStyle: HeaderBarStyle
    }
  }
});

NutritionStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.nutrition')} />
  ),
  tabBarIcon: ({ focused }) => (
    <Icon.MaterialCommunityIcons
      name={IconName.nutritions}
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

const WorkoutStack = createStackNavigator({
  Workout: {
    screen: WorkoutScreen,
    navigationOptions: () => {
      return {
        title: 'Workout',
        headerStyle: HeaderBarStyle,
        headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
      };
    }
  }
});

WorkoutStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.workout')} />
  ),
  tabBarIcon: ({ focused }) => (
    <Icon.Entypo
      name={IconName.workout}
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

const ChatStack = createStackNavigator({
  Workout: {
    screen: ChatScreen,
    navigationOptions: () => {
      return {
        title: 'Chat',
        headerStyle: HeaderBarStyle,
        headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
      };
    }
  }
});

ChatStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.chat')} />
  ),
  tabBarIcon: ({ focused }) => (
    <Icon.Entypo
      name={IconName.chat}
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: () => {
      return {
        title: 'Settings',
        headerStyle: HeaderBarStyle,
        headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
      };
    }
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <HandleTabBarLabelStyle focused={focused} name={$t('tabBar.settings')} />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    NutritionStack,
    WorkoutStack,
    ChatStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: Colors.darkBackgroundAppColor,
        borderTopColor: Colors.backgroundAppColor,
        borderTopWidth: 1,
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 10,
        shadowRadius: 16.0,
        elevation: 24
      },
      keyboardHidesTabBar: true
    }
  }
);

export default createDrawerNavigator(
  {
    BottomTabNavigator: BottomTabNavigator
  },
  {
    drawerWidth: Layout.window.width - 70,
    contentComponent: ClientLeftSlider,
    overlayColor: 0.9
  }
);
