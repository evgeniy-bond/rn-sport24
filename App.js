import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import RootStack from './screens';

export default class App extends Component {
//   componentDidMount() {
//     this.getNews();
//   }
//   // async getNews() {
//   //   const resp = await fetch('https://sport24.ru/api/8news/news?feedLimit=17&newsLimit=50');
//   //   const data = await resp.json();
//   //   console.log(data);
//   // }
  render() {
    return <RootStack/>;
  }
}