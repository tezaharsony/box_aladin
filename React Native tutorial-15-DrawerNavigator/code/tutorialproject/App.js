import React from 'react';
import {Button, Text, Platform, ScrollView, StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/Testing'

const DrawerExample = DrawerNavigator(
    {
        First: {
          path: '/',
          screen: FirstScreen,
        },
        Second: {
          path: '/sent',
          screen: SecondScreen,
        },
        Third: {
          path: '/test',
          screen: ThirdScreen,
        }
    },
    {
        title: 'Home',
        drawerLabel: 'Home',
        initialRouteName: 'Third',
        drawerPosition: 'left',
        drawerWidth: 200,
        drawerBackgroundColor: 'transparent',
        headerMode: 'float',
        contentOptions: {
            inactiveTintColor: 'yellow',
            activeTintColor: 'white',
            itemsContainerStyle: {
              marginTop: 80,
              borderWidth: 1,
              borderRadius: 2,
              borderColor: 'black',
              backgroundColor: 'black'
            },
        navigationOptions: {

          }
        },
    }
);

export default DrawerExample;
