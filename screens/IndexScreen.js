import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import Page from '../components/Page';

export default class IndexScreen extends Component {
  static navigationOptions = {
    title: 'Лента',
    tabBarIcon: ({ focused }) => <NavigationIcon name="feed" focused={focused}/>
  };
  render() {
    return (
      <Page title="Главная"/>
    );
  }
}

