import { REQUEST_ARTICLES, RECEIVE_ARTICLES, RECEIVE_ARTICLES_FAILURE } from '../actions/articlesActionTypes';
import article from './article';
import { combineReducers } from 'redux'

const initialState = {
  offset: 0,
  articles: [],
  isLoading: true
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_ARTICLES:
      return {
        ...state,
        articles: [
          ...state.articles,
          ...action.articles
        ],
        offset: state.offset + 10,
        isLoading: false
      }
    case RECEIVE_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}

export default combineReducers({
  articles,
  article
});