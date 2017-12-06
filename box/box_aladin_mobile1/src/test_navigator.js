import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default class TestNavigator extends React.Component {
  static navigationOptions = {
    title: 'Second Screen'
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 , fontWeight: 'bold'}}>THIS JUST TEST FOR navigation</Text>
      </View>
    )
  }
}
