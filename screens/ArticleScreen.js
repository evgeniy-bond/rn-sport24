import React, { Component } from 'react';
import Page from '../components/Page';
import ArticleContainer from '../containers/ArticleContainer';

export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: 'Статья',
  };

  render() {
    return (
      <Page>
        <ArticleContainer/>
      </Page>
    )
  }
}