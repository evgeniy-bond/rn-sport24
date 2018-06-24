import React, { Component } from 'react';
import Article from '../components/Article';
import { connect } from 'react-redux'
import { getArticle } from '../actions/articleActions';
import { withNavigation } from 'react-navigation';
import { ActivityIndicator } from 'react-native';

class ArticleContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const urn = this.props.navigation.getParam('urn');
    const sportUrn = this.props.navigation.getParam('sportUrn');
    dispatch(getArticle(urn, sportUrn))
  }

  render() {
    const { isLoading, article } = this.props;
    return (
      isLoading
        ? <ActivityIndicator size="large" color="#5050b4" />
        : <Article article={article}/>
    )
  }
}

const mapStatToProps = state => {
  return {
    article: state.article.article,
    isLoading: state.article.isLoading
  }
}

export default withNavigation(connect(mapStatToProps)(ArticleContainer))