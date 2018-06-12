import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import Page from '../components/Page';

export default class VideosScreen extends Component {
  static navigationOptions = {
    title: 'Видео',
    tabBarIcon: ({ focused }) => <NavigationIcon name="media" focused={focused}/>
  };
  render() {
    return (
      <Page title="Видео"/>
    );
  }
}