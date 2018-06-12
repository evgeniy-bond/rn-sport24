import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import ArticleItem from '../ArticleItem';

export default class Articles extends Component {
  render() {
    return (
      <ScrollView style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 20, paddingBottom: 20 }}>
        {this.props.articles.map((el, i) => <ArticleItem key={i} {...el} />)}
      </ScrollView>
    );
  }
}