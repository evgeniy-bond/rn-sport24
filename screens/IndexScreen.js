import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';

export default class IndexScreen extends Component {
  static navigationOptions = {
    title: 'Лента',
    tabBarIcon: ({ focused }) => <NavigationIcon name="feed" focused={focused}/>
  };
  render() {
    return (
      <View>
        <Text>Главная</Text> 
      </View> 
    );
  }
}

