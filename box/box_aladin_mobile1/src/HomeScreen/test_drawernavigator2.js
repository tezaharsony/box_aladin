/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyComponent2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the MyComponent component from 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
