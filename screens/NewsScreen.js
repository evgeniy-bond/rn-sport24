import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import MainNews from '../components/MainNews';
import Page from '../components/Page';

export default class NewsScreen extends Component {
  static navigationOptions = {
    title: 'Новости',
    tabBarIcon: ({ focused }) => <NavigationIcon name="news" focused={focused}/>
  };
  state = {
    news: []
  }

  componentDidMount() {
    this.getNews();
  }

  async getNews() {
    const resp = await fetch('https://sport24.ru/api/8news/news?feedLimit=17&newsLimit=26');
    const data = await resp.json();
    
    this.setState({
      news: data.quickNews.all
    })
  }


  render() {
    return (
      <Page title="Новости">
        <MainNews news={this.state.news}/>
      </Page>
    );
  }
}