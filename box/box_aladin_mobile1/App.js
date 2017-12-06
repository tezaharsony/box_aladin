import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import MainScreen from './src/main_screen'
import TestNavigator from './src/test_navigator'
import HomeScreen from './src/HomeScreen/index'

const Navigation = StackNavigator({
  // First: { screen: MainScreen },
  // Second: { screen: TestNavigator  },
  Third: { screen: HomeScreen }
})

export default Navigation
