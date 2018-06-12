import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import Page from '../components/Page';

export default class NewsScreen extends Component {
  static navigationOptions = {
    title: 'Статьи',
    tabBarIcon: ({ focused }) => <NavigationIcon name="articles" focused={focused}/>
  };
  render() {
    return (
      <Page title="Статьи" />
    )
  }
}