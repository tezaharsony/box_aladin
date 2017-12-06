import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Header from './header'


export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'First Screen'
  }

  render() {
      var {navigate} = this.props.navigation
      console.log('this is props', this.props);
      return (
      <View>
        <View>
          <Header />
        </View>
        <View style={{flexDirection:'row', height: 60}}>
          <Text style={{ width: '80%', color:'blue'}}>Selamat anda telah mendapatakan point</Text>
          <Text style={{ flex: 1 ,flexWrap: 'wrap', backgroundColor:'grey'}}> TOP UP <Text style={{ fontWeight: 'bold', color:'yellow'}}>Aladinkey</Text></Text>
        </View>
        <View style={{flexDirection:'row', height: 60, backgroundColor:'yellow'}}>
          <Ionicons name='ios-phone-potrait' size= {60} style= {{paddingLeft: 15, width: '20%'}}/>
          <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center', textAlign: 'center', width: '80%'}}>PULSA</Text>
        </View>
        <View style={{ height: 60, backgroundColor: 'grey'}} >
          <Text>for menu</Text>
        </View>
        <View>
          <Button
            onPress={
              () => navigate('Second')
            }
            title = 'Go To TestNavigator' />
        </View>
      </View>
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
