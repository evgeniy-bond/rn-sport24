import { REQUEST_ARTICLES, RECEIVE_ARTICLES, RECEIVE_ARTICLES_FAILURE  } from './actionTypes';

export function requestArticles() {
  return {
    type: REQUEST_ARTICLES
  }
}

export function receiveArticles(articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles
  }
}

export function receiveArticlesFailure() {
  return {
    type: RECEIVE_ARTICLES_FAILURE
  }
}

export function getArticles(feedLimit, newsLimit) {
  return async dispatch => {

    dispatch(requestArticles());

    try {
      const resp = await fetch('https://sport24.ru/api/8news/news?feedLimit=10&newsLimit=35');
      const data = await resp.json();
      const articles = data && data.feed && data.feed.all;

      dispatch(receiveArticles(articles));

    } catch (err) {
      console.log(err);
      dispatch(receiveArticlesFailure());
    }
  }
}
