import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NewsItem from '../NewsItem';



export default class MainNews extends Component {
  render() {
    return (
      <View style={{paddingLeft: 0, paddingRight: 0, paddingTop: 20, paddingBottom: 20}}>
        {['','', ''].map((el,i) => <NewsItem key={i}/>)}
      </View>
    );
  }
}