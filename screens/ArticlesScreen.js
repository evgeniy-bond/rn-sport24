import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import Page from '../components/Page';
import Articles from '../components/Articles';
import { connect } from 'react-redux'
import { getArticles } from '../actions';

class ArticlesScreen extends Component {
  static navigationOptions = {
    title: 'Статьи',
    tabBarIcon: ({ focused }) => <NavigationIcon name="articles" focused={focused} />
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getArticles())
  }

  render() {
    const { isLoading, articles, dispatch } = this.props;

    return (
      <Page title="Статьи">
        <Articles
          articles={articles}
          isLoading={isLoading}
          getArticles={() => dispatch(getArticles())}
        />
      </Page>
    )
  }
}

const mapStatToProps = state => {
  return {
    articles: state.articles.articles,
    isLoading: state.articles.isLoading
  }
}

export default connect(mapStatToProps)(ArticlesScreen)