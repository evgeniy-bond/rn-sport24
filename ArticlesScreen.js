import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import Page from '../components/Page';
import ArticlesContainer from '../containers/ArticlesContainer';

export default class ArticlesScreen extends Component {
  static navigationOptions = {
    title: 'Статьи',
    tabBarIcon: ({ focused }) => <NavigationIcon name="articles" focused={focused} />
  };

  render() {
    return (
      <Page title="Статьи">
        <ArticlesContainer/>
      </Page>
    )
  }
}