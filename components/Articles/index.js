import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import ArticleItem from '../ArticleItem';
import { Button, ActivityIndicator } from 'react-native';
import s from './styles.js';

export default class Articles extends Component {
  render() {
    const { isLoading, getArticles } = this.props;

    return (
      <ScrollView style={s.container}>
        {this.props.articles.map((el, i) => <ArticleItem key={i} {...el} />)}
        <View style={s.container__btns}>
          {isLoading
            ? <ActivityIndicator size="large" color="#5050b4" />
            : <Button
              title="Загрузить еще"
              onPress={getArticles}
              color="#5050b4"
            />
          }
        </View>
      </ScrollView>
    );
  }
}