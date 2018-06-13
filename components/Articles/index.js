import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import ArticleItem from '../ArticleItem';

export default class Articles extends Component {
  render() {
    const { isLoading } = this.props;

    return (
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }}>
        {this.props.articles.map((el, i) => <ArticleItem key={i} {...el} />)}
      </ScrollView>
    );
  }
}