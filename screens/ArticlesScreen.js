import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import Page from '../components/Page';
import Articles from '../components/Articles';

export default class ArticlesScreen extends Component {
  static navigationOptions = {
    title: 'Статьи',
    tabBarIcon: ({ focused }) => <NavigationIcon name="articles" focused={focused}/>
  };
  
  state = {
    articles: []
  }

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    const resp = await fetch('https://sport24.ru/api/8news/news?feedLimit=14&newsLimit=35');
    const data = await resp.json();
    this.setState({ articles: data.feed.all })
  }

  render() {
    return (
      <Page title="Статьи">
        <Articles articles={this.state.articles}/>
      </Page>
    )
  }
}