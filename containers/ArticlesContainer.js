import React, { Component } from 'react';
import Articles from '../components/Articles';
import { connect } from 'react-redux'
import { getArticles } from '../actions';

class ArticlesContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getArticles())
  }

  render() {
    const { isLoading, articles, dispatch } = this.props;

    return (
        <Articles
          articles={articles}
          isLoading={isLoading}
          getArticles={() => dispatch(getArticles())}
        />
    )
  }
}

const mapStatToProps = state => {
  return {
    articles: state.articles.articles,
    isLoading: state.articles.isLoading
  }
}

export default connect(mapStatToProps)(ArticlesContainer)