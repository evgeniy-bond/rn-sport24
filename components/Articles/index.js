import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import ArticleItem from '../ArticleItem';
import { Button } from 'react-native';

export default class Articles extends Component {
  render() {
    const { isLoading, getArticles } = this.props;

    return (
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, marginBottom: 60 }}>
        {this.props.articles.map((el, i) => <ArticleItem key={i} {...el} />)}
        <Button
          title="Загрузить еще"
          onPress={getArticles}
        />
      </ScrollView>
    );
  }
}