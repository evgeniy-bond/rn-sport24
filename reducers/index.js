import { REQUEST_ARTICLES, RECEIVE_ARTICLES, RECEIVE_ARTICLES_FAILURE } from '../actions/actionTypes';
import { combineReducers } from 'redux'

const initialState = {
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
        articles: action.articles,
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
  articles
});