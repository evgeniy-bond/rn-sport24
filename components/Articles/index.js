import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import ArticleItem from '../ArticleItem';
import { Button, ActivityIndicator } from 'react-native';
import s from './styles.js';
import { withNavigation } from 'react-navigation';

class Articles extends Component {
  navigate = (urn, sportUrn) => {
    this.props.navigation.navigate('ArticleScreen', {urn, sportUrn})
  }

  render() {
    const { isLoading, getArticles, articles } = this.props;
    return (
      <ScrollView style={s.container}>
        {articles.map((el, i) => <ArticleItem key={i} {...el} navigate={() => this.navigate(el.urn, el.sport.urn)}/>)}
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

export default withNavigation(Articles)
