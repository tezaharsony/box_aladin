import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class Screen1 extends React.Component {


  render() {
    let data = [
      {
        value: 'pisang'
      }, {
        value: 'jambu'
      }, {
        value : 'apel'
      }
    ]
      return (
        <Dropdown
          label='Favorite Fruit'
          data={data}
        />
      );
  }
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#230B05',
    // paddingBottom: 100,
    height: 80, //harus diganti klau sudah pakai flex
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow'
  },
  iconStyle: {
    color:'yellow',
    fontSize: 40
  },
  Home: {
    marginTop: 100
  }
});
