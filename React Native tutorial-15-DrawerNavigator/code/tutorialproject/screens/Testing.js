import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Screen1 from './Dropdown'


export default class ThirdScreen extends React.Component {


  render() {
      return (
      <View>
        <View style={styles.Header}>
          <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <Ionicons name='ios-menu' size = {45} color='yellow' style={{ padding: 10}}
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            />
          </View>
          <View style={{ justifyContent: 'flex-start', width: 100, alignItems: 'flex-start' }}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'contain', justifyContent: 'flex-start',
              }}
              source={require('./image3473.png')}
            />
          </View>
          <View style={{
             borderWidth: 2, borderColor: 'yellow' ,borderRadius: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 5}} >
            <Text style={{color: 'yellow' }}>Semakin Dilihat,</Text>
            <Text style={{color: 'yellow' }}>Semakin Murah</Text>
          </View>
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
          <Screen1/>
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
