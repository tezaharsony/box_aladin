import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default class Header extends React.Component {

  render() {
    return(
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
    )
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
    justifyContent: 'space-between'
  }
})
