import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import TrainerMainTabNavigator from './TrainerMainTabNavigator';
import ClientMainTabNavigator from './ClientMainTabNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthNavigator,
    TrainerMainStack: TrainerMainTabNavigator,
    ClientMainStack: ClientMainTabNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(AppNavigator);
