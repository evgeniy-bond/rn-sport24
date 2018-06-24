import React, { Component } from 'react';
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
      <Page>
        <ArticlesContainer/>
      </Page>
    )
  }
}