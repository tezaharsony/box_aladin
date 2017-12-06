/**
 * Created by hoangnd on 7/5/17.
 */
import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'Great',
        tabBarLabel: 'Screen 1',
        // drawerIcon: ({tintColor}) => {
        //     console.log("tintColor = " + tintColor);
        //     return (
        //
        //     );
        // }
    }
    render() {
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <Text style={{fontSize: 30, color: 'green'}}>
                Screen 1
            </Text>
            <Button
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                title="Open DrawNavigator"
            />
        </View>
    }
}
