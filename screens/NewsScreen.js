import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';

export default class NewsScreen extends Component {
  static navigationOptions = {
    title: 'Новости',
    tabBarIcon: ({ focused }) => <NavigationIcon name="news" focused={focused}/>
  };
  render() {
    return (
      <View>
        <Text>Новости</Text>
      </View> 
    );
  }
}