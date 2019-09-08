import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Home/screen/HomeScreen';
import RankScreen from './Rank/screen/RankScreen';
import ProfileScreen from './Profile/screen/ProfileScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Rank: RankScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: '活水',
    },
  },
);

export default createAppContainer(navigator);
