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
    //   componentDidMount() {
//     this.getNews();
//   }
//   // async getNews() {
//   //   const resp = await fetch('https://sport24.ru/api/8news/news/mainPage/news?limit=25&offset=35&tab=all');
//   //   const data = await resp.json();
//   //   console.log(data);
//   // }


  render() {
    return (
      <Page title="Новости">
        <MainNews />
      </Page>
    );
  }
}