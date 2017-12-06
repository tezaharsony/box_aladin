/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Drawer from './routesDrawer'

export default class HomeScreen extends Component {
  render() {
    return (
      <Drawer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
