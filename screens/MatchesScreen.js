import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';

export default class MatchesScreen extends Component {
  static navigationOptions = {
    title: 'Матчи',
    tabBarIcon: ({ focused }) => <NavigationIcon name="matches" focused={focused}/>
  };
  render() {
    return (
      <View>
        <Text>Матчи</Text>
      </View> 
    );
  }
}