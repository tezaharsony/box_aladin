
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation'

import MyComponent1 from './test_drawernavigator1'
import MyComponent2 from './test_drawernavigator2'
import MainScreen from '../main_screen'
import ContentMain from './ContentMain'
const Drawer = DrawerNavigator(
  {
    First: {
      path:'/',
      screen: MainScreen
    },
    Second: {
      path:'/test',
      screen: MyComponent2
    }
  },
  {
    title: 'home',
    drawerPosition: 'left',
    drawerWidth: 200,
    headerMode: 'float',
    contentComponent: ContentMain
  }
)

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
