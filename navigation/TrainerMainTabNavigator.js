import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import $t from 'i18n';
import * as Icon from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreenTrainer from '../screens/main/TrainerScreen/Home/HomeScreenTrainer';
import SettingsScreen from '../screens/main/TrainerScreen/Settings/SettingsScreen';
import TrainerLeftSlider from '../screens/main/TrainerLeftSlider';
import ChangePassword from '../screens/main/profile/ChangePassword';
import ClientCreate from '../screens/auth/ClientCreate';
import EditProfileScreen from '../screens/main/TrainerScreen/Profile/EditProfileScreen';
import HandleTabBarLabelStyle from '../helpers/HandleTabBarLabelStyle';
import Colors from '../constants/Colors';
import NutritionScreenTrainer from '../screens/main/TrainerScreen/Nutrition/NutritionScreenTrainer';
import IconName from '../constants/IconName';
import WorkoutScreen from '../screens/main/TrainerScreen/Workout/WorkoutScreen';
import ChatScreen from '../screens/main/TrainerScreen/ChatScreen/ChatScreen';
import HeaderBarStyle from '../constants/HeaderBarStyle';
import WelcomeScreen from '../screens/main/TrainerScreen/WelcomeScreen';
import { addHeaderLeftNavigator, addHeaderRightNavigator } from '../helpers';
import Layout from '../constants/Layout';
import TemplateMealScreenTrainer from '../screens/main/TrainerScreen/Nutrition/TemplateMealScreenTrainer';
import DailyMealsScreenTrainer from '../screens/main/TrainerScreen/Nutrition/DailyMealsScreenTrainer';
import SharedClientDailyMeals from '../components/shared/SharedClientDailyMeals';

const HomeStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Home: {
    screen: HomeScreenTrainer,
    navigationOptions: ({ navigation }) => {
      const headerLeftNav = addHeaderLeftNavigator(navigation);
      const headerRightNav = addHeaderRightNavigator(navigation);
      return {
        ...headerLeftNav,
        ...headerRightNav,
        headerStyle: HeaderBarStyle,
        headerTitleStyle: { color: Colors.white, fontWeight: 'bold' },
        title: 'Home'
      };
    }
  },
  SelectedClientDailyPlanScreen: {
    screen: SharedClientDailyMeals,
    navigationOptions: {
      headerStyle: HeaderBarStyle
    }
  },
  ClientCreate,
  ChangePassword,
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: ({ navigation }) => {
      const headerLeftNav = addHeaderLeftNavigator(navigation);
      return {
        ...headerLeftNav,
        headerStyle: HeaderBarStyle,
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: 'montserrat-bold'
        },
        title: 'Update profile'
      };
    }
  }
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
    screen: NutritionScreenTrainer,
    // navigationOptions: () => {
    //   return {
    //     title: 'Nutrition',
    //     headerStyle: HeaderBarStyle,
    //     headerTitleStyle: { color: Colors.white, fontWeight: 'bold' }
    //   };
    // }
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  TemplateMealScreenTrainer: {
    screen: TemplateMealScreenTrainer,
    navigationOptions: {
      headerStyle: HeaderBarStyle
    }
  },
  DailyMealsScreenTrainer: {
    screen: DailyMealsScreenTrainer,
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
    contentComponent: TrainerLeftSlider,
    overlayColor: 0.9
  }
);
