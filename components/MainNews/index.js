import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import NewsItem from '../NewsItem';

export default class MainNews extends Component {
  render() {
    return (
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20}}>
        {this.props.news.map((el,i) => <NewsItem key={i} {...el}/>)}
      </ScrollView>
    );
  }
}