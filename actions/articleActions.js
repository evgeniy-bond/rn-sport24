import { REQUEST_ARTICLE, RECEIVE_ARTICLE, RECEIVE_ARTICLE_FAILURE } from './articleActionTypes';

export function requestArticle() {
  return {
    type: REQUEST_ARTICLE
  }
}

export function receiveArticle(article) {
  return {
    type: RECEIVE_ARTICLE,
    article
  }
}

export function receiveArticleFailure() {
  return {
    type: RECEIVE_ARTICLE_FAILURE
  }
}

export function getArticle(urn, sportUrn) {
  return async dispatch => {
    dispatch(requestArticle());

    try {
      const resp = await fetch(`https://sport24.ru/api/8news/news/${urn}?sportUrn=${sportUrn}`);
      const data = await resp.json();
      dispatch(receiveArticle(data));

    } catch (err) {
      console.log(err);
      dispatch(receiveArticleFailure());
    }
  }
}
