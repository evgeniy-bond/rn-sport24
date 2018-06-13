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

export function getArticles() {
  return async (dispatch, getState) => {
    const offset = getState().articles.offset;
    dispatch(requestArticles());

    try {
      const resp = await fetch(`https://sport24.ru/api/8news/news/mainPage/feed?limit=10&offset=${offset}`);
      const articles = await resp.json();

      dispatch(receiveArticles(articles));

    } catch (err) {
      console.log(err);
      dispatch(receiveArticlesFailure());
    }
  }
}
